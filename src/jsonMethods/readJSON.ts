import fs from "fs/promises"
import path from "path"
import { User } from "../types/types"

type ReadJSON = {
  users: User[]
}

const readJSON = async (): Promise<ReadJSON> => {
  const data = await fs.readFile(path.join(__dirname, "../db.json"), "utf-8")
  return JSON.parse(data)
}
export { readJSON }
