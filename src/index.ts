import fastify from "fastify";

export const app = fastify();

app.get("/", async (_request, _response) => {
  return { message: "Hello" };
});
