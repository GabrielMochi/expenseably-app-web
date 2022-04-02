import React, { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DeleteBankModalElement from "./DeleteBankModal.element";
import useBanks from "hooks/useBanks";
import { useDisclosure } from "@chakra-ui/react";

const RenameBankModalModule = (): ReactElement => {
  const { t } = useTranslation();
  const { bankSelectedToBeDeleted: bank, setBankSelectedToBeDeleted, remove } = useBanks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDelete = async (): Promise<void> => {
    setIsLoading(true);

    if (!bank) throw new Error("bank value should not be null.");

    try {
      await remove(bank);
      onClose();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) setBankSelectedToBeDeleted(undefined);
  }, [isOpen, setBankSelectedToBeDeleted]);

  useEffect(() => {
    if (bank) return onOpen();
  }, [bank, onOpen]);

  return (
    <DeleteBankModalElement
      t={t}
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      onDelete={onDelete}
    />
  );
};

export default RenameBankModalModule;
