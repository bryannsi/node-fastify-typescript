import { FastifyReply, FastifyRequest } from "fastify"
import { IUser } from "./user.interface"
import { GetData, GetUsers } from "./user.service"
import {} from "./user.type"

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

export const GetAllData = async (_req: FastifyRequest, res: FastifyReply) => {
	try {
		const userData = await GetData()
		res.send(userData)
	} catch (error) {
		console.error(error)
	}
}
