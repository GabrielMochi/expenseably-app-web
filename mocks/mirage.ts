import { createServer } from "miragejs";

export const makeServer = ({ environment = "test" } = {}) => {
  const server = createServer({
    environment,

    models: {},

    routes() {
      this.namespace = "api";

      this.get("/health", () => {
        return { status: "ok" };
      });
    },
  });

  return server;
};
