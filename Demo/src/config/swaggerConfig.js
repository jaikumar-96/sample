import swaggerJsdoc from "swagger-jsdoc";
import config from "./config.js";

const port = config.appPort;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Employee Project",
      version: "2.0.0",
      description: "Employee Project with Live Data",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./src/router/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default swaggerDocs;
