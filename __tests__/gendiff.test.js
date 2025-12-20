import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { expect, test } from '@jest/globals'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = name => path.join(__dirname, '..', '__fixtures__', name)
const readFixtureFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

test('gendiff flat json', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = readFixtureFile('expected.txt').trim()

  expect(genDiff(file1, file2)).toBe(expected.trim())
})
