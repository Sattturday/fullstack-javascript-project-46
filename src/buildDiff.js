const isObject = value =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const buildDiff = (data1, data2) => {
  const keys = Object.keys({ ...data1, ...data2 }).sort((a, b) =>
    a.localeCompare(b),
  )

  return keys.map((key) => {
    const hasInFirst = Object.hasOwn(data1, key)
    const hasInSecond = Object.hasOwn(data2, key)

    if (!hasInFirst) {
      return {
        key,
        type: 'added',
        value: data2[key],
      }
    }

    if (!hasInSecond) {
      return {
        key,
        type: 'removed',
        value: data1[key],
      }
    }

    if (isObject(data1[key]) && isObject(data2[key])) {
      return {
        key,
        type: 'nested',
        children: buildDiff(data1[key], data2[key]),
      }
    }

    if (data1[key] === data2[key]) {
      return {
        key,
        type: 'unchanged',
        value: data1[key],
      }
    }

    return {
      key,
      type: 'changed',
      value1: data1[key],
      value2: data2[key],
    }
  })
}

export default buildDiff
