import Bank from "interfaces/Bank";
import Transaction from "interfaces/Transaction";
import { fetch } from "./fetch";

export const getBankTransactions = async ({ id }: Bank): Promise<Transaction[]> => {
  const { data } = await fetch.get<{ transactions: Transaction[] }>(`banks/${id}/transactions`);
  return data.transactions;
};
