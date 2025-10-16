import { products } from '../data'

export default function ProductList() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md">
          <img
            src={p.image}
            alt={p.name}
            className="rounded-md mb-3 h-40 w-full object-cover"
          />
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-gray-500">₹{p.price}</p>
          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
