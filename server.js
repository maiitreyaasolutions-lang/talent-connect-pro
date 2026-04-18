import express from "express";
import { handleCareer, handleContact, handleHealth } from "./lib/api-handlers.js";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json());

app.all("/api/health", handleHealth);
app.all("/api/contact", handleContact);
app.all("/api/careers", handleCareer);

app.listen(port, () => {
  console.log(`Mail server listening on http://localhost:${port}`);
});
