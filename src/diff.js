const formatLine = (sign, key, value) => `  ${sign} ${key}: ${value}`

const buildDiff = (data1, data2) => {
  const keys = Object.keys({ ...data1, ...data2 }).sort()

  return keys.flatMap((key) => {
    const hasInFirst = Object.hasOwn(data1, key)
    const hasInSecond = Object.hasOwn(data2, key)

    if (!hasInFirst) {
      return formatLine('+', key, data2[key])
    }

    if (!hasInSecond) {
      return formatLine('-', key, data1[key])
    }

    if (data1[key] === data2[key]) {
      return formatLine(' ', key, data1[key])
    }

    return [
      formatLine('-', key, data1[key]),
      formatLine('+', key, data2[key]),
    ]
  })
}

export default buildDiff
