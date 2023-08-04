import sanitizedConfig from "../utils/config"
import { config } from "mssql"

export const config1: config = {
  user: sanitizedConfig.DATABASE_USER,
  password: sanitizedConfig.DATABASE_PASSWORD,
  database: sanitizedConfig.DATABASE_NAME,
  server: sanitizedConfig.DATABASE_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: sanitizedConfig.DATABASE_ENCRYPT, // for azure
    trustServerCertificate: sanitizedConfig.DATABASE_TRUST_CERTIFICATE // change to true for local dev / self-signed certs
  }
}
export const config2: config = {
  user: sanitizedConfig.DATABASE_USER,
  password: sanitizedConfig.DATABASE_PASSWORD,
  database: sanitizedConfig.DATABASE_NAME,
  server: sanitizedConfig.DATABASE_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: sanitizedConfig.DATABASE_ENCRYPT, // for azure
    trustServerCertificate: sanitizedConfig.DATABASE_TRUST_CERTIFICATE // change to true for local dev / self-signed certs
  }
}
