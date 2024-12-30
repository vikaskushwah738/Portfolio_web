// import {  PrismaClient } from "@prisma/client";

// globalThis.prisma ||= new PrismaClient()

// export const prisma = globalThis.prisma as PrismaClient
// prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };
