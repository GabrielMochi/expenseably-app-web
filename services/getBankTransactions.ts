import Bank from "interfaces/Bank";
import Transaction, { LoadQueryParams } from "interfaces/Transaction";
import { fetch } from "./fetch";

export const getBankTransactions = async (
  { id }: Bank,
  params?: LoadQueryParams,
): Promise<Transaction[]> => {
  const { data } = await fetch.get<{ transactions: Transaction[] }>(`banks/${id}/transactions`, {
    params,
  });

  return data.transactions;
};
