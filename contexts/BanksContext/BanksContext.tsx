import Bank from "interfaces/Bank";
import { createContext } from "react";

export type BanksContextProps = {
  banks: Bank[];
  activeBank: Bank | undefined;
  isLoading: boolean;
  load: (bank: Bank) => Promise<void> | void;
  add: (bank: Bank) => Promise<void> | void;
  update: (bank: Bank) => Promise<void> | void;
  remove: (bank: Bank) => Promise<void> | void;
};

export default createContext<BanksContextProps>({
  get banks(): never {
    throw new Error("provide banks property in BanksContext");
  },
  get activeBank(): never {
    throw new Error("provide activeBank property in BanksContext");
  },
  get isLoading(): never {
    throw new Error("provide isLoading property in BanksContext");
  },
  load(): never {
    throw new Error("provide add property in BanksContext");
  },
  add(): never {
    throw new Error("provide add property in BanksContext");
  },
  update(): never {
    throw new Error("provide update property in BanksContext");
  },
  remove(): never {
    throw new Error("provide remove property in BanksContext");
  },
});
