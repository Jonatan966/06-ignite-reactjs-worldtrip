declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production',
      PRISMIC_API_ENDPOINT: string,
      PRISMIC_ACCESS_TOKEN: string,
    }
  }
}

export {}
