import { PrismaClient, TypeLiscence } from "@prisma/client";

const prisma = new PrismaClient();

function addOneMonth(date: Date): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + 1);
  if (result.getMonth() === 0) {
    result.setFullYear(result.getFullYear() + 1);
  }
  return result;
}

export const liscenceModel = {
  getAllLiscences: async () => {
    return await prisma.liscence.findMany();
  },
  getLiscenceById: async (id: number) => {
    return await prisma.liscence.findUnique({
      where: {
        id: id,
      },
    });
  },

  updateLiscence: async (id: number, data: any) => {
    return await prisma.liscence.update({
      where: {
        id: id,
      },
      data: data,
    });
  },

  createNewLiscence: async (type: TypeLiscence, price: number) => {
    return await prisma.liscence.create({
      data: {
        type: type,
        price: price,
      },
    });
  },
  associateLiscenceToUser: async (userId: number, liscenceId: number) => {
    const now = new Date();
    const nextMonth = addOneMonth(now);

    return await prisma.userLiscence.create({
      data: {
        userId: userId,
        liscenceId: liscenceId,
        startedAt: now,
        endedAt: nextMonth,
      },
    });
  },
  isLiscenceActive: async (userId: number) => {
    return await prisma.userLiscence.findFirst({
      where: {
        userId: userId,
        endedAt: {
          gt: new Date(),
        },
      },
      include: {
        liscence: true,
      },
    });
  },
  GetUserAggregateType: async (userId: number) => {
    return await prisma.user.aggregate({
      where: {
        id: userId,
      },
      _count: true,
    });
  },
  getUserLiscenceHistory: async (userId: number) => {
    return await prisma.userLiscence.findMany({
      where: {
        userId: userId,
      },
      include: {
        liscence: true,
      },
      orderBy: {
        startedAt: "asc",
      },
    });
  },
  createLiscence: async (type: TypeLiscence, price: number) => {
    return await liscenceModel.createNewLiscence(type, price);
  },
  associateLiscence: async (userId: number, liscenceId: number) => {
    return await liscenceModel.associateLiscenceToUser(userId, liscenceId);
  },
};
