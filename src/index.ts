import 'dotenv/config';
import fastify, { FastifyInstance } from 'fastify'
import { IUser } from './interface/IUser'
const server: FastifyInstance = fastify({ logger: Boolean(process.env.SERVER_LOG_ENABLED) })

const port = Number(process.env.SERVER_PORT) || 3000;
const host = process.env.SERVER_HOST || '127.0.0.1';

server.get<{ Body: IUser }>("/user/:id", async (req, res) => {
  const { id } = req.params as IUser
  server.log.info(id)
  res.send({ "mensaje": "este es el punto de entrada" })
})

server.listen({ port: port, host: host }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  console.log(`El servidor se está ejecutando en: ${address}`)
})