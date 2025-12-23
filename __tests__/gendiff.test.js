import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import { expect, test, beforeAll } from '@jest/globals'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = name => path.join(__dirname, '..', '__fixtures__', name)
const readFixtureFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

let expected

beforeAll(() => {
  plainExpected = readFixtureFile('plainExpected.txt')
  stylishExpected = readFixtureFile('stylishExpected.txt')
})

test('gendiff default stylish format nested json', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(genDiff(file1, file2)).toBe(stylishExpected)
})

test('gendiff stylish nested json', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(genDiff(file1, file2, 'stylish')).toBe(stylishExpected)
})

test('gendiff stylish nested yml', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')

  expect(genDiff(file1, file2, 'stylish')).toBe(stylishExpected)
})

test('gendiff plain nested json', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(genDiff(file1, file2, 'plain')).toBe(plainExpected)
})

test('gendiff plain nested yml', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')

  expect(genDiff(file1, file2, 'plain')).toBe(plainExpected)
})

test('should throw error for non-existent file', () => {
  const file1 = getFixturePath('nonexistent.json')
  const file2 = getFixturePath('file2.json')

  expect(() => genDiff(file1, file2)).toThrow()
})

test('should throw error for unsupported file format', () => {
  const file1 = getFixturePath('unsupported.txt')
  const file2 = getFixturePath('file2.json')

  expect(() => genDiff(file1, file2)).toThrow()
})

test('should throw error for unknown formatter', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(() => genDiff(file1, file2, 'unknown')).toThrow('Unknown format')
})
