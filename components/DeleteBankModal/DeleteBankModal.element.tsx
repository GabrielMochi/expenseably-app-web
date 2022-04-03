import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Headline from "components/Headline";
import Text from "components/Text";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";

type Props = {
  t: TFunction;
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteBankModalElement = ({
  t,
  isOpen,
  isLoading,
  onClose,
  onDelete,
}: Props): ReactElement => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false}>
    <ModalOverlay bg="blackAlpha.200" backdropFilter="blur(1px) hue-rotate(90deg)" />
    <ModalContent w="350px" maxW="none" p="12px">
      <ModalHeader pos="relative">
        <Headline as="h5">{t("delete-bank-modal.title")}</Headline>
      </ModalHeader>
      <ModalBody>
        <Text>{t("delete-bank-modal.description")}</Text>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" h="40px" color="gray" onClick={onClose}>
          {t("delete-bank-modal.close-button-label")}
        </Button>
        <Button
          variant="ghost"
          color="error"
          isLoading={isLoading}
          h="40px"
          ml="12px"
          onClick={onDelete}
        >
          {t("delete-bank-modal.delete-button-label")}
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default DeleteBankModalElement;
