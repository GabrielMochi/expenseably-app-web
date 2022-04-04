import React, { ReactElement } from "react";
import TransactionsCardMenuOptionsElement from "./TransactionsCardMenuOptions.element";
import { useTranslation } from "react-i18next";
import Transaction from "interfaces/Transaction";
import useTransactions from "hooks/useTransactions";

type Props = { transaction: Transaction };

const TransactionsCardMenuOptionsModule = ({ transaction }: Props): ReactElement => {
  const { t } = useTranslation();

  const { setTransactionSelectedToBeUpdated, setTransactionSelectedToBeDeleted } =
    useTransactions();

  const onUpdateClick = (): void => {
    setTransactionSelectedToBeUpdated(transaction);
  };

  const onDeleteClick = (): void => {
    setTransactionSelectedToBeDeleted(transaction);
  };

  return (
    <TransactionsCardMenuOptionsElement
      t={t}
      onUpdateClick={onUpdateClick}
      onDeleteClick={onDeleteClick}
    />
  );
};

export default TransactionsCardMenuOptionsModule;
