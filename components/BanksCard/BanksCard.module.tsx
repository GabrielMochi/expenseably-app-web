/* eslint-disable @typescript-eslint/no-unused-vars */
import BanksContext from "contexts/BanksContext";
import useUser from "hooks/useUser";
import Bank from "interfaces/Bank";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { getBanks } from "services/getBanks";
import BanksCardElement from "./BanksCard.element";
import { updateBank as updateBankService } from "services/updateBank";
import { useDisclosure } from "@chakra-ui/react";
import { deleteBank } from "services/deleteBank";

const BanksCardModule = (): ReactElement => {
  const { t } = useTranslation();
  const { user } = useUser();

  const {
    isOpen: isRenameModalOpen,
    onOpen: onRenameModalOpen,
    onClose: onRenameModalClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();

  const [banks, setBanks] = useState<Bank[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeBank, setActiveBank] = useState<Bank>();
  const [bankSelectedToBeRenamed, setBankSelectedToBeRenamed] = useState<Bank>();
  const [bankSelectedToBeDeleted, setBankSelectedToBeDeleted] = useState<Bank>();

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

  const addBank = async (bank: Bank): Promise<void> => {
    throw new Error("method not implemented");
  };

  const updateBank = async (bank: Bank): Promise<void> => {
    const updatedBank = await updateBankService(bank);
    const banksCopy = [...banks];
    const index = banksCopy.findIndex((_bank) => _bank.id === updatedBank.id);

    banksCopy[index] = updatedBank;

    setBanks([...banksCopy]);
  };

  const removeBank = async (bank: Bank): Promise<void> => {
    await deleteBank(bank);
    const banksCopy = [...banks];
    const index = banksCopy.findIndex((_bank) => _bank.id === bank.id);

    banksCopy.splice(index, 1);

    setBanks([...banksCopy]);
  };

  const unloadBanks = (): void => {
    setBanks([]);
    setIsLoading(true);
    setActiveBank({} as Bank);
  };

  const onRenameClick = (bank: Bank): void => {
    setBankSelectedToBeRenamed(bank);
    onRenameModalOpen();
  };

  const onDeleteClick = (bank: Bank): void => {
    setBankSelectedToBeDeleted(bank);
    onDeleteModalOpen();
  };

  useEffect(() => {
    if (user) loadBanks();
  }, [user]);

  useEffect(() => {
    if (isLoading || !user) unloadBanks();
  }, [isLoading, user]);

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
        onRenameClick={onRenameClick}
        onDeleteClick={onDeleteClick}
        isRenameModalOpen={isRenameModalOpen}
        isDeleteModalOpen={isDeleteModalOpen}
        onRenameModalClose={onRenameModalClose}
        onDeleteModalClose={onDeleteModalClose}
        bankSelectedToBeRenamed={bankSelectedToBeRenamed}
        bankSelectedToBeDeleted={bankSelectedToBeDeleted}
      />
    </BanksContext.Provider>
  );
};

export default BanksCardModule;
