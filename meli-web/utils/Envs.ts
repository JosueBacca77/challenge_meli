import { from } from "env-var";

const DECLARE_ENVS = from({
  ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  MELI_API_KEY: process.env.NEXT_PUBLIC_MELI_API_KEY,
  MELI_CORE_URL: process.env.NEXT_PUBLIC_MELI_CORE_URL,
});

export const ENVS = {
  ENVIRONMENT: DECLARE_ENVS.get().ENVIRONMENT,
  MELI_API_KEY: DECLARE_ENVS.get().MELI_API_KEY,
  MELI_CORE_URL: DECLARE_ENVS.get().MELI_CORE_URL,
};
