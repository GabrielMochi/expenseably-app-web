import Transaction from "interfaces/Transaction";
import { fetch } from "./fetch";

export const updateTransaction = async (transaction: Transaction): Promise<Transaction> => {
  const { data } = await fetch.put<{ transaction: Transaction }>(
    `/transactions/${transaction.id}`,
    transaction,
  );

  return data.transaction;
};
