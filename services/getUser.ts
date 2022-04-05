import User from "interfaces/User";
import { fetch } from "./fetch";

export const getUser = async (): Promise<User> => {
  const { data } = await fetch.get<{ user: User }>("user");
  return data.user;
};
