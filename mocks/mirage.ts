import { createServer, Model, Response } from "miragejs";
import md5 from "md5";
import Cookies from "js-cookie";
import userMock from "./userMock";
import bankFactory from "./factories/bankFactory";

const SESSION_COOKIE_NAME = "session";

const isUserAuthenticated = (): boolean => {
  return !!Cookies.get(SESSION_COOKIE_NAME);
};

const authenticateUser = (): void => {
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
    },

    factories: {
      bank: bankFactory,
    },

    seeds(server) {
      server.createList("bank", 3);
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
    },
  });

  return server;
};
