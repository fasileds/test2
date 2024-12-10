import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const fastify = Fastify();
const prisma = new PrismaClient();
fastify.post("/api/register", async (request, reply) => {
  try {
    const user = request.body;
    const res = await prisma.userList.create({
      data: user,
    });
    reply.send(res);
  } catch (error) {
    reply.status(500).send({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});
fastify.get("/api/usercount", async (request, reply) => {
  try {
    const totalUsers = await prisma.userList.count();
    reply.send({ totalUsers });
  } catch (err) {
    reply.status(500).send({
      error: "Internal Server Error",
      message: err.message,
    });
  }
});
try {
  await fastify.listen({ port: 6776, host: "0.0.0.0" });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
