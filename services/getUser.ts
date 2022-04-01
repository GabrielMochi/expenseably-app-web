import User from "interfaces/User";
import { fetch } from "./fetch";

export const getUser = async (): Promise<User> => {
  const { data: user } = await fetch.get("user");
  return user;
};
