import { CartProvider } from "@/contexts/cartcontext";
import PropertyList from "./propertyList";
import Cart from "./cart";

export default function Home() {
  return (
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
  );
}
