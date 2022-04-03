import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import FormField from "components/FormField";
import Headline from "components/Headline";
import { FormikProps } from "formik";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";
import { FormFields } from "./CreateBankModal.module";

type Props = {
  t: TFunction;
  isOpen: boolean;
  onClose: () => void;
  formik: FormikProps<FormFields>;
};

const CreateBankModalElement = ({ t, isOpen, onClose, formik }: Props): ReactElement => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false}>
    <ModalOverlay bg="blackAlpha.200" backdropFilter="blur(1px) hue-rotate(90deg)" />
    <ModalContent minW="350px" w="auto" maxW="none" p="12px">
      <ModalHeader pos="relative">
        <Headline as="h5">{t("create-bank-modal.title")}</Headline>
      </ModalHeader>
      <form onSubmit={formik.handleSubmit}>
        <ModalBody>
          <FormControl isInvalid={formik.touched.name && !!formik.errors.name}>
            <FormLabel htmlFor="name">{t("create-bank-modal.name-label")}</FormLabel>
            <FormField
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <FormErrorMessage fontSize="1.2rem">{formik.errors.name}</FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" h="40px" color="gray" onClick={onClose}>
            {t("create-bank-modal.close-button-label")}
          </Button>
          <Button
            isDisabled={!formik.isValid}
            isLoading={formik.isSubmitting}
            variant="ghost"
            h="40px"
            ml="12px"
            type="submit"
          >
            {t("create-bank-modal.create-button-label")}
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  </Modal>
);

export default CreateBankModalElement;
