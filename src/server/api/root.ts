import { createTRPCRouter } from '~/server/api/trpc'

export const appRouter = createTRPCRouter({
  // routers
})

export type AppRouter = typeof appRouter
