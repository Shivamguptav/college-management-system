"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import StudentLayout from "@/components/student-layout"

// Sample marks data
const initialMarks = [
  {
    id: 1,
    courseCode: "CS301",
    courseName: "Data Structures",
    examType: "Mid-term Exam",
    maxMarks: 50,
    obtainedMarks: 42,
    percentage: 84,
    grade: "A",
    semester: "Fall 2023",
  },
  {
    id: 2,
    courseCode: "CS302",
    courseName: "Algorithm Design",
    examType: "Mid-term Exam",
    maxMarks: 50,
    obtainedMarks: 45,
    percentage: 90,
    grade: "A+",
    semester: "Fall 2023",
  },
  {
    id: 3,
    courseCode: "CS303",
    courseName: "Computer Networks",
    examType: "Mid-term Exam",
    maxMarks: 50,
    obtainedMarks: 38,
    percentage: 76,
    grade: "B+",
    semester: "Fall 2023",
  },
  {
    id: 4,
    courseCode: "CS304",
    courseName: "Operating Systems",
    examType: "Mid-term Exam",
    maxMarks: 50,
    obtainedMarks: 40,
    percentage: 80,
    grade: "A",
    semester: "Fall 2023",
  },
  {
    id: 5,
    courseCode: "CS305",
    courseName: "Database Management",
    examType: "Mid-term Exam",
    maxMarks: 50,
    obtainedMarks: 44,
    percentage: 88,
    grade: "A",
    semester: "Fall 2023",
  },
  {
    id: 6,
    courseCode: "CS301",
    courseName: "Data Structures",
    examType: "Quiz 1",
    maxMarks: 20,
    obtainedMarks: 18,
    percentage: 90,
    grade: "A+",
    semester: "Fall 2023",
  },
  {
    id: 7,
    courseCode: "CS302",
    courseName: "Algorithm Design",
    examType: "Quiz 1",
    maxMarks: 20,
    obtainedMarks: 16,
    percentage: 80,
    grade: "A",
    semester: "Fall 2023",
  },
  {
    id: 8,
    courseCode: "CS303",
    courseName: "Computer Networks",
    examType: "Assignment 1",
    maxMarks: 30,
    obtainedMarks: 28,
    percentage: 93,
    grade: "A+",
    semester: "Fall 2023",
  },
  {
    id: 9,
    courseCode: "CS304",
    courseName: "Operating Systems",
    examType: "Assignment 1",
    maxMarks: 30,
    obtainedMarks: 25,
    percentage: 83,
    grade: "A",
    semester: "Fall 2023",
  },
  {
    id: 10,
    courseCode: "CS305",
    courseName: "Database Management",
    examType: "Project",
    maxMarks: 100,
    obtainedMarks: 85,
    percentage: 85,
    grade: "A",
    semester: "Fall 2023",
  },
]

// Previous semester marks for comparison
const previousSemesterMarks = [
  {
    courseCode: "CS201",
    courseName: "Object-Oriented Programming",
    grade: "A",
    percentage: 85,
    semester: "Spring 2023",
  },
  {
    courseCode: "CS202",
    courseName: "Digital Logic Design",
    grade: "A+",
    percentage: 92,
    semester: "Spring 2023",
  },
  {
    courseCode: "CS203",
    courseName: "Discrete Mathematics",
    grade: "B+",
    percentage: 78,
    semester: "Spring 2023",
  },
  {
    courseCode: "CS204",
    courseName: "Computer Organization",
    grade: "A",
    percentage: 84,
    semester: "Spring 2023",
  },
  {
    courseCode: "CS205",
    courseName: "Probability and Statistics",
    grade: "B",
    percentage: 75,
    semester: "Spring 2023",
  },
]

