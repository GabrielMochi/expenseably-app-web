import { createServer, Response } from "miragejs";
import md5 from "md5";
import Cookies from "js-cookie";
import * as uuid from "uuid";

const SESSION_COOKIE_NAME = "session";

export const makeServer = ({ environment = "test" } = {}) => {
  const userId = uuid.v4();

  const isUserAuthenticated = (): boolean => {
    return !!Cookies.get(SESSION_COOKIE_NAME);
  };

  const server = createServer({
    environment,

    routes() {
      this.namespace = "api/v1";

      this.get("/health", () => {
        return { status: "ok" };
      });

      this.get("/user", () => {
        if (!isUserAuthenticated()) return new Response(401);

        return {
          id: userId,
          name: "Gabriel Mochi",
          email: "gmochi56@icloud.com",
          createdAt: new Date(),
        };
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
          Cookies.set(SESSION_COOKIE_NAME, new Date().getTime().toString(), {
            domain: "localhost",
            path: "/",
            expires: new Date().getTime() + 2 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: false,
          });

          return new Response(200);
        }

        return new Response(401, undefined, {});
      });

      this.delete("/auth", () => {
        if (!isUserAuthenticated()) return new Response(401);

        Cookies.remove(SESSION_COOKIE_NAME);

        return new Response(200);
      });
    },
  });

  return server;
};
