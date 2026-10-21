import { createHmac, timingSafeEqual } from "node:crypto";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function decodeBase32(input: string) {
  const bits = input.toUpperCase().replace(/=+$/g, "").split("").map((character) => {
    const index = alphabet.indexOf(character); if (index < 0) throw new Error("Invalid base32 secret"); return index.toString(2).padStart(5, "0");
  }).join("");
  return Buffer.from((bits.match(/.{8}/g) ?? []).map((byte) => Number.parseInt(byte, 2)));
}
function codeAt(secret: string, counter: number) {
  const buffer = Buffer.alloc(8); buffer.writeBigUInt64BE(BigInt(counter));
  const digest = createHmac("sha1", decodeBase32(secret)).update(buffer).digest(); const offset = digest[digest.length - 1] & 0xf;
  return (((digest[offset] & 0x7f) << 24 | digest[offset + 1] << 16 | digest[offset + 2] << 8 | digest[offset + 3]) % 1_000_000).toString().padStart(6, "0");
}
export function verifyTotp(code: string, secret: string, now = Date.now()) {
  if (!/^\d{6}$/.test(code)) return false;
  const supplied = Buffer.from(code);
  return [-1, 0, 1].some((window) => { const expected = Buffer.from(codeAt(secret, Math.floor(now / 30_000) + window)); return expected.length === supplied.length && timingSafeEqual(expected, supplied); });
}
