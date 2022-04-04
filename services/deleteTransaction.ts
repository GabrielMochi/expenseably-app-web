import Transaction from "interfaces/Transaction";
import { fetch } from "./fetch";

export const deleteTransaction = async ({ id }: Transaction): Promise<void> => {
  await fetch.delete(`transactions/${id}`);
};
