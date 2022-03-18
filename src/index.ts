import fastify from "fastify";
import { env } from "node:process";

const DEV = env["NODE_ENV"] !== "production";
const PORT = env["PORT"] || 3000;

const app = fastify({ logger: DEV && { prettyPrint: true } });

app.get("/", async (_request, _response) => {
  return { message: "Hello" };
});

await app.listen(PORT, "0.0.0.0");
