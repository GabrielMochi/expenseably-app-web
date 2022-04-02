import Transaction, { CreateTransactionDto } from "interfaces/Transaction";
import { createContext } from "react";

export type TransactionsContextProps = {
  transactions: Transaction[];
  transactionSelectedToBeUpdated: Transaction | undefined;
  transactionSelectedToBeDeleted: Transaction | undefined;
  isLoading: boolean;
  setTransactionSelectedToBeUpdated: (transaction: Transaction | undefined) => void;
  setTransactionSelectedToBeDeleted: (transaction: Transaction | undefined) => void;
  onCreate: () => void;
  setOnCreate: (onCreate: () => void) => void;
  load: () => Promise<void> | void;
  add: (transaction: CreateTransactionDto) => Promise<void> | void;
  update: (transaction: Transaction) => Promise<void> | void;
  remove: (transaction: Transaction) => Promise<void> | void;
};

export default createContext<TransactionsContextProps>({
  get transactions(): never {
    throw new Error("provide transactions property in TransactionsContext");
  },
  get transactionSelectedToBeUpdated(): never {
    throw new Error("provide transactionSelectedToBeUpdated property in TransactionsContext");
  },
  get transactionSelectedToBeDeleted(): never {
    throw new Error("provide transactionSelectedToBeDeleted property in TransactionsContext");
  },
  get isLoading(): never {
    throw new Error("provide isLoading property in TransactionsContext");
  },
  setTransactionSelectedToBeUpdated(): never {
    throw new Error("provide setTransactionSelectedToBeUpdated property in TransactionsContext");
  },
  setTransactionSelectedToBeDeleted(): never {
    throw new Error("provide setTransactionSelectedToBeDeleted property in TransactionsContext");
  },
  onCreate(): never {
    throw new Error("provide onCreate property in TransactionsContext");
  },
  setOnCreate(): never {
    throw new Error("provide setOnCreate property in TransactionsContext");
  },
  load(): never {
    throw new Error("provide load property in TransactionsContext");
  },
  add(): never {
    throw new Error("provide add property in TransactionsContext");
  },
  update(): never {
    throw new Error("provide update property in TransactionsContext");
  },
  remove(): never {
    throw new Error("provide remove property in TransactionsContext");
  },
});
