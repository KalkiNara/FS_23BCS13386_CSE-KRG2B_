import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Search, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: string;
  product_name: string;
  price: number;
  description: string;
  category: string;
  image_url: string;
  profiles: {
    name: string;
    location: string;
  };
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      product_name: product.product_name,
      price: product.price,
      image_url: product.image_url,
      artisan_name: product.profiles.name,
    });
    toast({
      title: "Added to cart",
      description: `${product.product_name} has been added to your cart`,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(
        (product) =>
          product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.profiles?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          profiles (
            name,
            location
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
      setFilteredProducts(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Discover Authentic Crafts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse unique handmade products from talented artisans across India
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search by product, category, or artisan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all cursor-pointer"
            >
              {product.image_url && (
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image_url}
                    alt={product.product_name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-1">{product.product_name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  ₹{product.price.toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {product.category && (
                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>
                )}
                <p className="text-sm font-medium">
                  By {product.profiles?.name}
                </p>
                {product.profiles?.location && (
                  <p className="text-xs text-muted-foreground">
                    {product.profiles.location}
                  </p>
                )}
                {product.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                )}
                <Button
                  className="w-full mt-4"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {searchTerm
                ? "No products found matching your search."
                : "No products available yet. Check back soon!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;