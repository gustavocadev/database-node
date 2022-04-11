import fs from "fs/promises"
import { User } from "../types/types"
import path from "path"

const writeJSON = async (newArray: User[]) => {
  const newData = {
    users: newArray,
  }
  await fs.writeFile(
    path.join(__dirname, "../db.json"),
    JSON.stringify(newData, null, 2)
  )
}

export { writeJSON }
