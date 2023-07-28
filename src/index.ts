import "dotenv/config"
import fastify from "fastify"
import helmet from "@fastify/helmet"
import userRouter from "./components/User/user.router"
import * as endPoints from "./constants/endPoints"

const host = process.env.SERVER_HOST || "127.0.0.1"
const port = Number(process.env.SERVER_PORT) || 3000

const startServer = async () => {
  try {
    const app = fastify({ logger: Boolean(process.env.SERVER_LOG_ENABLED) })

    app.get("/", (_request, reply) => {
      reply
        .code(200)
        .send("This is a learning fastify-typescript proyect :)")
        .type("text/plain")
    })

    /*Register middleware */
    app.register(helmet, {
      global: true,
      contentSecurityPolicy: false,
      xPoweredBy: false
    })

    /*Register routers */
    app.register(userRouter, { prefix: endPoints.USER_END_POINT })

    app.setErrorHandler((error) => {
      app.log.error(error)
    })

    await app.listen({ port: port, host: host })
  } catch (error) {
    if (error) {
      console.error(error)
      process.exit(1)
    }
  }
}

process.on("unhandledRejection", (e) => {
  console.error(e)
  process.exit(1)
})

startServer()
