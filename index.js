const { NODE_ENV = "development", PORT = 3000 } = process.env;
console.time("Start");

/** @type {string} */
let address;

if (NODE_ENV === "production") {
  const { app } = await import("./dist/index.js");
  address = await app.listen(PORT);
} else {
  const { once } = await import("node:events");
  const { createServer } = await import("vite");
  const devServer = await createServer({ server: { middlewareMode: "ssr" } });

  const server = devServer.middlewares
    .use(async (req, res, next) => {
      try {
        /** @type {{app: import('fastify').FastifyInstance}} */
        const { app } = await devServer.ssrLoadModule("./src/index.ts");
        await app.ready();
        app.routing(req, res);
      } catch (err) {
        return next(err);
      }
    })
    .listen(PORT);

  await once(server, "listening");
  address = `http://localhost:${server.address().port}`;
}

console.timeEnd("Start");
console.log(`Env: ${NODE_ENV}`);
console.log(`Address: ${address}`);
