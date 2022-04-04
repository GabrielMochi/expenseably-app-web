import useUser from "hooks/useUser";
import React, { ReactElement, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ExtensionsCardElement from "./TransactionsCard.element";
import useTransactions from "hooks/useTransactions";

const TransactionsCardModule = (): ReactElement => {
  const { t } = useTranslation();
  const { user } = useUser();
  const { transactions, isLoading, onCreate } = useTransactions();

  const showSkeleton = useMemo(() => isLoading || !user, [isLoading, user]);

  return (
    <ExtensionsCardElement
      t={t}
      onAddClick={onCreate}
      transactions={transactions}
      showSkeleton={showSkeleton}
    />
  );
};

export default TransactionsCardModule;
