import Transaction, { CreateTransactionDto } from "interfaces/Transaction";
import { fetch } from "./fetch";

export const createTransaction = async (
  createTransactionDto: CreateTransactionDto,
): Promise<Transaction> => {
  const { data } = await fetch.post<{ transaction: Transaction }>(
    "transactions",
    createTransactionDto,
  );

  return data.transaction;
};
