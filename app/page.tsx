"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Award, Phone, Mail, MapPin } from "lucide-react"
import { CartProvider, useCart } from "@/contexts/cart-context"
import { CartIcon } from "@/components/cart"

function ProductCard({ product }: { product: any }) {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.name.toLowerCase().replace(/\s+/g, "-"),
        name: product.name,
        price: Number.parseFloat(product.price.replace("$", "")),
        image: product.image,
      },
    })
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4 bg-green-600">{product.badge}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
        <CardDescription className="text-gray-600 mb-4">{product.description}</CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">{product.price}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <Button onClick={addToCart} className="w-full mt-4 bg-green-600 hover:bg-green-700">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default function FruitTeaWebsite() {
  return (
    <CartProvider>
      <FruitTeaContent />
    </CartProvider>
  )
}

function FruitTeaContent() {
  // Move all the existing content here and use ProductCard in the products section
  const products = [
    {
      name: "Tropical Paradise",
      description: "Mango, pineapple, and passion fruit blend",
      price: "$4.99",
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
    },
    {
      name: "Berry Bliss",
      description: "Mixed berries with hibiscus and mint",
      price: "$4.49",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
    },
    {
      name: "Citrus Burst",
      description: "Orange, lemon, and grapefruit infusion",
      price: "$4.29",
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Refreshing",
    },
    {
      name: "Peach Serenity",
      description: "Sweet peach with chamomile and honey",
      price: "$4.79",
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Calming",
    },
    {
      name: "Apple Cinnamon",
      description: "Crisp apple with warming cinnamon spice",
      price: "$4.39",
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Seasonal",
    },
    {
      name: "Dragon Fruit Delight",
      description: "Exotic dragon fruit with lychee notes",
      price: "$5.29",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Premium",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/fufootea-logo.png" alt="Fufootea" width={120} height={40} className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-green-600 transition-colors">
              Products
            </Link>
            <Link href="#promotions" className="text-gray-700 hover:text-green-600 transition-colors">
              Promotions
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <CartIcon />
            <Button className="bg-green-600 hover:bg-green-700">Order Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Fresh <span className="text-green-600">Fruit</span> Tea
            <br />
            <span className="text-orange-500">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our premium collection of handcrafted fruit teas made with the finest natural ingredients. Refreshing, healthy, and bursting with flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Explore Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              View Promotions
            </Button>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/493864951_122155537346441974_1586368821575391203_n.jpg-QQbCgDsjUugHILS4KnET3KtfVTyv6G.jpeg"
              alt="Fufootea Menu - Seasonal Fruit & Vegetable Tea Collection"
              width={800}
              height={400}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Signature Blends</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each tea is carefully crafted with premium fruits and natural ingredients for the perfect taste
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section id="promotions" className="py-20 px-4 bg-gradient-to-r from-orange-100 to-green-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Promotions</h2>
            <p className="text-xl text-gray-600">Limited time offers you don't want to miss!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 mr-3" />
                  <Badge variant="secondary" className="bg-white text-green-600">
                    Limited Time
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold mb-4">Buy 2 Get 1 Free</h3>
                <p className="text-green-100 mb-6 text-lg">
                  Mix and match any of our signature fruit teas. Perfect for sharing with friends or stocking up on your
                  favorites.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 mr-3" />
                  <Badge variant="secondary" className="bg-white text-orange-600">
                    New Customer
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold mb-4">20% Off First Order</h3>
                <p className="text-orange-100 mb-6 text-lg">
                  Welcome to FreshTea! Enjoy 20% off your first order when you sign up for our newsletter.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  Get Discount
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Loyalty Program</h3>
                <p className="text-gray-600 mb-6">
                  Join our FreshTea Rewards program and earn points with every purchase. Redeem points for free drinks,
                  exclusive flavors, and special discounts.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">Join Rewards Program</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                {"FufooTea is a proudly Malaysian local brand, dedicated to serving the finest handcrafted tea — brewed with honesty, heart, and real ingredients. We believe in keeping it real: real fruits, real tea, and real passion in every cup. 🍵✨\n\nFrom our very first blend, we’ve stayed true to our roots — creating refreshing, feel-good drinks that celebrate the simplicity of natural flavors and the joy of sharing good tea with good people.\n\nWelcome to FufooTea. Stay real, sip happy. 💛"}
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600">Unique Flavors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Natural Ingredients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Tea preparation process"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Visit us or reach out online!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+60 13-604 1491</p>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri 9AM-8PM</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">fufootea@gmail.com</p>
                <p className="text-sm text-gray-500 mt-2">We reply within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">{"📍Austin Branch, 12pm-12am\n11 jalan austin heights 7/2 taman mount austin \n\n📍Paradigm Mall, 10am-10pm\nLot 3FK-12E, F-H (level3)"}</p>
                <p className="text-gray-600">Fresh City, FC 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/images/fufootea-logo.png"
                  alt="Fufootea"
                  width={120}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">Premium fruit teas crafted with love and the finest natural ingredients.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#home" className="hover:text-green-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-green-400 transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#promotions" className="hover:text-green-400 transition-colors">
                    Promotions
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-green-400 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-green-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest flavors and offers!</p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/fufootea" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-400 hover:text-green-400 hover:border-green-400 bg-transparent"
                  >
                    Facebook
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/fufootea/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-400 hover:text-green-400 hover:border-green-400 bg-transparent"
                  >
                    Instagram
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreshTea. All rights reserved. Made with ❤️ for tea lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
