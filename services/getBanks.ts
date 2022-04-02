import { fetch } from "./fetch";
import Bank from "interfaces/Bank";

export const getBanks = async (): Promise<Bank[]> => {
  const { data } = await fetch.get<{ banks: Bank[] }>("banks");
  return data.banks;
};
