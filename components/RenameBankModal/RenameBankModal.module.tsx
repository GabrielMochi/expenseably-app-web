import { useFormik } from "formik";
import Bank from "interfaces/Bank";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import RenameBankModalElement from "./RenameBankModal.element";
import * as yup from "yup";
import useBanks from "hooks/useBanks";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  bank: Bank;
};

export type FormFields = {
  name: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
});

const RenameBankModalModule = ({ isOpen, onClose, bank }: Props): ReactElement => {
  const { t } = useTranslation();
  const { update } = useBanks();

  const onSubmit = async (): Promise<void> => {
    formik.setSubmitting(true);

    try {
      await update({ ...bank, name: formik.values.name });
      onClose();
    } catch (error) {
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik<FormFields>({
    initialValues: {
      name: bank?.name ?? "",
    },
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return <RenameBankModalElement t={t} isOpen={isOpen} onClose={onClose} formik={formik} />;
};

export default RenameBankModalModule;
