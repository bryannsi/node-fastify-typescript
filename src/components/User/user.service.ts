import Connection from "../../db/dbConnectionManager"
import { config1 } from "../../db/dbConnectionSettings"

export const GetUsers = async (dni: string) => {
  try {
    const response = await fetch(
      `https://api.hacienda.go.cr/fe/ae?identificacion=${dni}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Ha ocurrido un error: ", error)
  }
}

export const GetData = async () => {
  try {
    const pool = await new Connection(config1).pool.connect()
    const result = pool.query(`SELECT * FROM TABLE`)
    console.dir(result)
  } catch (error) {
    console.log(error)
  }

  // pool.request().query("SELECT * FROM TABLE", (err, result) => {
  //   err ? console.error(err) : console.log(result)
  // })
}
