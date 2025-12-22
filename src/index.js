import parseFile from './parseFile.js'
import buildDiff from './buildDiff.js'
import getFormatter from './formatters/index.js'

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const data1 = parseFile(filePath1)
  const data2 = parseFile(filePath2)

  const diffTree = buildDiff(data1, data2)
  const format = getFormatter(formatName)

  return format(diffTree)
}

export default genDiff
