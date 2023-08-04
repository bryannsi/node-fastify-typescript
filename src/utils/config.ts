import path from "path"
import dotenv from "dotenv"
import { DecryptString128Bit } from "./cryptography"
import { ENV } from "../types/ENV.js"

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "./.env") })

// Loading process.env as ENV interface
const getConfig = (): ENV => {
  return {
    DATABASE_ENCRYPT: Boolean(process.env.DATABASE_ENCRYPT),
    DATABASE_NAME: DecryptString128Bit(process.env.DATABASE_NAME!),
    DATABASE_PASSWORD: DecryptString128Bit(process.env.DATABASE_PASSWORD!),
    DATABASE_SERVER: DecryptString128Bit(process.env.DATABASE_SERVER!),
    DATABASE_TRUST_CERTIFICATE: Boolean(process.env.DATABASE_TRUST_CERTIFICATE),
    DATABASE_USER: DecryptString128Bit(process.env.DATABASE_USER!),
    SERVER_HOST: process.env.SERVER_HOST!,
    SERVER_LOG_ENABLED: Boolean(process.env.SERVER_LOG_ENABLED),
    SERVER_PORT: Number(process.env.SERVER_PORT)
  }
}

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitizedConfig = (config: ENV): ENV => {
  for (const [key, value] of Object.entries(config)) {
    if (!value) {
      throw new Error(`Missing key ${key} in config.env`)
    }
  }
  return config
}

export default getSanitizedConfig(getConfig())
