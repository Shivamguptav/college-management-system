import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">College Management System</h1>
          <div className="space-x-2">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/about">
              <Button>About Us</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Our College Management System</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            A comprehensive platform for students, faculty, and administrators to manage academic activities
            efficiently.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/login">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white hover:bg-white hover:text-blue-700"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Summary</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>For Students</CardTitle>
              <CardDescription>Access academic information and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>View attendance and marks</li>
                <li>Access event information</li>
                <li>Explore placement opportunities</li>
                <li>Manage personal profile</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/login?role=student" className="w-full">
                <Button className="w-full">Student Login</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Faculty</CardTitle>
              <CardDescription>Manage classes and student information</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Manage student details and marks</li>
                <li>Update attendance records</li>
                <li>Organize events and workshops</li>
                <li>Coordinate placement activities</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/login?role=faculty" className="w-full">
                <Button className="w-full">Faculty Login</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Administrators</CardTitle>
              <CardDescription>Complete system management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Manage students and faculty</li>
                <li>Oversee events and activities</li>
                <li>Coordinate with placement companies</li>
                <li>System-wide administration</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/login?role=admin" className="w-full">
                <Button className="w-full">Admin Login</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Our college is committed to providing quality education and comprehensive development opportunities for all
            students. We strive for excellence in academics, research, and extracurricular activities.
          </p>
          <div className="text-center">
            <Link href="/about">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">College Management System</h3>
              <p>A comprehensive platform for academic management</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/vision" className="hover:underline">
                    Vision & Mission
                  </Link>
                </li>
                <li>
                  <Link href="/infrastructure" className="hover:underline">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:underline">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>123 College Road</p>
              <p>Education City, State 12345</p>
              <p>Email: info@college.edu</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} College Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
