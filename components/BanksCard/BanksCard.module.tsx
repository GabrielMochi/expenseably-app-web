import useUser from "hooks/useUser";
import Bank from "interfaces/Bank";
import React, { ReactElement, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import BanksCardElement from "./BanksCard.element";
import { useDisclosure } from "@chakra-ui/react";
import useBanks from "hooks/useBanks";
import BanksProvider from "providers/BanksProvider";

const BanksCardModule = (): ReactElement => {
  const { t } = useTranslation();
  const { user } = useUser();
  const { banks, isLoading, activeBank, setActiveBank } = useBanks();

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

  const [bankSelectedToBeRenamed, setBankSelectedToBeRenamed] = useState<Bank>();
  const [bankSelectedToBeDeleted, setBankSelectedToBeDeleted] = useState<Bank>();

  const showSkeleton = useMemo(() => isLoading || !user, [isLoading, user]);

  const onRenameClick = (bank: Bank): void => {
    setBankSelectedToBeRenamed(bank);
    onRenameModalOpen();
  };

  const onDeleteClick = (bank: Bank): void => {
    setBankSelectedToBeDeleted(bank);
    onDeleteModalOpen();
  };

  return (
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
  );
};

export default function BanksCardFactory(): ReactElement {
  return (
    <BanksProvider>
      <BanksCardModule />
    </BanksProvider>
  );
}
