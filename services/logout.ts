import { fetch } from "./fetch";

export const logout = async (): Promise<void> => {
  await fetch.delete("auth");
};
