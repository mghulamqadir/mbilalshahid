import { beforeAll, describe, expect, it } from "vitest";
beforeAll(() => { process.env.INTEGRATION_ENCRYPTION_KEY = Buffer.alloc(32, 7).toString("base64"); });
describe("secret encryption", () => { it("encrypts and decrypts the admin TOTP secret", async () => { const { decryptSecret, encryptSecret } = await import("@/lib/crypto"); const encrypted = encryptSecret("JBSWY3DPEHPK3PXP"); expect(encrypted).not.toContain("JBSWY3DPEHPK3PXP"); expect(decryptSecret(encrypted)).toBe("JBSWY3DPEHPK3PXP"); }); });
