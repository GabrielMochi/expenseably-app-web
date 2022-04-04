import type { Currency, TransactionCategory, TransactionType } from "interfaces/Transaction";
import type { TFunction } from "react-i18next";

const emojis: { [key in TransactionCategory]: string } = {
  SALARY: "💰",
  FOOD: "🍕",
  TRANSPORT: "🚗",
  HOUSE: "🏠",
  OTHER: "🔘",
};

const currencies: { [key in Currency]: string } = {
  USD: "$",
  EUR: "€",
};

export const transactionCategoryToLabel = (
  t: TFunction,
  transactionCategory: TransactionCategory,
): string => {
  const labels: { [key in TransactionCategory]: string } = {
    SALARY: t("transaction-category.salary"),
    FOOD: t("transaction-category.food"),
    TRANSPORT: t("transaction-category.transport"),
    HOUSE: t("transaction-category.house"),
    OTHER: t("transaction-category.other"),
  };

  return labels[transactionCategory];
};

export const transactionCategoryToEmoji = (transactionCategory: TransactionCategory): string => {
  return emojis[transactionCategory];
};

export const transactionTypeToLabel = (t: TFunction, transactionType: TransactionType): string => {
  const labels: { [key in TransactionType]: string } = {
    INCOME: t("transaction-type.income"),
    EXPENSE: t("transaction-type.expense"),
  };

  return labels[transactionType];
};

export const currencyToLabel = (currency: Currency): string => {
  return currencies[currency];
};
