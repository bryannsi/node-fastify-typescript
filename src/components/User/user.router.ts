import { FastifyInstance } from "fastify"
import * as controller from "./user.controller"
import { userSchema } from "./user.schema"

const userRouter = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/users/:dni",
    schema: userSchema,
    handler: controller.GetUserById
  })
}

export default userRouter
