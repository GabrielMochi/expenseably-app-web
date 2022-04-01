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

type Props = {
  formik: FormikProps<FormikValues>;
};

const LoginCardElement = ({ formik }: Props): ReactElement => (
  <Box
    borderRadius="10px"
    bgColor="white"
    py="48px"
    px="64px"
    boxShadow="0 1px 3px rgba(0,108,122,0.12), 0 1px 2px rgba(0,108,122,0.24)"
    w="480px"
  >
    <Logo mx="auto" />
    <Flex my="32px" align="center">
      <Box flex="1">
        <Divider />
      </Box>
      <Box mx="16px" color="grey">
        Login
      </Box>
      <Box flex="1">
        <Divider />
      </Box>
    </Flex>
    <chakra.form onSubmit={formik.handleSubmit}>
      <VStack spacing="20px">
        <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
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
          <FormLabel htmlFor="password">Password</FormLabel>
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
          disabled={!formik.isValid || formik.isSubmitting}
          isLoading={formik.isSubmitting}
          fontSize="1.6rem"
          height="40px"
          isFullWidth
          bgColor="primary"
          color="white"
          type="submit"
        >
          Login
        </Button>
      </Box>
    </chakra.form>
  </Box>
);

export default LoginCardElement;
