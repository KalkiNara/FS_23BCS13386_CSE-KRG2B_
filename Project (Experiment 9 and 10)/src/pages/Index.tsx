import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Palette, Heart, Globe, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-artisan.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Empowering{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Indian Artisans
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Connecting skilled craftspeople with buyers who value authentic, 
                handmade treasures. Celebrate India's rich cultural heritage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button size="lg" className="shadow-[var(--shadow-warm)]">
                    Join as Artisan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="secondary">
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Beautiful Indian handicrafts showcasing traditional artisan work" 
                className="relative rounded-3xl shadow-[var(--shadow-warm)] w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Lokrang bridges the gap between India's talented artisans and global markets, 
              preserving ancient crafts while creating sustainable livelihoods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Preserve Traditions</h3>
                <p className="text-muted-foreground">
                  Keep centuries-old craft techniques alive by supporting master artisans 
                  and their apprentices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Fair Trade</h3>
                <p className="text-muted-foreground">
                  Ensure artisans receive fair compensation for their skilled work and 
                  dedication to quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Global Reach</h3>
                <p className="text-muted-foreground">
                  Connect local craftspeople with customers worldwide who appreciate 
                  authentic handmade products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Artisans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">India's Craft Heritage</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the intricate block prints of Rajasthan to the delicate silk weaves of Varanasi, 
              India's artisans carry forward traditions passed down through generations. Each piece 
              tells a story of skill, patience, and cultural pride. Lokrang provides these talented 
              craftspeople with a platform to showcase their work and reach customers who value 
              authenticity and quality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're an artisan looking to showcase your craft or a buyer 
            seeking authentic handmade products, join us today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="shadow-lg">
                Register as Artisan
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Lokrang. Empowering Indian artisans, preserving traditions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;