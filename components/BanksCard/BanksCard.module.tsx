import useUser from "hooks/useUser";
import React, { ReactElement, useMemo } from "react";
import { useTranslation } from "react-i18next";
import BanksCardElement from "./BanksCard.element";
import useBanks from "hooks/useBanks";
import BanksProvider from "providers/BanksProvider";

const BanksCardModule = (): ReactElement => {
  const { t } = useTranslation();
  const { user } = useUser();
  const { banks, isLoading, activeBank, setActiveBank } = useBanks();

  const showSkeleton = useMemo(() => isLoading || !user, [isLoading, user]);

  return (
    <BanksCardElement
      t={t}
      onAddClick={() => null}
      banks={banks}
      showSkeleton={showSkeleton}
      activeBank={activeBank}
      onBankButtonClick={setActiveBank}
    />
  );
};

export default function BanksCardFactory(): ReactElement {
  return (
    <BanksProvider>
      <BanksCardModule />
    </BanksProvider>
  );
}
