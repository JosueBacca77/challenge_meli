import type { NextConfig } from "next";

const ENVIRONMENT_DEVELOPMENT = {
  NEXT_PUBLIC_ENVIRONMENT: "development",
  NEXT_PUBLIC_MELI_API_KEY: "1234",
  NEXT_PUBLIC_MELI_CORE_URL: "http://localhost:3000",
};

const ENVIRONMENT_TEST = {};

const ENVIRONMENT_PRODUCTION = {};

const getEnvironment = (environment: string) => {
  switch (environment) {
    case "development":
      return ENVIRONMENT_DEVELOPMENT;
    case "test":
      return ENVIRONMENT_TEST;
    case "production":
      return ENVIRONMENT_PRODUCTION;
    default:
      return ENVIRONMENT_DEVELOPMENT;
  }
};

const nextConfig: NextConfig = {
  reactStrictMode: false,
  env: getEnvironment(process.env.ENVIRONMENT as string),
};

export default nextConfig;
