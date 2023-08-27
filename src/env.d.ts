/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly PUBLIC_WEBSITE: string;
  readonly PUBLIC_MAPBOX_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
