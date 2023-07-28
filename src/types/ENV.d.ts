// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all
export interface ENV {
  DATABASE_ENCRYPT: boolean
  DATABASE_NAME: string
  DATABASE_PASSWORD: string
  DATABASE_SERVER: string
  DATABASE_TRUST_CERTIFICATE: boolean
  DATABASE_USER: string
  SERVER_HOST: string
  SERVER_LOG_ENABLED: boolean
  SERVER_PORT: number
}
