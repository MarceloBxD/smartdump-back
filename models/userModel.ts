import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const userModel = {
  getAllUsers: async () => {
    return await prisma.user.findMany();
  },

  getUserById: async (id: number) => {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  },

  createUser: async (data: any) => {
    return await prisma.user.create({
      data: data,
    });
  },

  updateUser: async (id: number, data: any) => {
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: data,
    });
  },

  deleteUser: async (id: number) => {
    return await prisma.user.delete({
      where: {
        id: id,
      },
    });
  },
};
