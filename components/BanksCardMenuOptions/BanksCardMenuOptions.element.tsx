import { Divider, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Text from "components/Text";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

type Props = {
  t: TFunction;
};

const BanksCardMenuOptionsElement = ({ t }: Props): ReactElement => (
  <Menu>
    <MenuButton
      as={IconButton}
      variant="ghost"
      aria-label="bank menu options"
      icon={<Icon as={BiDotsHorizontalRounded} w={8} h={8} />}
    />
    <MenuList>
      <MenuItem p="12px" icon={<Icon as={RiPencilFill} verticalAlign="middle" />}>
        {t("banks-card.rename-menu-option")}
      </MenuItem>
      <Divider />
      <MenuItem p="12px" color="error" icon={<Icon as={FaTrash} verticalAlign="middle" />}>
        <Text>{t("banks-card.delete-menu-option")}</Text>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default BanksCardMenuOptionsElement;
