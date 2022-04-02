import BanksContext, { BanksContextProps } from "contexts/BanksContext";
import { useContext } from "react";

const useBanks = (): BanksContextProps => {
  const banks = useContext(BanksContext);
  return banks;
};

export default useBanks;
