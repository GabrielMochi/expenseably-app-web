import {
  Box,
  FormControl,
  FormLabel,
  chakra,
  Flex,
  Divider,
  VStack,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import FormField from "components/FormField";
import Logo from "components/Logo";
import type { FormikProps } from "formik";
import type { FormikValues } from "./LoginCard.module";
import React, { ReactElement } from "react";
import type { TFunction } from "react-i18next";

type Props = {
  formik: FormikProps<FormikValues>;
  t: TFunction;
};

const LoginCardElement = ({ formik, t }: Props): ReactElement => (
  <Box borderRadius="10px" bgColor="white" py="48px" px="64px" boxShadow="base" w="480px">
    <Logo mx="auto" />
    <Flex my="32px" align="center">
      <Box flex="1">
        <Divider />
      </Box>
      <Box mx="16px" color="grey">
        {t("login-card.description")}
      </Box>
      <Box flex="1">
        <Divider />
      </Box>
    </Flex>
    <chakra.form onSubmit={formik.handleSubmit}>
      <VStack spacing="20px">
        <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
          <FormLabel htmlFor="email">{t("login-card.email-label")}</FormLabel>
          <FormField
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormErrorMessage fontSize="1.2rem">{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.password && !!formik.errors.password}>
          <FormLabel htmlFor="password">{t("login-card.password-label")}</FormLabel>
          <FormField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>
      </VStack>
      <Box mt="48px">
        <Button
          h="40px"
          disabled={!formik.isValid || formik.isSubmitting}
          isLoading={formik.isSubmitting}
          isFullWidth
          type="submit"
        >
          {t("login-card.submit-button-label")}
        </Button>
      </Box>
    </chakra.form>
  </Box>
);

export default LoginCardElement;
