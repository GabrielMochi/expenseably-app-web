import { useFormik } from "formik";
import React, { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import UpdateTransactionModal from "./UpdateTransactionModal.element";
import * as yup from "yup";
import { useDisclosure } from "@chakra-ui/react";
import useTransactions from "hooks/useTransactions";
import { Currency, TransactionCategory, TransactionType } from "interfaces/Transaction";

export type FormFields = {
  amount: string;
  type: TransactionType;
  category: TransactionCategory;
  currency: Currency;
  description?: string;
};

const validationSchema = yup.object().shape({
  amount: yup.string().matches(/^\d+(?:\.\d{2})$/, "update-transaction-modal.amount-error-message"),
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

const UpdateTransactionModalModule = (): ReactElement => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    transactionSelectedToBeUpdated: transaction,
    setTransactionSelectedToBeUpdated,
    update,
  } = useTransactions();

  const onSubmit = async (): Promise<void> => {
    formik.setSubmitting(true);

    if (!transaction) throw new Error("bank value should not be null.");

    try {
      await update({ ...transaction, ...formik.values });
      onClose();
    } catch (error) {
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik<FormFields>({
    initialValues: {
      amount: transaction?.amount || "",
      type: transaction?.type || TransactionType.EXPENSE,
      category: transaction?.category || TransactionCategory.FOOD,
      currency: transaction?.currency || Currency.USD,
      description: transaction?.description || "",
    },
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    if (!isOpen) {
      setTransactionSelectedToBeUpdated(undefined);
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, setTransactionSelectedToBeUpdated]);

  useEffect(() => {
    formik.setValues({
      amount: transaction?.amount || "",
      type: transaction?.type || TransactionType.EXPENSE,
      category: transaction?.category || TransactionCategory.FOOD,
      currency: transaction?.currency || Currency.USD,
      description: transaction?.description || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transaction]);

  useEffect(() => {
    if (transaction) return onOpen();
  }, [transaction, onOpen]);

  return <UpdateTransactionModal t={t} isOpen={isOpen} onClose={onClose} formik={formik} />;
};

export default UpdateTransactionModalModule;
