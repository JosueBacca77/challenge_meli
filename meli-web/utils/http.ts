import { HttpError } from "./types";

export function isHttpError(error: any): error is HttpError {
  return (
    error &&
    typeof error.statusCode === "number" &&
    typeof error.message === "string"
  );
}
