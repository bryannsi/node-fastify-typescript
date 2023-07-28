import { ENV } from "./ENV"

export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ENV {}
  }
}
