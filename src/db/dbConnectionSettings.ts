import sanitzedConfig from "../utils/config"
import { config } from "mssql"

export const config1: config = {
  user: sanitzedConfig.DATABASE_USER,
  password: sanitzedConfig.DATABASE_PASSWORD,
  database: sanitzedConfig.DATABASE_NAME,
  server: sanitzedConfig.DATABASE_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: sanitzedConfig.DATABASE_ENCRYPT, // for azure
    trustServerCertificate: sanitzedConfig.DATABASE_TRUST_CERTIFICATE // change to true for local dev / self-signed certs
  }
}
export const config2: config = {
  user: sanitzedConfig.DATABASE_USER,
  password: sanitzedConfig.DATABASE_PASSWORD,
  database: sanitzedConfig.DATABASE_NAME,
  server: sanitzedConfig.DATABASE_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: sanitzedConfig.DATABASE_ENCRYPT, // for azure
    trustServerCertificate: sanitzedConfig.DATABASE_TRUST_CERTIFICATE // change to true for local dev / self-signed certs
  }
}
