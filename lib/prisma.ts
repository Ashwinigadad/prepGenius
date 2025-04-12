import { PrismaClient } from "@prisma/client";

declare global {
  // Prevent TypeScript from complaining about adding `prisma` to `globalThis`
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
