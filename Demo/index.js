import express from "express";
import router from "./src/router/router.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./src/config/swaggerConfig.js";
import config from "./src/config/config.js";

const app = express();

app.use(express.json());
app.use("/", router);
const port = config.appPort || 8080;

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`server started at : ${port}`);
});
