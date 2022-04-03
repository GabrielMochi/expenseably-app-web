import { belongsTo, createServer, Model, Response } from "miragejs";
import md5 from "md5";
import Cookies from "js-cookie";
import userMock from "./userMock";
import bankFactory, { createMockBank } from "./factories/bankFactory";
import transactionFactory, { createMockTransaction } from "./factories/transactionFactory";

const SESSION_COOKIE_NAME = "session";

const isUserAuthenticated = () => {
  return !!Cookies.get(SESSION_COOKIE_NAME);
};

const authenticateUser = () => {
  Cookies.set(SESSION_COOKIE_NAME, new Date().getTime().toString(), {
    domain: "localhost",
    path: "/",
    expires: new Date().getTime() + 2 * 60 * 60 * 1000,
    sameSite: "strict",
    secure: false,
  });
};

export const makeServer = ({ environment = "test" } = {}) => {
  const server = createServer({
    environment,

    models: {
      bank: Model,
      transaction: Model.extend({
        bank: belongsTo("bank"),
      }),
    },

    factories: {
      bank: bankFactory,
      transaction: transactionFactory,
    },

    seeds(server) {
      server.createList("bank", 3).forEach((bank) => {
        server.createList("transaction", 20, { bank });
      });
    },

    routes() {
      this.namespace = "api/v1";

      this.get("/health", () => {
        return { status: "ok" };
      });

      this.get("/user", () => {
        if (!isUserAuthenticated()) return new Response(401);
        return userMock;
      });

      this.get("/auth", () => {
        return { authenticated: isUserAuthenticated() };
      });

      this.post("/auth", (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);

        if (
          username === "gmochi56@icloud.com" &&
          md5(password) === "54ca4c4c1a1a31db487ec6e7e1fc3b61" // HelloWorld@123
        ) {
          authenticateUser();
          return new Response(200);
        }

        return new Response(401, undefined, {});
      });

      this.delete("/auth", () => {
        if (!isUserAuthenticated()) return new Response(401);

        Cookies.remove(SESSION_COOKIE_NAME);

        return new Response(200);
      });

      this.get("/banks");

      this.post("/banks", (schema, request) => {
        const { name } = JSON.parse(request.requestBody);
        const bank = createMockBank(name);
        return schema.banks.create(bank);
      });

      this.put("/banks/:id", (schema, request) => {
        const id = request.params.id;
        const bank = JSON.parse(request.requestBody);
        return schema.banks.find(id).update(bank);
      });

      this.delete("/banks/:id");

      this.get("/banks/:id/transactions", (schema, request) => {
        const id = request.params.id;
        return schema.transactions.all().filter(({ bank }) => bank.id === id);
      });

      this.post("/transactions", (schema, request) => {
        const createTransactionDto = JSON.parse(request.requestBody);
        const bank = schema.banks.find(createTransactionDto.bank.id);
        const transaction = createMockTransaction({ ...createTransactionDto, bank });
        return schema.transactions.create(transaction);
      });
    },
  });

  return server;
};
