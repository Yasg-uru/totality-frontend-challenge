'use client'

import { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import { Property } from '@/types'

export default function PropertyList() {
  const [properties, setProperties] = useState<Property[]>([])
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  })

  useEffect(() => {
    // In a real application, this would be an API call
    setProperties([
      {
        id: '1',
        title: 'Cozy Apartment',
        description: 'A beautiful apartment in the heart of the city',
        price: 100,
        image: '/placeholder.svg?height=200&width=300',
        location: 'New York',
        bedrooms: 2,
      },
      {
        id: '2',
        title: 'Luxury Villa',
        description: 'Spacious villa with a private pool',
        price: 300,
        image: '/placeholder.svg?height=200&width=300',
        location: 'Los Angeles',
        bedrooms: 4,
      },
      // Add more properties here
    ])
  }, [])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.minPrice === '' || property.price >= parseInt(filters.minPrice)) &&
      (filters.maxPrice === '' || property.price <= parseInt(filters.maxPrice)) &&
      (filters.bedrooms === '' || property.bedrooms === parseInt(filters.bedrooms))
    )
  })

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}