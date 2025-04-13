"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENVS = void 0;
const env_var_1 = require("env-var");
const DECLARE_ENVS = (0, env_var_1.from)({
    ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
    MELI_API_KEY: process.env.NEXT_PUBLIC_MELI_API_KEY,
    MELI_CORE_URL: process.env.NEXT_PUBLIC_MELI_CORE_URL,
});
exports.ENVS = {
    ENVIRONMENT: DECLARE_ENVS.get().ENVIRONMENT,
    MELI_API_KEY: DECLARE_ENVS.get().MELI_API_KEY,
    MELI_CORE_URL: DECLARE_ENVS.get().MELI_CORE_URL,
};
//# sourceMappingURL=Envs.js.map