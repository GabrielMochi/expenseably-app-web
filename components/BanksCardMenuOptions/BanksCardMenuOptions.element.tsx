import { Divider, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Text from "components/Text";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

type Props = {
  t: TFunction;
  onRenameClick: () => void;
  onDeleteClick: () => void;
};

const BanksCardMenuOptionsElement = ({ t, onRenameClick, onDeleteClick }: Props): ReactElement => (
  <Menu>
    <MenuButton
      as={IconButton}
      variant="ghost"
      aria-label="bank menu options"
      icon={<Icon as={BiDotsHorizontalRounded} w={8} h={8} />}
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
    <MenuList>
      <MenuItem
        p="12px"
        icon={<Icon as={RiPencilFill} verticalAlign="middle" />}
        onClick={(event) => {
          event.stopPropagation();
          onRenameClick();
        }}
      >
        {t("banks-card.rename-menu-option")}
      </MenuItem>
      <Divider />
      <MenuItem
        p="12px"
        color="error"
        icon={<Icon as={FaTrash} verticalAlign="middle" />}
        onClick={(event) => {
          event.stopPropagation();
          onDeleteClick();
        }}
      >
        <Text>{t("banks-card.delete-menu-option")}</Text>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default BanksCardMenuOptionsElement;
