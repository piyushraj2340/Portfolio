export const particles = [
  { left: '8%', top: '72%', size: 3, delay: 0, duration: 16 },
  { left: '18%', top: '38%', size: 2, delay: 3, duration: 21 },
  { left: '27%', top: '84%', size: 4, delay: 6, duration: 18 },
  { left: '36%', top: '22%', size: 2, delay: 1.5, duration: 24 },
  { left: '45%', top: '66%', size: 3, delay: 8, duration: 19 },
  { left: '54%', top: '30%', size: 2, delay: 4.5, duration: 22 },
  { left: '63%', top: '78%', size: 3, delay: 2, duration: 17 },
  { left: '72%', top: '44%', size: 2, delay: 7, duration: 23 },
  { left: '81%', top: '20%', size: 4, delay: 5, duration: 20 },
  { left: '90%', top: '60%', size: 2, delay: 9.5, duration: 18 },
  { left: '12%', top: '54%', size: 2, delay: 11, duration: 25 },
  { left: '68%', top: '12%', size: 3, delay: 13, duration: 21 },
];

export function FloatingParticles() {
  return (
    <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-0">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute animate-drift rounded-full bg-primary/70"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: `-${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
