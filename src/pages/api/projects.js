import { projects } from "@/data/projects";

export default async function handler(req, res) {
  res.status(200).json(projects);
}
