import Transaction from "interfaces/Transaction";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import TransactionElement from "./Transaction.element";

type Props = { transaction: Transaction };

const TransactionModule = ({ transaction }: Props): ReactElement => {
  const { t } = useTranslation();
  return <TransactionElement t={t} transaction={transaction} />;
};

export default TransactionModule;
