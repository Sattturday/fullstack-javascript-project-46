import parseFile from './parse.js'

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)

  // временно просто проверяем, что данные прочитались
  console.log('data1: ', data1)
  console.log('data2: ', data2)

  return { data1, data2 }
}

export default genDiff
