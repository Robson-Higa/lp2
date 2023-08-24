import { PositiveArray } from './PositiveArray'

describe('PositiveArray', () => {
  let positiveArray: PositiveArray

  beforeEach(() => {
    positiveArray = new PositiveArray()
  })

  describe('add', () => {
    it('should add positive elements', () => {
      positiveArray.add(5)
      positiveArray.add(10)
      expect(positiveArray.values).toEqual([5, 10])
    })

    it('should not add negative elements', () => {
      positiveArray.add(-3);
      expect(positiveArray.values).toEqual([])
    })
  })

  describe('remove', () => {
    it('should remove element by valid index', () => {
      positiveArray.add(5)
      positiveArray.add(10)

      const removed = positiveArray.remove(0)
      expect(removed).toBe(5)
      expect(positiveArray.values).toEqual([10])
    })

    it('should return undefined when removing with invalid index', () => {
      positiveArray.add(5)
      const removed = positiveArray.remove(1)
      expect(removed).toBeUndefined()
      expect(positiveArray.values).toEqual([5])
    })
  })

  describe('values', () => {
    it('should return the array of values', () => {
      positiveArray.add(5)
      positiveArray.add(10)
      expect(positiveArray.values).toEqual([5, 10])
    })
  })
})