import Bank from "./Bank";

export enum TransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export enum TransactionCategory {
  SALARY = "SALARY",
  FOOD = "FOOD",
  TRANSPORT = "TRANSPORT",
  HOUSE = "HOUSE",
  OTHER = "OTHER",
}

export enum Currency {
  USD = "USD",
  EUR = "EUR",
}

export type CreateTransactionDto = Pick<
  Transaction,
  "amount" | "type" | "category" | "currency" | "description" | "bank"
>;

export type LoadQueryParams = {
  category?: TransactionCategory;
  search?: string;
};

export default interface Transaction {
  id: string;
  amount: string;
  type: TransactionType;
  category: TransactionCategory;
  currency: Currency;
  description?: string;
  createdAt: Date;
  bank: Bank;
}
