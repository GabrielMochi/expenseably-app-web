import { useFormik } from "formik";
import React, { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CreateBankModalElement from "./CreateBankModal.element";
import * as yup from "yup";
import useBanks from "hooks/useBanks";
import { useDisclosure } from "@chakra-ui/react";

export type FormFields = {
  name: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
});

const CreateBankModalModule = (): ReactElement => {
  const { t } = useTranslation();
  const { add, setOnCreate } = useBanks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (): Promise<void> => {
    formik.setSubmitting(true);

    try {
      await add({ name: formik.values.name });
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
    validateOnMount: true,
  });

  useEffect(() => {
    setOnCreate(() => onOpen);
  }, [onOpen, setOnCreate]);

  return <CreateBankModalElement t={t} isOpen={isOpen} onClose={onClose} formik={formik} />;
};

export default CreateBankModalModule;
