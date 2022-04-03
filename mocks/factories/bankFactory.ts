import Bank from "interfaces/Bank";
import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";
import userMock from "mocks/userMock";

export const createMockBank = (name: string): Bank => ({
  id: faker.datatype.uuid(),
  name,
  createdAt: faker.date.recent(),
  user: userMock,
});

export default Factory.extend<Bank>({
  id() {
    return faker.datatype.uuid();
  },
  name() {
    return faker.company.companyName();
  },
  createdAt() {
    return faker.date.recent();
  },
  user() {
    return userMock;
  },
});
