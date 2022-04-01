import Bank from "interfaces/Bank";
import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";
import userMock from "mocks/userMock";

export default Factory.extend<Bank>({
  id() {
    return faker.datatype.uuid();
  },
  name() {
    return faker.finance.accountName();
  },
  createdAt() {
    return faker.date.recent();
  },
  user() {
    return userMock;
  },
});
