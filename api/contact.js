import { handleContact } from "../lib/api-handlers.js";

export default async function handler(req, res) {
  return handleContact(req, res);
}
