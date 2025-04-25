import { PrismaClient } from "@prisma/client";

// Extend the globalThis type to include our prisma instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a single PrismaClient instance or reuse the existing one during development
export const db = globalThis.prisma ?? new PrismaClient();

// In development, store the instance in globalThis to avoid multiple instances during hot reloads
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
