import { FastifyReply, FastifyRequest } from "fastify"
import { GetUsers } from "./user.service"
import {} from "./user.type"
import { IUser } from "./user.interface"

export const GetUserById = async (req: FastifyRequest, res: FastifyReply) => {
  const { dni } = req.params as IUser
  if (dni.length > 0) {
    await GetUsers(dni)
      .then((userData) => {
        res.send(userData)
      })
      .catch((error) => console.error(error))
  }
}
