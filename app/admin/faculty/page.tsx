"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AdminLayout from "@/components/admin-layout"

// Sample faculty data
const initialFaculty = [
  {
    id: 1,
    name: "Dr. Robert Smith",
    employeeId: "FAC001",
    department: "Computer Science",
    designation: "Professor",
    email: "robert.smith@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Dr. Emily Johnson",
    employeeId: "FAC002",
    department: "Electronics",
    designation: "Associate Professor",
    email: "emily.j@example.com",
    phone: "234-567-8901",
  },
  {
    id: 3,
    name: "Prof. David Wilson",
    employeeId: "FAC003",
    department: "Mechanical",
    designation: "Assistant Professor",
    email: "david.w@example.com",
    phone: "345-678-9012",
  },
  {
    id: 4,
    name: "Dr. Sarah Brown",
    employeeId: "FAC004",
    department: "Civil",
    designation: "Professor",
    email: "sarah.b@example.com",
    phone: "456-789-0123",
  },
  {
    id: 5,
    name: "Prof. Michael Davis",
    employeeId: "FAC005",
    department: "Computer Science",
    designation: "Assistant Professor",
    email: "michael.d@example.com",
    phone: "567-890-1234",
  },
  {
    id: 6,
    name: "Dr. Jennifer Taylor",
    employeeId: "FAC006",
    department: "Electronics",
    designation: "Professor",
    email: "jennifer.t@example.com",
    phone: "678-901-2345",
  },
]

export default function FacultyPage() {
  const [faculty, setFaculty] = useState(initialFaculty)
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("")
  const [designationFilter, setDesignationFilter] = useState("")

  // Filter faculty based on search term and filters
  const filteredFaculty = faculty.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = departmentFilter === "" || member.department === departmentFilter
    const matchesDesignation = designationFilter === "" || member.designation === designationFilter

    return matchesSearch && matchesDepartment && matchesDesignation
  })

  const handleDeleteFaculty = (id: number) => {
    if (window.confirm("Are you sure you want to delete this faculty member?")) {
      setFaculty(faculty.filter((member) => member.id !== id))
    }
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Faculty</h1>
          <Link href="/admin/faculty/add">
            <Button>Add New Faculty</Button>
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
                  placeholder="Search by name, ID, or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                    <SelectItem value="Mechanical">Mechanical</SelectItem>
                    <SelectItem value="Civil">Civil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={designationFilter} onValueChange={setDesignationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Designation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Designations</SelectItem>
                    <SelectItem value="Professor">Professor</SelectItem>
                    <SelectItem value="Associate Professor">Associate Professor</SelectItem>
                    <SelectItem value="Assistant Professor">Assistant Professor</SelectItem>
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
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Designation</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFaculty.length > 0 ? (
                  filteredFaculty.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>{member.employeeId}</TableCell>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.department}</TableCell>
                      <TableCell>{member.designation}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.phone}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Link href={`/admin/faculty/${member.id}`}>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </Link>
                          <Link href={`/admin/faculty/edit/${member.id}`}>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteFaculty(member.id)}>
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No faculty members found matching the criteria
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
