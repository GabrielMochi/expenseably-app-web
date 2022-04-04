import {
  Flex,
  Icon,
  chakra,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import FormField from "components/FormField";
import TransactionCategorySelect from "components/TransactionCategorySelect";
import { SelectTransactionCategoryOptions } from "components/TransactionCategorySelect/TransactionCategorySelect.module";
import { FormikProps } from "formik";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";
import { MdSearch } from "react-icons/md";
import { FormFields } from "./TransactionsSearchBox.module";

type Props = {
  t: TFunction;
  formik: FormikProps<FormFields>;
  selectedTransactionCategory: SelectTransactionCategoryOptions;
  onTransactionCategoryChange: (
    selectedTransactionCategory: SelectTransactionCategoryOptions,
  ) => void;
};

const TransactionsSearchBoxElement = ({
  t,
  formik,
  selectedTransactionCategory,
  onTransactionCategoryChange,
}: Props): ReactElement => (
  <Flex align="center" w="100%">
    <TransactionCategorySelect
      selectedTransactionCategory={selectedTransactionCategory}
      onTransactionCategoryChange={onTransactionCategoryChange}
    />
    <chakra.form flex="1" ml="12px" onSubmit={formik.handleSubmit}>
      <FormControl>
        <InputGroup>
          <FormField
            id="search"
            name="search"
            placeholder={t("transaction-search-box.search-placeholder")}
            value={formik.values.search}
            onChange={formik.handleChange}
          />
          <InputRightElement height="40px" pr="12px">
            <IconButton
              disabled={!formik.values.search}
              isLoading={formik.isSubmitting}
              type="submit"
              aria-label={t("transaction-search-box.search-label")}
            >
              <Icon as={MdSearch} />
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </chakra.form>
  </Flex>
);

export default TransactionsSearchBoxElement;
