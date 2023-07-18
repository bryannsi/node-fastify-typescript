export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT: number;
      SERVER_HOST: string;
      SERVER_LOG_ENABLED: boolean;
      ENV: 'dev' | 'prod';
    }
  }
}