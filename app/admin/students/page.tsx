"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AdminLayout from "@/components/admin-layout"

// Sample student data
const initialStudents = [
  {
    id: 1,
    name: "John Doe",
    rollNo: "CS2001",
    department: "Computer Science",
    year: "3rd Year",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    rollNo: "EC2002",
    department: "Electronics",
    year: "2nd Year",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
  },
  {
    id: 3,
    name: "Michael Johnson",
    rollNo: "ME2003",
    department: "Mechanical",
    year: "4th Year",
    email: "michael.j@example.com",
    phone: "345-678-9012",
  },
  {
    id: 4,
    name: "Emily Brown",
    rollNo: "CV2004",
    department: "Civil",
    year: "1st Year",
    email: "emily.b@example.com",
    phone: "456-789-0123",
  },
  {
    id: 5,
    name: "David Wilson",
    rollNo: "CS2005",
    department: "Computer Science",
    year: "3rd Year",
    email: "david.w@example.com",
    phone: "567-890-1234",
  },
  {
    id: 6,
    name: "Sarah Taylor",
    rollNo: "EC2006",
    department: "Electronics",
    year: "2nd Year",
    email: "sarah.t@example.com",
    phone: "678-901-2345",
  },
  {
    id: 7,
    name: "Robert Martinez",
    rollNo: "ME2007",
    department: "Mechanical",
    year: "4th Year",
    email: "robert.m@example.com",
    phone: "789-012-3456",
  },
  {
    id: 8,
    name: "Jennifer Anderson",
    rollNo: "CV2008",
    department: "Civil",
    year: "1st Year",
    email: "jennifer.a@example.com",
    phone: "890-123-4567",
  },
]

export default function StudentsPage() {
  const [students, setStudents] = useState(initialStudents)
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("")
  const [yearFilter, setYearFilter] = useState("")

  // Filter students based on search term and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = departmentFilter === "" || student.department === departmentFilter
    const matchesYear = yearFilter === "" || student.year === yearFilter

    return matchesSearch && matchesDepartment && matchesYear
  })

  const handleDeleteStudent = (id: number) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((student) => student.id !== id))
    }
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Students</h1>
          <Link href="/admin/students/add">
            <Button>Add New Student</Button>
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
                  placeholder="Search by name, roll no, or email"
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
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="1st Year">1st Year</SelectItem>
                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                    <SelectItem value="4th Year">4th Year</SelectItem>
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
                  <TableHead>Roll No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.rollNo}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.department}</TableCell>
                      <TableCell>{student.year}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.phone}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Link href={`/admin/students/${student.id}`}>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </Link>
                          <Link href={`/admin/students/edit/${student.id}`}>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteStudent(student.id)}>
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No students found matching the criteria
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
