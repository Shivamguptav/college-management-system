import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900">College Management System</h1>
          </Link>
          <div className="space-x-2">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/">
              <Button>Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
          <p className="text-lg mb-6">
            Our college was established in 1985 with a vision to provide quality education and foster academic
            excellence. Over the years, we have grown into a premier institution known for our commitment to holistic
            education and student development.
          </p>
          <p className="text-lg mb-6">
            With state-of-the-art facilities, experienced faculty, and a curriculum designed to meet industry standards,
            we prepare our students to excel in their chosen fields and become responsible citizens of tomorrow.
          </p>
          <p className="text-lg">
            Our college has consistently ranked among the top educational institutions in the region, with a strong
            track record of academic achievements, research contributions, and placement opportunities.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Vision and Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  To be a globally recognized institution of academic excellence, fostering innovation, research, and
                  entrepreneurship, while nurturing ethical values and social responsibility in our students.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-lg">
                  <li>Provide quality education through innovative teaching methodologies</li>
                  <li>Foster research and intellectual growth among students and faculty</li>
                  <li>Promote industry collaboration and entrepreneurship</li>
                  <li>Instill ethical values and social responsibility</li>
                  <li>Create a diverse and inclusive learning environment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Infrastructure Details</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Modern classrooms with audio-visual equipment</li>
                <li>Well-equipped laboratories for practical learning</li>
                <li>Digital library with extensive collection of books and journals</li>
                <li>Research centers for advanced studies</li>
                <li>Seminar halls and conference rooms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>High-speed campus-wide Wi-Fi network</li>
                <li>Computer labs with latest hardware and software</li>
                <li>Digital learning platforms and resources</li>
                <li>Smart classrooms with interactive technology</li>
                <li>Advanced research equipment and tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Spacious hostels with modern facilities</li>
                <li>Sports complex with indoor and outdoor facilities</li>
                <li>Cafeteria and food courts</li>
                <li>Student activity centers and clubs</li>
                <li>Healthcare center and counseling services</li>
              </ul>
            </CardContent>
          </Card>
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
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
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
