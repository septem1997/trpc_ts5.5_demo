import { trpcBuilder } from 'api-trpc'
import { z } from 'zod'

export const userProcedures = trpcBuilder.router({
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