// Basic in-memory rate limiting map
// Key: IP address, Value: Array of request timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "3600000", 10);
const MAX_REQUESTS_PER_WINDOW = parseInt(process.env.MAX_REQUESTS_PER_WINDOW || "3", 10);

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  if (realIp) {
    return realIp.trim();
  }
  
  // Fallback for local development or direct connections without proxy headers
  return "127.0.0.1";
}

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  let timestamps = rateLimitMap.get(ip) || [];
  // Filter out requests older than the window
  timestamps = timestamps.filter((timestamp) => timestamp > windowStart);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}
