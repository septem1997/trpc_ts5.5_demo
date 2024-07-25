import { trpcBuilder } from 'api-trpc'
import { z } from 'zod'
import type {inferRouterInputs} from "@trpc/server";

export const userRouter = trpcBuilder.router({
    login:trpcBuilder.procedure.input(z.object({
        username:z.string(),
        password:z.string()
    })).mutation(()=>{
        // do something
        return {
            token:''
        }
    })
})







export type RouterInputs = inferRouterInputs<typeof userRouter>;
