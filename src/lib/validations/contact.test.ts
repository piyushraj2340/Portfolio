import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact";

describe("contactSchema", () => {
  it("accepts a valid inquiry", () => {
    const result = contactSchema.safeParse({
      name: "Ada Lovelace",
      email: "ada@example.com",
      message: "I would like to discuss a role on the platform team.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects an invalid email and a short message", () => {
    const result = contactSchema.safeParse({
      name: "A",
      email: "not-an-email",
      message: "Hi",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const fields = result.error.issues.map((issue) => issue.path[0]);
      expect(fields).toEqual(expect.arrayContaining(["name", "email", "message"]));
    }
  });
});
