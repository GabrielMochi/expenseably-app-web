import Bank from "interfaces/Bank";
import { fetch } from "./fetch";

type CreateBankDto = Pick<Bank, "name">;

export const createBank = async (createBankDto: CreateBankDto): Promise<Bank> => {
  const { data } = await fetch.post<{ bank: Bank }>("banks", createBankDto);
  return data.bank;
};
