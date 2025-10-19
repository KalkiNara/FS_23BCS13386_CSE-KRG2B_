export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow p-4 rounded-lg hover:shadow-lg transition">
      <img
        src="/placeholder.jpg"
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-orange-600 font-medium">₹{product.price}</p>
    </div>
  )
}
