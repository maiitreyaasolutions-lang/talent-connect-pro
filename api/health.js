import { handleHealth } from "../lib/api-handlers.js";

export default async function handler(req, res) {
  return handleHealth(req, res);
}
