import faker from "@faker-js/faker";
import Transaction, {
  Currency,
  TransactionCategory,
  TransactionType,
} from "interfaces/Transaction";
import Bank from "interfaces/Bank";
import { Factory } from "miragejs";

export default Factory.extend<Transaction>({
  id() {
    return faker.datatype.uuid();
  },
  amount() {
    return faker.finance.amount();
  },
  type() {
    return faker.random.arrayElement<TransactionType>(Object.values(TransactionType));
  },
  category() {
    return faker.random.arrayElement<TransactionCategory>(Object.values(TransactionCategory));
  },
  currency() {
    return faker.random.arrayElement<Currency>(Object.values(Currency));
  },
  description() {
    return faker.lorem.sentence();
  },
  createdAt() {
    return faker.date.recent();
  },
  bank() {
    return {} as Bank; // this field will be populated by seeds
  },
});
