import { useFormik } from "formik";
import React, { ReactElement } from "react";
import LoginCardElement from "./LoginCard.element";
import * as yup from "yup";
import useAuth from "hooks/useAuth";
import type { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

export type FormikValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginCardModule = (): ReactElement => {
  const { t } = useTranslation();
  const { login } = useAuth();

  const onSubmit = async (): Promise<void> => {
    formik.setSubmitting(true);

    try {
      await login({ username: formik.values.email, password: formik.values.password });
    } catch (error) {
      formik.setFieldError(
        "email",
        (error as AxiosError)?.response?.status === 401
          ? t("erros.invalid-authentication")
          : t("erros.generic"),
      );
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik<FormikValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return <LoginCardElement formik={formik} t={t} />;
};

export default LoginCardModule;
