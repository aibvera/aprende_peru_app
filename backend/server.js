import express from "express";
import bodyParser from "body-parser";
import { buildCorsConfig } from "./config/cors.js";
import api from "./routes.js";

const app = express();
app.use(bodyParser.json());
app.use(buildCorsConfig());
app.use("/api", api);

export default app;
