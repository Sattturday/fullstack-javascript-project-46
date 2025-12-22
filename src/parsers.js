import yaml from 'js-yaml'

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
}

const parsers_ = (content, format) => {
  if (!parsers[format]) {
    throw new Error(`Unsupported file format: ${format}`)
  }

  return parsers[format](content)
}
export default parsers_
