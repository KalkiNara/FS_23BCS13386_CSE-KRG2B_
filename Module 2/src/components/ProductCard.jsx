export default function ProductCard({ name, price }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">₹{price}</p>
      <button className="mt-3 bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">
        Edit
      </button>
    </div>
  )
}
