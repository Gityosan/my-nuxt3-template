import { typeSafetyImageUrl } from '@/utils/image'

describe('typeSafetyImageUrl function', () => {
  // Test for null input
  it('should return an empty string if input is null', async () => {
    const result = await typeSafetyImageUrl(null)
    expect(result).toBe('')
  })

  // Test for undefined input
  it('should return an empty string if input is undefined', async () => {
    const result = await typeSafetyImageUrl(undefined)
    expect(result).toBe('')
  })

  // Test for NaN input
  it('should return an empty string if input is NaN', async () => {
    const result = await typeSafetyImageUrl(NaN as any)
    expect(result).toBe('')
  })

  // Test for empty string input
  it('should return an empty string if input is an empty string', async () => {
    const result = await typeSafetyImageUrl('')
    expect(result).toBe('')
  })

  // Test for object input
  it('should return an empty string if input is an object', async () => {
    const result = await typeSafetyImageUrl({} as any)
    expect(result).toBe('')
  })

  // Test for array input
  it('should return an empty string if input is an array', async () => {
    const result = await typeSafetyImageUrl([] as any)
    expect(result).toBe('')
  })

  // Test for number input
  it('should return an empty string if input is an number', async () => {
    const result = await typeSafetyImageUrl(1 as any)
    expect(result).toBe('')
  })

  // Test for valid string input
  it('should return the input string if input is a valid string', async () => {
    const testUrl = 'http://example.com/image.png'
    const result = await typeSafetyImageUrl(testUrl)
    expect(result).toBe(testUrl)
  })

  // Test for invalid string input
  it('should return the input string if input is a invalid string', async () => {
    const result = await typeSafetyImageUrl('valibot')
    expect(result).toBe('')
  })

  // Test for File input
  it('should return a blob URL if input is a File object', async () => {
    // Mocking a File object
    const blob = new Blob([''], { type: 'image/png' })
    const file = new File([blob], 'test.png', { type: 'image/png' })

    // Mocking URL.createObjectURL
    const expectedUrl = 'blob:http://example.com/d41d8cd98f00b204e9800998ecf8427e'
    const mockCreateObjectURL = vi.fn().mockReturnValue(expectedUrl)
    global.URL.createObjectURL = mockCreateObjectURL

    const result = await typeSafetyImageUrl(file)
    expect(result).toBe(expectedUrl)
    expect(mockCreateObjectURL).toHaveBeenCalledWith(file)

    // Restore the original function
    mockCreateObjectURL.mockRestore()
  })
})
