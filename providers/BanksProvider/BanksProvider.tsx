import BanksContext from "contexts/BanksContext";
import useUser from "hooks/useUser";
import Bank from "interfaces/Bank";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { deleteBank } from "services/deleteBank";
import { getBanks } from "services/getBanks";
import { updateBank } from "services/updateBank";

type Props = { children?: ReactNode };

const BanksProvider = ({ children }: Props): ReactElement => {
  const { user } = useUser();

  const [banks, setBanks] = useState<Bank[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeBank, setActiveBank] = useState<Bank>();

  const load = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const banks = await getBanks();

      if (banks.length > 0) setActiveBank(banks[0]);

      setBanks(banks);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const add = async (bank: Bank): Promise<void> => {
    throw new Error("method not implemented: " + bank);
  };

  const update = async (bank: Bank): Promise<void> => {
    const updatedBank = await updateBank(bank);
    const banksCopy = [...banks];
    const index = banksCopy.findIndex((_bank) => _bank.id === updatedBank.id);

    banksCopy[index] = updatedBank;

    setBanks([...banksCopy]);
  };

  const remove = async (bank: Bank): Promise<void> => {
    await deleteBank(bank);
    const banksCopy = [...banks];
    const index = banksCopy.findIndex((_bank) => _bank.id === bank.id);

    banksCopy.splice(index, 1);

    setBanks([...banksCopy]);
  };

  const unload = (): void => {
    setBanks([]);
    setIsLoading(true);
    setActiveBank({} as Bank);
  };

  useEffect(() => {
    if (user) load();
  }, [user]);

  useEffect(() => {
    if (isLoading || !user) unload();
  }, [isLoading, user]);

  return (
    <BanksContext.Provider
      value={{ banks, activeBank, isLoading, setActiveBank, load, add, update, remove }}
    >
      {children}
    </BanksContext.Provider>
  );
};

export default BanksProvider;
