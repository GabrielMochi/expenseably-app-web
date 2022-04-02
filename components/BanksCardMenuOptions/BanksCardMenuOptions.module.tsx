import React, { ReactElement } from "react";
import BanksCardMenuOptionsElement from "./BanksCardMenuOptions.element";
import { useTranslation } from "react-i18next";
import Bank from "interfaces/Bank";
import { useDisclosure } from "@chakra-ui/react";
import RenameBankModal from "components/RenameBankModal";

type Props = {
  bank: Bank;
};

const BanksCardMenuOptionsModule = ({ bank }: Props): ReactElement => {
  const { t } = useTranslation();

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClose: onDeleteModalClose,
  } = useDisclosure();

  return (
    <>
      <BanksCardMenuOptionsElement
        t={t}
        onRenameClick={onEditModalOpen}
        onDeleteClick={onDeleteModalOpen}
      />
      <RenameBankModal isOpen={isEditModalOpen} onClose={onEditModalClose} bank={bank} />
    </>
  );
};

export default BanksCardMenuOptionsModule;
