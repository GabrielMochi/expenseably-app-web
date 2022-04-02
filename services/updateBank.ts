import Bank from "interfaces/Bank";
import { fetch } from "./fetch";

export const updateBank = async (bank: Bank): Promise<Bank> => {
  const { data } = await fetch.put<{ bank: Bank }>(`/banks/${bank.id}`, bank);
  return data.bank;
};
