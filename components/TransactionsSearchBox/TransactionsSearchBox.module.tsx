import { useFormik } from "formik";
import React, { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TransactionsSearchBoxElement from "./TransactionsSearchBox.element";
import * as yup from "yup";
import useTransactions from "hooks/useTransactions";
import useDebounce from "hooks/useDebounce";
import { SelectTransactionCategoryOptions } from "components/TransactionCategorySelect/TransactionCategorySelect.module";
import { TransactionCategory } from "interfaces/Transaction";

export type FormFields = { search: string };

const validationSchema = yup.object().shape({
  search: yup.string(),
});

const TransactionsSearchBoxModule = (): ReactElement => {
  const { t } = useTranslation();
  const { load } = useTransactions();

  const [selectedTransactionCategory, setSelectedTransactionCategory] =
    useState<SelectTransactionCategoryOptions>("ALL");

  const onSubmit = async (): Promise<void> => {
    formik.setSubmitting(true);

    await load({
      category:
        selectedTransactionCategory === "ALL"
          ? undefined
          : TransactionCategory[selectedTransactionCategory],
      search: formik.values.search,
    });

    formik.setSubmitting(false);
  };

  const onTransactionCategoryChange = (category: SelectTransactionCategoryOptions): void => {
    setSelectedTransactionCategory(category);
  };

  const formik = useFormik<FormFields>({
    initialValues: { search: "" },
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useDebounce(formik.handleSubmit, [formik.values.search]);

  useEffect(() => {
    formik.handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTransactionCategory]);

  return (
    <TransactionsSearchBoxElement
      t={t}
      formik={formik}
      selectedTransactionCategory={selectedTransactionCategory}
      onTransactionCategoryChange={onTransactionCategoryChange}
    />
  );
};

export default TransactionsSearchBoxModule;
