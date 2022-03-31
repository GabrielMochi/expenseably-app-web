import { createServer, Response } from "miragejs";
import md5 from "md5";
import Cookies from "js-cookie";

export const makeServer = ({ environment = "test" } = {}) => {
  const server = createServer({
    environment,

    models: {},

    routes() {
      this.namespace = "api/v1";

      this.get("/health", () => {
        return { status: "ok" };
      });

      this.post("/users/auth", (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);

        if (
          username === "gmochi56@icloud.com" &&
          md5(password) === "54ca4c4c1a1a31db487ec6e7e1fc3b61" // HelloWorld@123
        ) {
          Cookies.set("session", new Date().getTime().toString(), {
            domain: "localhost",
            path: "/",
            expires: new Date().getTime() + 2 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: false,
          });

          return new Response(200, undefined);
        }

        return new Response(401, undefined, {});
      });
    },
  });

  return server;
};
