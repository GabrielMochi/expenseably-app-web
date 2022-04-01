import Authentication from "interfaces/Authentication";
import { fetch } from "./fetch";

export const login = async (authentication: Authentication): Promise<void> => {
  await fetch.post("auth", authentication);
};
