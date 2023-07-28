import Connection from "../../db/dbConnection"

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

export function GetData() {
  const cnn = new Connection()
  cnn.mssql.connect()
}
