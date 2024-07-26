import { initTRPC } from "@trpc/server";

export type Context = {
    user: { username:string } | null;
};

export const trpcBuilder = initTRPC.context<Context>().create();
export const tRouter = trpcBuilder.router
export const tProcedure = trpcBuilder.procedure