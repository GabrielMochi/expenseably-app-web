import TransactionsContext, { TransactionsContextProps } from "contexts/TransactionsContext";
import { useContext } from "react";

const useTransactions = (): TransactionsContextProps => {
  const transactionsContext = useContext(TransactionsContext);
  return transactionsContext;
};

export default useTransactions;
