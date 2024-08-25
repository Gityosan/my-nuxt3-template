import type * as Remeda from 'remeda'
import { isFile, isEmptyObject } from '@/utils/type-guard'

vi.mock('remeda', async () => {
  const actual = await vi.importActual<typeof Remeda>('remeda')
  return {
    ...actual,
    default: {
      ...actual,
      isPlainObject: vi.fn((str: string) => actual.isPlainObject(str)),
      isEmpty: vi.fn((str: string) => actual.isEmpty(str))
    }
  }
})

describe('Utility Functions', () => {
  describe('isFile', () => {
    it('should return true for File objects', () => {
      // 注意: File オブジェクトのテストはブラウザ環境でのみ意味を持ちます
      const file = new File(['content'], 'test.txt', { type: 'text/plain' })
      expect(isFile(file)).toBe(true)
    })

    it('should return false for non-File objects', () => {
      expect(isFile({})).toBe(false)
      expect(isFile(new Date())).toBe(false)
    })
  })

  describe('isEmptyObject', () => {
    it('should return true for empty objects', () => {
      expect(isEmptyObject({})).toBe(true)
    })

    it('should return false for non-empty objects', () => {
      expect(isEmptyObject({ key: 'value' })).toBe(false)
    })

    it('should return false for non-objects', () => {
      expect(isEmptyObject([])).toBe(false)
      expect(isEmptyObject(null)).toBe(false)
    })
  })
})
