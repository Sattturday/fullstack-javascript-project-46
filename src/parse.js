import fs from 'fs'
import path from 'path'

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const content = fs.readFileSync(absolutePath, 'utf-8')

  const extname = path.extname(filepath)

  if (extname === '.json') {
    return JSON.parse(content)
  }

  throw new Error(`Unsupported file format: ${extname}`)
}

export default parseFile
