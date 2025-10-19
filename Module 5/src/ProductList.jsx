import { useProducts } from '@/context/ProductContext'
import ProductCard from '@/components/ProductCard'

export default function ProductList() {
  const { products } = useProducts()

  return (
    <div className="p-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.length ? (
        products.map(p => <ProductCard key={p.id} product={p} />)
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No products added yet.
        </p>
      )}
    </div>
  )
}
