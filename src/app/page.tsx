import PropertyList from '@/components/PropertyList'
import Cart from '@/components/Cart'
import { CartProvider } from '@/contexts/CartContext'

export default function Home() {
  return (
    <CartProvider>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Property Rental Platform</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <PropertyList />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </main>
    </CartProvider>
  )
}