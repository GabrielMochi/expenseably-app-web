import { useFormik } from "formik";
import React, { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import RenameBankModalElement from "./RenameBankModal.element";
import * as yup from "yup";
import useBanks from "hooks/useBanks";
import { useDisclosure } from "@chakra-ui/react";

export type FormFields = {
  name: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
});

const RenameBankModalModule = (): ReactElement => {
  const { t } = useTranslation();
  const { bankSelectedToBeRenamed: bank, setBankSelectedToBeRenamed, update } = useBanks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (): Promise<void> => {
    formik.setSubmitting(true);

    if (!bank) throw new Error("bank value should not be null.");

    try {
      await update({ ...bank, name: formik.values.name });
      onClose();
    } catch (error) {
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik<FormFields>({
    initialValues: { name: "" },
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    if (!formik.touched.name && !formik.values.name && bank)
      formik.setFieldValue("name", bank.name);
  }, [bank, formik]);

  useEffect(() => {
    if (!isOpen) setBankSelectedToBeRenamed(undefined);
  }, [isOpen, setBankSelectedToBeRenamed]);

  useEffect(() => {
    if (bank) return onOpen();
  }, [bank, onOpen]);

  return <RenameBankModalElement t={t} isOpen={isOpen} onClose={onClose} formik={formik} />;
};

export default RenameBankModalModule;
