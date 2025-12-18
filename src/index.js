import parseFile from './parse.js'
import buildDiff from './diff.js'

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)

  const diffLines = buildDiff(data1, data2)

  return [
    '{',
    ...diffLines,
    '}',
  ].join('\n')
}

export default genDiff
