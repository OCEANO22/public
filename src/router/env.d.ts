/// <reference types="vite/client" />
interface ImportMetaEnv {
  BASE_URL: string
  // add other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}