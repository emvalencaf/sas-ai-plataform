// cleark tools
import { auth } from "@clerk/nextjs";

// prisma tools
import prismadb from "./prismadb";

// constants
import { MAX_FREE_COUNTS } from "../constants";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) return;

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId,
        },
    });

    userApiLimit
        ? await prismadb.userApiLimit.update({
              where: {
                  userId,
              },
              data: {
                  count: userApiLimit.count + 1,
              },
          })
        : await prismadb.userApiLimit.create({
              data: { userId, count: 1 },
          });
};

export const checkApiLimit = async () => {
    const { userId } = auth();

    if (!userId) return false;

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId,
        },
    });

    return !userApiLimit || userApiLimit.count < MAX_FREE_COUNTS ? true : false;
};

export const getApiLimitCount = async () => {
    const { userId } = auth();

    if (!userId) return 0;

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId,
        },
    });

    if (!userApiLimit) return 0;

    return userApiLimit?.count;

}