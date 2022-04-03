import useBanks from "hooks/useBanks";
import Bank from "interfaces/Bank";
import { ReactElement } from "react";
import BankElement from "./Bank.element";

type Props = { bank: Bank };

const BankModule = ({ bank }: Props): ReactElement => {
  const { activeBank, setActiveBank } = useBanks();
  return <BankElement bank={bank} activeBank={activeBank} onBankButtonClick={setActiveBank} />;
};

export default BankModule;
