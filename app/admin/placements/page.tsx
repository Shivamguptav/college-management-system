"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import AdminLayout from "@/components/admin-layout"

// Sample companies data
const initialCompanies = [
  {
    id: 1,
    name: "TechCorp",
    industry: "Information Technology",
    visitDate: "2023-11-20",
    eligibility: "Computer Science, Electronics",
    package: "12 LPA",
    positions: "Software Engineer, Data Analyst",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "GlobalSoft",
    industry: "Software Development",
    visitDate: "2023-12-05",
    eligibility: "Computer Science",
    package: "15 LPA",
    positions: "Full Stack Developer, DevOps Engineer",
    status: "Upcoming",
  },
  {
    id: 3,
    name: "InnovateX",
    industry: "Research & Development",
    visitDate: "2023-10-15",
    eligibility: "Electronics, Mechanical",
    package: "10 LPA",
    positions: "Research Associate, Product Engineer",
    status: "Completed",
  },
  {
    id: 4,
    name: "FinTech Solutions",
    industry: "Finance Technology",
    visitDate: "2023-09-25",
    eligibility: "Computer Science, Electronics",
    package: "14 LPA",
    positions: "Software Developer, System Analyst",
    status: "Completed",
  },
  {
    id: 5,
    name: "BuildCorp",
    industry: "Construction",
    visitDate: "2023-11-30",
    eligibility: "Civil, Mechanical",
    package: "8 LPA",
    positions: "Project Engineer, Site Supervisor",
    status: "Upcoming",
  },
]

export default function PlacementsPage() {
  const [companies, setCompanies] = useState(initialCompanies)
  const [searchTerm, setSearchTerm] = useState("")
  const [industryFilter, setIndustryFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  // Filter companies based on search term and filters
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.positions.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.eligibility.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesIndustry = industryFilter === "" || company.industry === industryFilter
    const matchesStatus = statusFilter === "" || company.status === statusFilter

    return matchesSearch && matchesIndustry && matchesStatus
  })

  const handleDeleteCompany = (id: number) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      setCompanies(companies.filter((company) => company.id !== id))
    }
  }

  const getStatusBadge = (status: string) => {
    if (status === "Upcoming") {
      return <Badge className="bg-green-500">{status}</Badge>
    } else if (status === "Completed") {
      return <Badge variant="secondary">{status}</Badge>
    } else {
      return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Placement Companies</h1>
          <Link href="/admin/placements/add">
            <Button>Add New Company</Button>
          </Link>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search and Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input
                  placeholder="Search by name, positions, or eligibility"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Select value={industryFilter} onValueChange={setIndustryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="Information Technology">Information Technology</SelectItem>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="Research & Development">Research & Development</SelectItem>
                    <SelectItem value="Finance Technology">Finance Technology</SelectItem>
                    <SelectItem value="Construction">Construction</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Upcoming">Upcoming</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Visit Date</TableHead>
                  <TableHead>Eligibility</TableHead>
                  <TableHead>Package</TableHead>
                  <TableHead>Positions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company) => (
                    <TableRow key={company.id}>
                      <TableCell>{company.name}</TableCell>
                      <TableCell>{company.industry}</TableCell>
                      <TableCell>{company.visitDate}</TableCell>
                      <TableCell>{company.eligibility}</TableCell>
                      <TableCell>{company.package}</TableCell>
                      <TableCell>{company.positions}</TableCell>
                      <TableCell>{getStatusBadge(company.status)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Link href={`/admin/placements/${company.id}`}>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </Link>
                          <Link href={`/admin/placements/edit/${company.id}`}>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteCompany(company.id)}>
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-4">
                      No companies found matching the criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
