"use client"

import { useState, useEffect } from "react"
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer, Droplets } from "lucide-react"

type WeatherData = {
  location: {
    name: string
    country: string
  }
  current: {
    temp_c: number
    temp_f: number
    condition: {
      text: string
      icon: string
      code: number
    }
    wind_kph: number
    humidity: number
    vis_km: number
    feelslike_c: number
  }
}

type WeatherWidgetProps = {
  location: string
}

export default function WeatherWidget({ location }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

 
  const API_KEY = "7773fb543dadcf90441076ef2e481d18" 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        setError(null)

       
        if (API_KEY === "7773fb543dadcf90441076ef2e481d18") {
          // Datos simulados para desarrollo
          setTimeout(() => {
            const mockWeather: WeatherData = {
              location: {
                name: location.split(",")[0],
                country: "Costa Rica",
              },
              current: {
                temp_c: Math.floor(Math.random() * 10) + 25, // 25-35°C
                temp_f: Math.floor(Math.random() * 18) + 77, // 77-95°F
                condition: {
                  text: ["Sunny", "Partly cloudy", "Cloudy", "Light rain"][Math.floor(Math.random() * 4)],
                  icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
                  code: 1000,
                },
                wind_kph: Math.floor(Math.random() * 20) + 5,
                humidity: Math.floor(Math.random() * 30) + 60,
                vis_km: Math.floor(Math.random() * 5) + 10,
                feelslike_c: Math.floor(Math.random() * 10) + 27,
              },
            }
            setWeather(mockWeather)
            setLoading(false)
          }, 1000)
          return
        }

        // Llamada  a la API
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=no`,
        )

        if (!response.ok) {
          throw new Error("Weather data not available")
        }

        const data: WeatherData = await response.json()
        setWeather(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch weather")
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [location])

  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase()
    if (lowerCondition.includes("sunny") || lowerCondition.includes("clear")) {
      return <Sun className="h-6 w-6 text-yellow-500" />
    } else if (lowerCondition.includes("rain")) {
      return <CloudRain className="h-6 w-6 text-blue-500" />
    } else if (lowerCondition.includes("snow")) {
      return <CloudSnow className="h-6 w-6 text-blue-300" />
    } else {
      return <Cloud className="h-6 w-6 text-gray-500" />
    }
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-sm text-blue-600">Loading weather...</span>
        </div>
      </div>
    )
  }

  if (error || !weather) {
    return (
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
        <div className="flex items-center justify-center text-gray-500">
          <Cloud className="h-5 w-5 mr-2" />
          <span className="text-sm">Weather unavailable</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-4 border border-blue-200">
      {/* Header del clima */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          {getWeatherIcon(weather.current.condition.text)}
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-900">{weather.location.name}</p>
            <p className="text-xs text-gray-600">{weather.current.condition.text}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">{Math.round(weather.current.temp_c)}°C</p>
          <p className="text-xs text-gray-500">{Math.round(weather.current.temp_f)}°F</p>
        </div>
      </div>

      {/* Detalles del clima */}
      <div className="grid grid-cols-3 gap-3 text-xs">
        <div className="flex items-center">
          <Thermometer className="h-3 w-3 text-orange-500 mr-1" />
          <div>
            <p className="text-gray-500">Feels like</p>
            <p className="font-medium">{Math.round(weather.current.feelslike_c)}°C</p>
          </div>
        </div>
        <div className="flex items-center">
          <Droplets className="h-3 w-3 text-blue-500 mr-1" />
          <div>
            <p className="text-gray-500">Humidity</p>
            <p className="font-medium">{weather.current.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <Wind className="h-3 w-3 text-gray-500 mr-1" />
          <div>
            <p className="text-gray-500">Wind</p>
            <p className="font-medium">{Math.round(weather.current.wind_kph)} km/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}
