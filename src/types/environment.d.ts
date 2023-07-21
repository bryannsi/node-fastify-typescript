export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_HOST: string;
      SERVER_LOG_ENABLED: boolean;
      SERVER_PORT: number;
      ENV: 'dev' | 'prod';
    }
  }
}