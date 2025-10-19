import { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const addProduct = (newProduct) => setProducts([...products, newProduct])
  const removeProduct = (id) => setProducts(products.filter(p => p.id !== id))

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
