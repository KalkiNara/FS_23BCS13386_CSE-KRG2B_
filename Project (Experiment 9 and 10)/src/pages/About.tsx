import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">About Lokrang</h1>
            <p className="text-xl text-muted-foreground">
              Preserving India's Rich Craft Heritage
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12 space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              Lokrang is more than just a marketplace—it's a movement to preserve and celebrate 
              India's centuries-old craft traditions. We connect skilled artisans from across the 
              country with customers who appreciate authentic, handmade quality.
            </p>

            <p className="text-lg leading-relaxed">
              From the vibrant block prints of Rajasthan to the intricate Kanjivaram silk of Tamil Nadu, 
              from the delicate Chikankari embroidery of Lucknow to the stunning Pattachitra paintings 
              of Odisha—each craft tells a story of heritage, skill, and dedication passed down through 
              generations.
            </p>

            <p className="text-lg leading-relaxed">
              Our platform empowers artisans to showcase their work directly to buyers worldwide, 
              ensuring they receive fair compensation and recognition for their extraordinary skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center shadow-[var(--shadow-soft)]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Artisans</h3>
                <p className="text-muted-foreground">
                  Supporting skilled craftspeople and preserving traditional techniques
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-[var(--shadow-soft)]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fair Trade</h3>
                <p className="text-muted-foreground">
                  Ensuring artisans receive fair prices for their beautiful work
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-[var(--shadow-soft)]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentic Quality</h3>
                <p className="text-muted-foreground">
                  Every product is genuinely handmade with exceptional craftsmanship
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Preserve traditional Indian crafts for future generations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Provide artisans with sustainable livelihoods and dignity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Connect buyers with authentic, high-quality handmade products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Build a community that values craftsmanship and cultural heritage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Promote fair trade practices and ethical commerce</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;