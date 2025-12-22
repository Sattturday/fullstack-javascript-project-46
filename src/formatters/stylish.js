const INDENT_SIZE = 4
const SIGN_OFFSET = 2

const getIndent = depth => ' '.repeat(depth * INDENT_SIZE - SIGN_OFFSET)

const stringify = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value)
  }

  const currentIndent = ' '.repeat(depth * INDENT_SIZE)
  const closingIndent = ' '.repeat((depth - 1) * INDENT_SIZE)

  const lines = Object.entries(value).map(
    ([key, val]) => `${currentIndent}${key}: ${stringify(val, depth + 1)}`,
  )

  return ['{', ...lines, `${closingIndent}}`].join('\n')
}

const stylish = (diffTree) => {
  const iter = (nodes, depth) => {
    const indent = getIndent(depth)
    const closingIndent = ' '.repeat(depth * INDENT_SIZE)

    return nodes
      .map((node) => {
        switch (node.type) {
          case 'added':
            return `${indent}+ ${node.key}: ${stringify(node.value, depth + 1)}`

          case 'removed':
            return `${indent}- ${node.key}: ${stringify(node.value, depth + 1)}`

          case 'unchanged':
            return `${indent}  ${node.key}: ${stringify(node.value, depth + 1)}`

          case 'changed':
            return [
              `${indent}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
              `${indent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`,
            ].join('\n')

          case 'nested':
            return `${indent}  ${node.key}: {\n${iter(
              node.children,
              depth + 1,
            )}\n${closingIndent}}`

          default:
            throw new Error(`Unknown node type: ${node.type}`)
        }
      })
      .join('\n')
  }

  return `{\n${iter(diffTree, 1)}\n}`
}

export default stylish
