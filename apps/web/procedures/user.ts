import { tRouter,tProcedure } from 'api-trpc'
import { z } from 'zod'

export const articleRouter = tRouter({
    list:tProcedure.input(z.object({
        type:z.string()
    })).query(()=>{
        // do something
        return [
            {
                id:1,
                title:'title',
                content:'content'
            }
        ]
    })
})


export type ArticleRouter = typeof articleRouter