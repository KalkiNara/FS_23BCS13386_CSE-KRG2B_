import ProductCard from '../components/ProductCard'
import { products } from '../data'

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} name={p.name} price={p.price} />
        ))}
      </div>
    </div>
  )
}
