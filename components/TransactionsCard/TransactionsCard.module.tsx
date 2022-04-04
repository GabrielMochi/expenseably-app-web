import useUser from "hooks/useUser";
import React, { ReactElement, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ExtensionsCardElement from "./TransactionsCard.element";
import useTransactions from "hooks/useTransactions";
import useBanks from "hooks/useBanks";

const TransactionsCardModule = (): ReactElement => {
  const { t } = useTranslation();
  const { user } = useUser();
  const { transactions, isLoading, onCreate } = useTransactions();
  const { activeBank } = useBanks();

  const showSkeleton = useMemo(() => isLoading || !user, [isLoading, user]);

  return (
    <ExtensionsCardElement
      t={t}
      onAddClick={onCreate}
      hasActiveBank={!!activeBank}
      transactions={transactions}
      showSkeleton={showSkeleton}
    />
  );
};

export default TransactionsCardModule;
