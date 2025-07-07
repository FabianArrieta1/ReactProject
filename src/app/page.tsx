"use client"

import { useState } from "react"
import Login from "./components/login"
import DashboardProp from "./dasboard-propiedades-corregido"

type User = {
  email: string
  name: string
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = (userData: User) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  if (!user) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div>
      {/* User Info on header */}
      <div className="bg-white border-b px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{user.name.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Welcome, {user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

     {/*MAIN DASHBOARD*/}
      <DashboardProp />
    </div>
  )
}