export default function StudentMarksPage() {
  const [marks, setMarks] = useState(initialMarks)
  const [semesterFilter, setSemesterFilter] = useState("Fall 2023")
  const [courseFilter, setCourseFilter] = useState("")
  const [examTypeFilter, setExamTypeFilter] = useState("")

  // Get unique courses and exam types for filters
  const courses = Array.from(new Set(marks.map((mark) => mark.courseCode + " - " + mark.courseName)))
  const examTypes = Array.from(new Set(marks.map((mark) => mark.examType)))
  const semesters = ["Fall 2023", "Spring 2023"]

  // Filter marks based on filters
  const filteredMarks = marks.filter((mark) => {
    const matchesSemester = semesterFilter === "" || mark.semester === semesterFilter
    const matchesCourse = courseFilter === "" || mark.courseCode + " - " + mark.courseName === courseFilter
    const matchesExamType = examTypeFilter === "" || mark.examType === examTypeFilter

    return matchesSemester && matchesCourse && matchesExamType
  })

  // Calculate overall performance
  const calculateOverallPerformance = () => {
    if (filteredMarks.length === 0) return 0

    const totalPercentage = filteredMarks.reduce((sum, mark) => sum + mark.percentage, 0)
    return Math.round(totalPercentage / filteredMarks.length)
  }

  const overallPerformance = calculateOverallPerformance()

  // Get grade color
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "text-green-600"
      case "A":
        return "text-green-500"
      case "B+":
        return "text-blue-500"
      case "B":
        return "text-blue-400"
      case "C+":
        return "text-yellow-500"
      case "C":
        return "text-yellow-400"
      default:
        return "text-gray-500"
    }
  }

  return (
    <StudentLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">My Academic Performance</h1>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Overall Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">{overallPerformance}%</div>
              <Progress value={overallPerformance} className="h-2 mb-4" />
              <div className="text-sm text-muted-foreground">Based on all assessments in the selected filters</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current CGPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">8.7</div>
              <Progress value={87} className="h-2 mb-4" />
              <div className="text-sm text-muted-foreground">Cumulative GPA across all semesters</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Semester GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">9.1</div>
              <Progress value={91} className="h-2 mb-4" />
              <div className="text-sm text-muted-foreground">GPA for Fall 2023 semester</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Marks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Select value={semesterFilter} onValueChange={setSemesterFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    {semesters.map((semester, index) => (
                      <SelectItem key={index} value={semester}>
                        {semester}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={courseFilter} onValueChange={setCourseFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {courses.map((course, index) => (
                      <SelectItem key={index} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={examTypeFilter} onValueChange={setExamTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Exam Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Exam Types</SelectItem>
                    {examTypes.map((examType, index) => (
                      <SelectItem key={index} value={examType}>
                        {examType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marks Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Marks Details</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Code</TableHead>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Exam Type</TableHead>
                  <TableHead className="text-right">Max Marks</TableHead>
                  <TableHead className="text-right">Obtained</TableHead>
                  <TableHead className="text-right">Percentage</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMarks.length > 0 ? (
                  filteredMarks.map((mark) => (
                    <TableRow key={mark.id}>
                      <TableCell>{mark.courseCode}</TableCell>
                      <TableCell>{mark.courseName}</TableCell>
                      <TableCell>{mark.examType}</TableCell>
                      <TableCell className="text-right">{mark.maxMarks}</TableCell>
                      <TableCell className="text-right">{mark.obtainedMarks}</TableCell>
                      <TableCell className="text-right">{mark.percentage}%</TableCell>
                      <TableCell className="text-center">
                        <span className={`font-bold ${getGradeColor(mark.grade)}`}>{mark.grade}</span>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No marks found matching the selected filters
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Previous Semester Performance */}
        {semesterFilter === "Fall 2023" && (
          <Card>
            <CardHeader>
              <CardTitle>Previous Semester Performance (Spring 2023)</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Code</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {previousSemesterMarks.map((mark, index) => (
                    <TableRow key={index}>
                      <TableCell>{mark.courseCode}</TableCell>
                      <TableCell>{mark.courseName}</TableCell>
                      <TableCell className="text-right">{mark.percentage}%</TableCell>
                      <TableCell className="text-center">
                        <span className={`font-bold ${getGradeColor(mark.grade)}`}>{mark.grade}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </StudentLayout>
  )
}
