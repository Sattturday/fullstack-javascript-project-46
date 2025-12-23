const formatValue = value => {
  if (value === null) return 'null'
  if (typeof value === 'object') return '[complex value]'
  if (typeof value === 'string') return `'${value}'`
  return String(value)
}

const plain = (diff, parentPath = '') => {
  const lines = diff.flatMap(node => {
    const currentPath = parentPath ? `${parentPath}.${node.key}` : node.key

    switch (node.type) {
      case 'added':
        return `Property '${currentPath}' was added with value: ${formatValue(
          node.value
        )}`

      case 'removed':
        return `Property '${currentPath}' was removed`

      case 'changed':
        return `Property '${currentPath}' was updated. From ${formatValue(
          node.value1
        )} to ${formatValue(node.value2)}`

      case 'nested':
        return plain(node.children, currentPath)

      case 'unchanged':
        return []

      default:
        throw new Error(`Unknown type: ${node.type}`)
    }
  })

  return lines.join('\n')
}

export default plain
