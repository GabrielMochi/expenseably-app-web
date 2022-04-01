import { fetch } from "./fetch";
import Bank from "interfaces/Bank";

export const getBanks = async (): Promise<Bank[]> => {
  const { data: banks } = await fetch.get<Bank[]>("banks");
  return banks;
};
