import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { expect, test, beforeAll } from '@jest/globals'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = name => path.join(__dirname, '..', '__fixtures__', name)
const readFixtureFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

let expected

beforeAll(() => {
  expected = readFixtureFile('expected.txt')
})

test('gendiff flat json', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(genDiff(file1, file2)).toBe(expected)
})

test('gendiff flat yml', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')

  expect(genDiff(file1, file2)).toBe(expected)
})

// Тест для несуществующих файлов (обработка ошибок)
test('should throw error for non-existent file', () => {
  const file1 = getFixturePath('nonexistent.json')
  const file2 = getFixturePath('file2.json')

  expect(() => genDiff(file1, file2)).toThrow()
})
