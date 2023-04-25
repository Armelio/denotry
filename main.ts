import { Application, Router } from "https://deno.land/x/oak/mod.ts"; 
const router = new Router();
router.get("/", (ctx) => {
    ctx.response.body = { message: "Hello, fucking world!" };
  });
  const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: 8000 });

