import useUser from "hooks/useUser";
import React, { ReactElement, useMemo } from "react";
import { useTranslation } from "react-i18next";
import BanksCardElement from "./BanksCard.element";
import useBanks from "hooks/useBanks";

const BanksCardModule = (): ReactElement => {
  const { t } = useTranslation();
  const { user } = useUser();
  const { banks, isLoading, onCreate } = useBanks();

  const showSkeleton = useMemo(() => isLoading || !user, [isLoading, user]);

  return <BanksCardElement t={t} onAddClick={onCreate} banks={banks} showSkeleton={showSkeleton} />;
};

export default BanksCardModule;
