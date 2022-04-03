import React, { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DeleteTransactionModalElement from "./DeleteTransactionModal.element";
import { useDisclosure } from "@chakra-ui/react";
import useTransactions from "hooks/useTransactions";

const DeleteTransactionModalModule = (): ReactElement => {
  const { t } = useTranslation();

  const {
    transactionSelectedToBeDeleted: transaction,
    setTransactionSelectedToBeDeleted,
    remove,
  } = useTransactions();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDelete = async (): Promise<void> => {
    setIsLoading(true);

    if (!transaction) throw new Error("bank value should not be null.");

    try {
      await remove(transaction);
      onClose();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) setTransactionSelectedToBeDeleted(undefined);
  }, [isOpen, setTransactionSelectedToBeDeleted]);

  useEffect(() => {
    if (transaction) return onOpen();
  }, [transaction, onOpen]);

  return (
    <DeleteTransactionModalElement
      t={t}
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      onDelete={onDelete}
    />
  );
};

export default DeleteTransactionModalModule;
