"use server"

import type { CartItem } from "@/contexts/cart-context"

interface OrderData {
  items: CartItem[]
  total: number
  customer: {
    email: string
    firstName: string
    lastName: string
    address: string
    city: string
    zipCode: string
    phone: string
    notes: string
  }
  paymentMethod: string
}

interface Order extends OrderData {
  id: string
  status: "pending" | "confirmed" | "preparing" | "out_for_delivery" | "delivered" | "cancelled"
  createdAt: Date
  estimatedDelivery: Date
}

// In-memory storage for demo (use a real database in production)
const orders: Order[] = []

export async function processPayment(orderData: OrderData) {
  try {
    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate order ID
    const orderId = `FT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Calculate estimated delivery (2-3 days from now)
    const estimatedDelivery = new Date()
    estimatedDelivery.setDate(estimatedDelivery.getDate() + Math.floor(Math.random() * 2) + 2)

    // Create order
    const order: Order = {
      ...orderData,
      id: orderId,
      status: "confirmed",
      createdAt: new Date(),
      estimatedDelivery,
    }

    // Store order (in production, save to database)
    orders.push(order)

    // Simulate payment processing based on method
    if (orderData.paymentMethod === "card") {
      // In production, integrate with Stripe, Square, etc.
      console.log("Processing card payment...")
    } else if (orderData.paymentMethod === "paypal") {
      // In production, integrate with PayPal
      console.log("Processing PayPal payment...")
    }

    return {
      success: true,
      orderId: orderId,
      message: "Order placed successfully!",
    }
  } catch (error) {
    console.error("Payment processing error:", error)
    return {
      success: false,
      message: "Payment failed. Please try again.",
    }
  }
}

export async function getOrder(orderId: string) {
  const order = orders.find((o) => o.id === orderId)
  return order || null
}

export async function getAllOrders() {
  return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export async function updateOrderStatus(orderId: string, status: Order["status"]) {
  const orderIndex = orders.findIndex((o) => o.id === orderId)
  if (orderIndex !== -1) {
    orders[orderIndex].status = status
    return { success: true }
  }
  return { success: false, message: "Order not found" }
}
