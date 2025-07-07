"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Bed, Bath, Heart, Star } from "lucide-react"
import { SiYoutube, SiInstagram } from "react-icons/si"
import WeatherWidget from "./components/weather"

// Define the type of property
type Property = {
  id: number
  title: string
  price: number
  location: string
  image: string
  images: string[]
  description: string
  rating: number
  available: boolean
  features: string[]
  bathrooms: number
  rooms: number
}

/*List of Properties*/
const properties: Property[] = [
  {
    id: 1,
    title: "Villa Cahuita",
    price: 15000,
    location: "Cahuita,Limón",
    image: "/img/Cahuita-Main.png",
    images: ["/img/Cahuita-Bath.png", "/img/Cahuita-Bed.png", "/img/Cahuita-Living.png", "/img/Cahuita-POOL.png"],
    description:
      "Residential house with a modern concept, high ceilings that provide a fresh atmosphere, comfort, and coziness. On the second floor, you will find 2 bedrooms with 4 single beds and 4 queen beds, designed for groups of 6 people each, a spacious bathroom, and a TV room with a queen sofa bed. It is worth noting that the bedrooms are equipped with air conditioning.",
    rating: 4.9,
    available: true,
    features: [
      "3 bedrooms",
      "4 single beds",
      "4 queen size beds",
      "2 stories",
      "A/C",
      "WiFi",
      "Outdoor barbecue",
      "Private pool",
    ],
    bathrooms: 2,
    rooms: 3,
  },
  {
    id: 2,
    title: "Casa Cristal La fortuna",
    price: 51000,
    location: "La Fortuna,Alajuela",
    image: "/img/Fortuna-Main.png",
    images: ["/img/Fortuna-Bath.png", "/img/Fortuna-Bed.png", "/img/Fortuna-Pool.png"],
    description:
      'Casa Cristal is a small paradise in La Fortuna, offering 3 cozy private apartments for 2 people, featuring a queen-size bed, air conditioning, full private bathroom with hot water, bath towels, shampoo and conditioner, basic kitchen, refrigerator, TV, bed linens, 24/7 access to the private pool area with waterfall and a 75" TV. Pets are welcome.',
    rating: 4,
    available: true,
    features: ["A/C", "Private bathroom", "Queen size bed", "Private pool with waterfall", "24/7 security", "WiFi"],
    bathrooms: 1,
    rooms: 1,
  },
  {
    id: 3,
    title: "Tamarindo luxury villa",
    price: 463000,
    location: "Tamarindo,Guanacaste",
    image: "/img/Tamarindo-Main.png",
    images: ["/img/Tamarindo-Bath.png", "/img/Tamarindo-Bed.png", "/img/Tamarindo-Pool.png"],
    description: "Unique family-owned luxury villa located in the heart of Tamarindo.",
    rating: 4.9,
    available: true,
    features: [
      "Daily cleaning service.",
      "3 bedrooms.",
      "Private Pool.",
      "3 bathrooms.",
      "Outdoor shower.",
      "Outdoor Barbecue",
      "A/C",
      "WiFi",
    ],
    bathrooms: 3,
    rooms: 3,
  },
]

export default function DashboardProp() {
  const [selectedProp, setSelectedProp] = useState<Property | null>(null)
  const [opMenu, setOpMenu] = useState(false)
  const [filters, setFilters] = useState({
    location: "",
  })

  /*Search filter*/
  const [search, setSearch] = useState("")
  const filtProp = properties.filter((property) => {
    const trueLocation = !filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())
    const trueSearch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase())
    return trueLocation && trueSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/*header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Oceans properties</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Look for properties..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() => setOpMenu(true)}
                className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content*/}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">{filtProp.length} Available Properties</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtProp.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{prop.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">₡{prop.price}</p>
                    <p className="text-sm text-gray-500">/month</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{prop.rooms} Rooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{prop.bathrooms} Bathrooms</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{prop.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${prop.available ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                    >
                      {prop.available ? "Available" : "Not available"}
                    </span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative cursor-pointer group" onClick={() => setSelectedProp(prop)}>
                <img
                  src={prop.image || "/placeholder.svg"}
                  alt={prop.title}
                  className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <Search className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">More Info</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Menu */}
      {opMenu && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 " onClick={() => setOpMenu(false)}></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={() => setOpMenu(false)} className="p-1 hover:bg-gray-100 rounded">
                  ✕
                </button>
              </div>

              <div className="space-y-8">
                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Filter by Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Tamarindo... "
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Clean Filters */}
                <button
                  onClick={() => setFilters({ location: "" })}
                  disabled={!filters.location}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                >
                  Clean Filters
                </button>

                {/* Social*/}
                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium mb-4">Our Social Media</h3>
                  <div className="space-y-3">
                    <a
                      href="https://instagram.com/oceanscode"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"
                    >
                      <SiInstagram className="h-5 w-5 text-pink-600" />
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a
                      href="https://m.youtube.com/@oceanscode?fbclid=PAQ0xDSwLY0wdleHRuA2FlbQIxMAABp5F3YHiE7MTXxlz0KGazM9hZIThbI05jYQxn-noBMEvJC8EIyNgOk_AQFDbE_aem_hKV6CoS2pq5HhBXkQ5rnPA"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"
                    >
                      <SiYoutube className="h-5 w-5 text-red-600" />
                      <span className="text-sm">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de detalles */}
      {selectedProp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0  bg-opacity-50" onClick={() => setSelectedProp(null)}></div>
          <div className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{selectedProp.title}</h2>
                <button onClick={() => setSelectedProp(null)} className="p-1 hover:bg-gray-100 rounded">
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProp.images[0] || "/placeholder.svg"}
                    alt={selectedProp.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProp.images.slice(1).map((imagen, index) => (
                      <img
                        key={index}
                        src={imagen || "/placeholder.svg"}
                        alt={`Vista ${index + 2}`}
                        className="w-full h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 mb-2">₡{selectedProp.price}/month</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{selectedProp.location}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <Bed className="h-6 w-6 mx-auto mb-1 text-gray-600" />
                      <p className="text-sm text-gray-600">Rooms</p>
                      <p className="font-semibold">{selectedProp.rooms}</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto mb-1 text-gray-600" />
                      <p className="text-sm text-gray-600">Bathrooms</p>
                      <p className="font-semibold">{selectedProp.bathrooms}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedProp.description}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProp.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Weather at the Location</h4>
                    <WeatherWidget location={selectedProp.location}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
