import sql from "mssql"
import config from "../config"

class Connection {
  public config: sql.config
  public mssql: sql.ConnectionPool
  constructor() {
    ;(this.config = {
      user: config.DATABASE_USER,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE_NAME,
      server: config.DATABASE_SERVER,
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        encrypt: config.DATABASE_ENCRYPT, // for azure
        trustServerCertificate: config.DATABASE_TRUST_CERTIFICATE // change to true for local dev / self-signed certs
      }
    }),
      (this.mssql = new sql.ConnectionPool(this.config))
  }
}

export default Connection
