import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const userLiscenceModel = {
  getUserLiscences: async (id: number) => {
    return await prisma.userLiscence.findUnique({
      where: {
        id,
      },
    });
  },
};
