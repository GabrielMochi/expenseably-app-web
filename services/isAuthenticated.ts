import { fetch } from "./fetch";

export type IsAuthenticated = { authenticated: boolean };

export const isAuthenticated = async (): Promise<boolean> => {
  const { data } = await fetch.get<IsAuthenticated>("auth");
  return data.authenticated;
};
