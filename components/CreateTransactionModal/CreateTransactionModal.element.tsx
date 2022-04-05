import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import CurrencySwitch from "components/CurrencySwitch";
import FormField from "components/FormField";
import Headline from "components/Headline";
import TransactionCategoryGroup from "components/TransactionCategoryGroup";
import TransactionTypeSwitch from "components/TransactionTypeSwitch";
import { FormikProps } from "formik";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";
import { FormFields } from "./CreateTransactionModal.module";

type Props = {
  t: TFunction;
  isOpen: boolean;
  onClose: () => void;
  formik: FormikProps<FormFields>;
};

const CreateTransactionModalElement = ({ t, isOpen, onClose, formik }: Props): ReactElement => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false}>
    <ModalOverlay bg="blackAlpha.200" backdropFilter="blur(1px)" />
    <ModalContent w="450px" maxW="none" p="12px">
      <ModalHeader pos="relative">
        <Headline as="h5">{t("create-transaction-modal.title")}</Headline>
      </ModalHeader>
      <form onSubmit={formik.handleSubmit}>
        <ModalBody>
          <VStack spacing="20px">
            <FormControl isInvalid={formik.touched.amount && !!formik.errors.amount}>
              <FormLabel htmlFor="amount">{t("create-transaction-modal.amount-label")}</FormLabel>
              <Flex align="center">
                <CurrencySwitch
                  activeCurrency={formik.values.currency}
                  onCurrency={(currency) => formik.setFieldValue("currency", currency)}
                />
                <FormField
                  id="amount"
                  name="amount"
                  ml="12px"
                  onClick={() => formik.setFieldTouched("amount")}
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                />
              </Flex>
              <FormErrorMessage fontSize="1.2rem">
                {formik.errors.amount && t(formik.errors.amount)}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>{t("create-transaction-modal.type-label")}</FormLabel>
              <TransactionTypeSwitch
                activeTransactionType={formik.values.type}
                onTransactionType={(transactionType) =>
                  formik.setFieldValue("type", transactionType)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("create-transaction-modal.category-label")}</FormLabel>
              <TransactionCategoryGroup
                activeTransactionCategory={formik.values.category}
                onTransactionCategory={(category) => formik.setFieldValue("category", category)}
              />
            </FormControl>
            <FormControl isInvalid={formik.touched.description && !!formik.errors.description}>
              <FormLabel htmlFor="description">
                {t("create-transaction-modal.description-label")}
              </FormLabel>
              <Textarea
                id="description"
                name="description"
                fontSize="1.6rem"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <FormErrorMessage fontSize="1.2rem">{formik.errors.description}</FormErrorMessage>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" h="40px" color="gray" onClick={onClose}>
            {t("create-transaction-modal.close-button-label")}
          </Button>
          <Button
            isDisabled={!formik.isValid}
            isLoading={formik.isSubmitting}
            variant="ghost"
            h="40px"
            ml="12px"
            type="submit"
          >
            {t("create-transaction-modal.create-button-label")}
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  </Modal>
);

export default CreateTransactionModalElement;
