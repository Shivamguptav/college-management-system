"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import FacultyLayout from "@/components/faculty-layout"

// Sample student data
const students = [
  { id: 1, name: "John Doe", rollNo: "CS2001" },
  { id: 2, name: "Jane Smith", rollNo: "CS2002" },
  { id: 3, name: "Michael Johnson", rollNo: "CS2003" },
  { id: 4, name: "Emily Brown", rollNo: "CS2004" },
  { id: 5, name: "David Wilson", rollNo: "CS2005" },
  { id: 6, name: "Sarah Taylor", rollNo: "CS2006" },
  { id: 7, name: "Robert Martinez", rollNo: "CS2007" },
  { id: 8, name: "Jennifer Anderson", rollNo: "CS2008" },
]

// Sample courses
const courses = [
  { id: 1, code: "CS301", name: "Data Structures" },
  { id: 2, code: "CS302", name: "Algorithm Design" },
  { id: 3, code: "CS303", name: "Computer Networks" },
  { id: 4, code: "CS304", name: "Operating Systems" },
  { id: 5, code: "CS305", name: "Database Management" },
]

// Sample exam types
const examTypes = [
  { id: 1, name: "Mid-term Exam" },
  { id: 2, name: "Final Exam" },
  { id: 3, name: "Quiz" },
  { id: 4, name: "Assignment" },
  { id: 5, name: "Project" },
]

export default function AddMarksPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const studentIdParam = searchParams.get("student")

  const [formData, setFormData] = useState({
    student: "",
    course: "",
    examType: "",
    maxMarks: "100",
    obtainedMarks: "",
    remarks: "",
  })

  useEffect(() => {
    if (studentIdParam) {
      setFormData((prev) => ({ ...prev, student: studentIdParam }))
    }
  }, [studentIdParam])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form data
    if (!formData.student || !formData.course || !formData.examType || !formData.obtainedMarks) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      })
      return
    }

    // Validate marks
    const obtainedMarks = Number.parseFloat(formData.obtainedMarks)
    const maxMarks = Number.parseFloat(formData.maxMarks)

    if (isNaN(obtainedMarks) || isNaN(maxMarks)) {
      toast({
        title: "Error",
        description: "Marks must be valid numbers",
        variant: "destructive",
      })
      return
    }

    if (obtainedMarks < 0 || obtainedMarks > maxMarks) {
      toast({
        title: "Error",
        description: `Obtained marks must be between 0 and ${maxMarks}`,
        variant: "destructive",
      })
      return
    }

    // In a real application, this would be an API call to add the marks
    // For now, we'll simulate a successful addition

    try {
      // Simulate API call delay
      setTimeout(() => {
        toast({
          title: "Success",
          description: "Marks added successfully",
        })

        // Reset form or redirect
        setFormData({
          student: "",
          course: "",
          examType: "",
          maxMarks: "100",
          obtainedMarks: "",
          remarks: "",
        })
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add marks. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <FacultyLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Add Student Marks</h1>

        <Card>
          <CardHeader>
            <CardTitle>Enter Marks Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="student">Select Student *</Label>
                  <Select value={formData.student} onValueChange={(value) => handleSelectChange("student", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Student" />
                    </SelectTrigger>
                    <SelectContent>
                      {students.map((student) => (
                        <SelectItem key={student.id} value={student.id.toString()}>
                          {student.rollNo} - {student.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Select Course *</Label>
                  <Select value={formData.course} onValueChange={(value) => handleSelectChange("course", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id.toString()}>
                          {course.code} - {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="examType">Exam Type *</Label>
                  <Select value={formData.examType} onValueChange={(value) => handleSelectChange("examType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Exam Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {examTypes.map((examType) => (
                        <SelectItem key={examType.id} value={examType.id.toString()}>
                          {examType.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxMarks">Maximum Marks *</Label>
                  <Input
                    id="maxMarks"
                    name="maxMarks"
                    type="number"
                    value={formData.maxMarks}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="obtainedMarks">Obtained Marks *</Label>
                  <Input
                    id="obtainedMarks"
                    name="obtainedMarks"
                    type="number"
                    value={formData.obtainedMarks}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="remarks">Remarks</Label>
                  <Input
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Any additional comments"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => router.push("/faculty/students")}>
                  Cancel
                </Button>
                <Button type="submit">Add Marks</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  )
}
