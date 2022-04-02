import BanksContext from "contexts/BanksContext";
import useUser from "hooks/useUser";
import Bank from "interfaces/Bank";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { getBanks } from "services/getBanks";
import BanksCardElement from "./BanksCard.element";
import { updateBank as updateBankService } from "services/updateBank";

const BanksCardModule = (): ReactElement => {
  const { t } = useTranslation();
  const { user } = useUser();

  const [banks, setBanks] = useState<Bank[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeBank, setActiveBank] = useState<Bank>({} as Bank);

  const showSkeleton = useMemo(() => isLoading || !user, [isLoading, user]);

  const loadBanks = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const banks = await getBanks();

      if (banks.length > 0) setActiveBank(banks[0]);

      setBanks(banks);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addBank = async (bank: Bank): Promise<void> => {
    throw new Error("method not implemented");
  };

  const updateBank = async (bank: Bank): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updatedBank = await updateBankService(bank);

    setBanks([]);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const removeBank = async (bank: Bank): Promise<void> => {
    throw new Error("method not implemented");
  };

  const unloadBanks = (): void => {
    setBanks([]);
    setIsLoading(true);
    setActiveBank({} as Bank);
  };

  useEffect(() => {
    if (user) {
      loadBanks();
      return;
    }

    unloadBanks();
  }, [user]);

  return (
    <BanksContext.Provider
      value={{
        banks,
        activeBank,
        isLoading,
        load: loadBanks,
        add: addBank,
        update: updateBank,
        remove: removeBank,
      }}
    >
      <BanksCardElement
        t={t}
        onAddClick={() => null}
        banks={banks}
        showSkeleton={showSkeleton}
        activeBank={activeBank}
        onBankButtonClick={setActiveBank}
      />
    </BanksContext.Provider>
  );
};

export default BanksCardModule;
