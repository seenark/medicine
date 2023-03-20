import { publicProcedure, router } from ".";

export const appRouter = router({
  hello: publicProcedure.query(() => {
    console.log("hello query called");
    return "hello";
  }),
});

export type TAppRouter = typeof appRouter;
