import { calculateTotal } from '../utils/calculateTotal.js'

test('calculates total cart value correctly', () => {
  const cart = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 3 }
  ]
  expect(calculateTotal(cart)).toBe(350)
})
