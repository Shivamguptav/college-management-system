"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  Building2,
  ClipboardList,
  UserCircle,
  Clock,
  Menu,
  X,
  LogOut,
} from "lucide-react"

interface FacultyLayoutProps {
  children: React.ReactNode
}

export default function FacultyLayout({ children }: FacultyLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleLogout = () => {
    // In a real application, this would handle the logout process
    router.push("/login")
  }

  const navItems = [
    { name: "Dashboard", href: "/faculty/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "Students", href: "/faculty/students", icon: <Users className="h-5 w-5" /> },
    { name: "Marks", href: "/faculty/marks", icon: <ClipboardList className="h-5 w-5" /> },
    { name: "Attendance", href: "/faculty/attendance", icon: <Clock className="h-5 w-5" /> },
    { name: "Events", href: "/faculty/events", icon: <Calendar className="h-5 w-5" /> },
    { name: "Placements", href: "/faculty/placements", icon: <Building2 className="h-5 w-5" /> },
    { name: "Internships", href: "/faculty/internships", icon: <GraduationCap className="h-5 w-5" /> },
    { name: "Profile", href: "/faculty/profile", icon: <UserCircle className="h-5 w-5" /> },
    { name: "Status", href: "/faculty/status", icon: <Clock className="h-5 w-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        } bg-gray-600 bg-opacity-75 transition-opacity`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex items-center justify-between border-b px-4 py-5">
            <Link href="/faculty/dashboard" className="text-xl font-bold text-gray-900">
              Faculty Portal
            </Link>
            <button onClick={toggleSidebar} className="lg:hidden">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Sidebar navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center rounded-md px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="border-t p-4">
            <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="flex h-16 items-center justify-between px-4">
            <button onClick={toggleSidebar} className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-700">Dr. Robert Smith</p>
                <p className="text-xs text-gray-500">Computer Science Department</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
