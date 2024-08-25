import type * as Remeda from 'remeda'
import {
  toSnakeCase,
  toPascalCase,
  convertKeyToSnakeCase,
  convertKeyToCamelCase,
  convertKeyToPascalCase
} from '@/utils/string-case'

vi.mock('remeda', async () => {
  const actual = await vi.importActual<typeof Remeda>('remeda')
  return {
    ...actual,
    default: {
      ...actual,
      toCamelCase: vi.fn((str: string) => actual.toCamelCase(str)),
      capitalize: vi.fn((str: string) => actual.capitalize(str))
    }
  }
})

describe('String and Object Key Conversion Functions', () => {
  describe('String conversion functions', () => {
    it('converts to snake_case correctly', () => {
      expect(toSnakeCase('testString')).toBe('test_string')
      expect(toSnakeCase('TestString')).toBe('test_string')
      expect(toSnakeCase('test-string')).toBe('test_string')
    })

    it('converts to UpperCamelCase correctly', () => {
      expect(toPascalCase('TestString')).toBe('TestString')
      expect(toPascalCase('testString')).toBe('TestString')
      expect(toPascalCase('test_string')).toBe('TestString')
      expect(toPascalCase('test-string')).toBe('TestString')
    })

    it('converts distorted word to snake_case correctly', () => {
      expect(toSnakeCase('test_String')).toBe('test_string')
      expect(toSnakeCase('Test_String')).toBe('test_string')
      expect(toSnakeCase('test-String')).toBe('test_string')
      expect(toSnakeCase('Test-String')).toBe('test_string')
      expect(toSnakeCase('distorted_test-string')).toBe('distorted_test_string')
      expect(toSnakeCase('Distorted-Test_String')).toBe('distorted_test_string')
      expect(toSnakeCase('2DistortedTest_String')).toBe('2distorted_test_string')
      expect(toSnakeCase('Distorted2Test_String')).toBe('distorted2test_string')
    })

    it('converts distorted word to UpperCamelCase correctly', () => {
      expect(toPascalCase('test_String')).toBe('TestString')
      expect(toPascalCase('Test_String')).toBe('TestString')
      expect(toPascalCase('test-String')).toBe('TestString')
      expect(toPascalCase('Test-String')).toBe('TestString')
      expect(toPascalCase('distorted_test-string')).toBe('DistortedTestString')
      expect(toPascalCase('Distorted-Test_String')).toBe('DistortedTestString')
      expect(toPascalCase('2distortedTest_String')).toBe('2DistortedTestString')
    })
  })

  describe('Object key conversion functions', () => {
    const testObj = {
      'testKey': 'value',
      'another-key': { 'nestedKey': 'nestedValue', 'nested-key-two': 'value2' },
      'array-test': [{ arrayKey: 'arrayValue' }]
    }

    it('converts object keys to snake_case correctly', () => {
      const snakeCaseObj = convertKeyToSnakeCase(testObj)
      expect(snakeCaseObj).toEqual({
        test_key: 'value',
        another_key: { nested_key: 'nestedValue', nested_key_two: 'value2' },
        array_test: [{ array_key: 'arrayValue' }]
      })
      expect(convertKeyToSnakeCase(null)).toEqual({})
      expect(convertKeyToSnakeCase(undefined)).toEqual({})
    })

    it('converts object keys to lowerCamelCase correctly', () => {
      const lowerCamelCaseObj = convertKeyToCamelCase(testObj)
      expect(lowerCamelCaseObj).toEqual({
        testKey: 'value',
        anotherKey: { nestedKey: 'nestedValue', nestedKeyTwo: 'value2' },
        arrayTest: [{ arrayKey: 'arrayValue' }]
      })
      expect(convertKeyToCamelCase(null)).toEqual({})
      expect(convertKeyToCamelCase(undefined)).toEqual({})
    })

    it('converts object keys to UpperCamelCase correctly', () => {
      const upperCamelCaseObj = convertKeyToPascalCase(testObj)
      expect(upperCamelCaseObj).toEqual({
        TestKey: 'value',
        AnotherKey: { NestedKey: 'nestedValue', NestedKeyTwo: 'value2' },
        ArrayTest: [{ ArrayKey: 'arrayValue' }]
      })
      expect(convertKeyToPascalCase(null)).toEqual({})
      expect(convertKeyToPascalCase(undefined)).toEqual({})
    })
  })
})
