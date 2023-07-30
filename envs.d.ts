declare namespace NodeJS {
  export interface ProcessEnv {
    readonly PUBLIC_KEY: string;
    readonly PRIVATE_KEY: string;
  }
}
