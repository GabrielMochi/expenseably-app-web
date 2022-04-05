import { useFormik } from "formik";
import React, { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CreateTransactionModalElement from "./CreateTransactionModal.element";
import * as yup from "yup";
import { useDisclosure } from "@chakra-ui/react";
import useTransactions from "hooks/useTransactions";
import { Currency, TransactionCategory, TransactionType } from "interfaces/Transaction";
import useBanks from "hooks/useBanks";

export type FormFields = {
  amount: string;
  type: TransactionType;
  category: TransactionCategory;
  currency: Currency;
  description?: string;
};

const validationSchema = yup.object().shape({
  amount: yup
    .string()
    .matches(/^\d+(?:\.\d{2})$/, "create-transaction-modal.amount-error-message")
    .required(),
  type: yup
    .string()
    .equals(Object.values(TransactionType))
    .default(TransactionType.EXPENSE)
    .required(),
  category: yup
    .string()
    .equals(Object.values(TransactionCategory))
    .default(TransactionCategory.FOOD)
    .required(),
  currency: yup.string().equals(Object.values(Currency)).default(Currency.USD).required(),
  description: yup.string().optional(),
});

const initialValues: FormFields = {
  amount: "",
  type: TransactionType.EXPENSE,
  category: TransactionCategory.FOOD,
  currency: Currency.USD,
  description: "",
};

const CreateBankModalModule = (): ReactElement => {
  const { t } = useTranslation();
  const { add, setOnCreate } = useTransactions();
  const { activeBank } = useBanks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (): Promise<void> => {
    formik.setSubmitting(true);

    if (!activeBank) return;

    try {
      await add({ bank: activeBank, ...formik.values });
      onClose();
    } catch (error) {
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik<FormFields>({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    setOnCreate(() => onOpen);
  }, [onOpen, setOnCreate]);

  useEffect(() => {
    if (!isOpen) formik.resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return <CreateTransactionModalElement t={t} isOpen={isOpen} onClose={onClose} formik={formik} />;
};

export default CreateBankModalModule;
