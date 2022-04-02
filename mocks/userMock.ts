import { faker } from "@faker-js/faker";
import User from "interfaces/User";

const user: User = {
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: "michael_farady@test.com",
  createdAt: new Date(),
};

export default user;
