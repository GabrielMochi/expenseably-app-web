import Bank from "interfaces/Bank";
import { fetch } from "./fetch";

export const deleteBank = async ({ id }: Bank): Promise<void> => {
  await fetch.delete(`banks/${id}`);
};
