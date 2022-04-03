import TransactionsContext, { TransactionsContextProps } from "contexts/TransactionsContext";
import useBanks from "hooks/useBanks";
import useUser from "hooks/useUser";
import Transaction, { CreateTransactionDto, LoadQueryParams } from "interfaces/Transaction";
// import Transaction, { CreateTransactionDto } from "interfaces/Transaction";
import React, { ReactElement, ReactNode, useCallback, useEffect, useState } from "react";
import { createTransaction } from "services/createTransaction";
import { deleteTransaction } from "services/deleteTransaction";
import { getBankTransactions } from "services/getBankTransactions";
// import { updateTransactions } from "services/updateTransactions";

type Props = { children?: ReactNode };

const TransactionsProvider = ({ children }: Props): ReactElement => {
  const { user } = useUser();
  const { activeBank } = useBanks();

  const [transactions, setTransactions] = useState<TransactionsContextProps["transactions"]>([]);
  const [isLoading, setIsLoading] = useState<TransactionsContextProps["isLoading"]>(true);

  const [transactionSelectedToBeUpdated, setTransactionSelectedToBeUpdated] =
    useState<TransactionsContextProps["transactionSelectedToBeUpdated"]>();

  const [transactionSelectedToBeDeleted, setTransactionSelectedToBeDeleted] =
    useState<TransactionsContextProps["transactionSelectedToBeDeleted"]>();

  const [onCreate, setOnCreate] = useState<TransactionsContextProps["onCreate"]>(() => () => {
    throw new Error("onCreate method should be implemented before accessing it.");
  });

  const load = useCallback(
    async (queryParams?: LoadQueryParams): Promise<void> => {
      setIsLoading(true);

      if (!user || !activeBank) return;

      try {
        const transactions = await getBankTransactions(activeBank, queryParams);
        setTransactions(transactions);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
    [user, activeBank],
  );

  const add = async (createTransactionDto: CreateTransactionDto): Promise<void> => {
    const transaction = await createTransaction(createTransactionDto);
    setTransactions((_transactions) => [transaction, ..._transactions]);
  };

  const update = async (): Promise<void> => {
    throw new Error("method not implemented yet.");
    // const updatedTransaction = await updateTransactions(transaction);
    // const transactionsCopy = [...transactions];

    // const index = transactionsCopy.findIndex(
    //   (_transaction) => _transaction.id === updatedTransaction.id,
    // );

    // transactionsCopy[index] = updatedTransaction;

    // setTransactions([...transactionsCopy]);
  };

  const remove = async (transaction: Transaction): Promise<void> => {
    await deleteTransaction(transaction);
    const transactionsCopy = [...transactions];
    const index = transactionsCopy.findIndex((_transaction) => _transaction.id === transaction.id);

    transactionsCopy.splice(index, 1);

    setTransactions([...transactionsCopy]);
  };

  const unload = (): void => {
    setTransactions([]);
    setIsLoading(true);
  };

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (isLoading || !user) unload();
  }, [isLoading, user]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        transactionSelectedToBeUpdated,
        transactionSelectedToBeDeleted,
        isLoading,
        setTransactionSelectedToBeUpdated,
        setTransactionSelectedToBeDeleted,
        onCreate,
        setOnCreate,
        load,
        add,
        update,
        remove,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
