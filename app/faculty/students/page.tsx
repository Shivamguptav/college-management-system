"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FacultyLayout from "@/components/faculty-layout"

// Sample student data
const initialStudents = [
  {
    id: 1,
    name: "John Doe",
    rollNo: "CS2001",
    department: "Computer Science",
    year: "3rd Year",
    email: "john.doe@example.com",
    attendance: "92%",
    performance: "Excellent",
  },
  {
    id: 2,
    name: "Jane Smith",
    rollNo: "CS2002",
    department: "Computer Science",
    year: "3rd Year",
    email: "jane.smith@example.com",
    attendance: "88%",
    performance: "Good",
  },
  {
    id: 3,
    name: "Michael Johnson",
    rollNo: "CS2003",
    department: "Computer Science",
    year: "3rd Year",
    email: "michael.j@example.com",
    attendance: "95%",
    performance: "Excellent",
  },
  {
    id: 4,
    name: "Emily Brown",
    rollNo: "CS2004",
    department: "Computer Science",
    year: "3rd Year",
    email: "emily.b@example.com",
    attendance: "78%",
    performance: "Average",
  },
  {
    id: 5,
    name: "David Wilson",
    rollNo: "CS2005",
    department: "Computer Science",
    year: "3rd Year",
    email: "david.w@example.com",
    attendance: "85%",
    performance: "Good",
  },
  {
    id: 6,
    name: "Sarah Taylor",
    rollNo: "CS2006",
    department: "Computer Science",
    year: "3rd Year",
    email: "sarah.t@example.com",
    attendance: "90%",
    performance: "Good",
  },
  {
    id: 7,
    name: "Robert Martinez",
    rollNo: "CS2007",
    department: "Computer Science",
    year: "3rd Year",
    email: "robert.m@example.com",
    attendance: "75%",
    performance: "Average",
  },
  {
    id: 8,
    name: "Jennifer Anderson",
    rollNo: "CS2008",
    department: "Computer Science",
    year: "3rd Year",
    email: "jennifer.a@example.com",
    attendance: "82%",
    performance: "Good",
  },
]

export default function FacultyStudentsPage() {
  const [students, setStudents] = useState(initialStudents)
  const [searchTerm, setSearchTerm] = useState("")
  const [performanceFilter, setPerformanceFilter] = useState("")

  // Filter students based on search term and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPerformance = performanceFilter === "" || student.performance === performanceFilter

    return matchesSearch && matchesPerformance
  })

  return (
    <FacultyLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Students</h1>
          <div className="space-x-2">
            <Link href="/faculty/marks/add">
              <Button variant="outline">Add Marks</Button>
            </Link>
            <Link href="/faculty/attendance/mark">
              <Button>Mark Attendance</Button>
            </Link>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search and Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Search by name, roll no, or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Select value={performanceFilter} onValueChange={setPerformanceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Performance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Performance Levels</SelectItem>
                    <SelectItem value="Excellent">Excellent</SelectItem>
                    <SelectItem value="Good">Good</SelectItem>
                    <SelectItem value="Average">Average</SelectItem>
                    <SelectItem value="Below Average">Below Average</SelectItem>
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
                  <TableHead>Email</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.rollNo}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.attendance}</TableCell>
                      <TableCell>{student.performance}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Link href={`/faculty/students/${student.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          <Link href={`/faculty/marks/add?student=${student.id}`}>
                            <Button variant="outline" size="sm">
                              Add Marks
                            </Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4">
                      No students found matching the criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  )
}
