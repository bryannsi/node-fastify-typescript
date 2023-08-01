import sql from "mssql"

class Connection {
  private config: sql.config
  public pool: sql.ConnectionPool
  constructor(config: sql.config) {
    this.config = config,
    this.pool = new sql.ConnectionPool(this.config)
  }
}

export default Connection
