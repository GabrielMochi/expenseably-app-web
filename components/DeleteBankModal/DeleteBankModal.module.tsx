import Bank from "interfaces/Bank";
import React, { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import DeleteBankModalElement from "./DeleteBankModal.element";
import useBanks from "hooks/useBanks";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  bank: Bank;
};

const RenameBankModalModule = ({ isOpen, onClose, bank }: Props): ReactElement => {
  const { t } = useTranslation();
  const { remove } = useBanks();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDelete = async (): Promise<void> => {
    setIsLoading(true);

    try {
      await remove(bank);
      onClose();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

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
