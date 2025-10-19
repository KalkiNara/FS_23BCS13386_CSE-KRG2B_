import { useState } from 'react'
import { useProducts } from '@/context/ProductContext'

export default function ProductForm() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const { addProduct } = useProducts()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && price) {
      addProduct({ id: Date.now(), name, price })
      setName('')
      setPrice('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow max-w-md mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-3">Add New Product</h2>
      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="w-full bg-orange-500 text-white py-2 rounded">Add Product</button>
    </form>
  )
}
