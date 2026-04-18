import { handleCareer } from "../lib/api-handlers.js";

export default async function handler(req, res) {
  return handleCareer(req, res);
}
