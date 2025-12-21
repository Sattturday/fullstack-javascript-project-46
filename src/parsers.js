import yaml from 'js-yaml'

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
}

export default (content, format) => {
  if (!parsers[format]) {
    throw new Error(`Unsupported file format: ${format}`)
  }

  return parsers[format](content)
}
