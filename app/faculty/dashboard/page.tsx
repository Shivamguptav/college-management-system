"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FacultyLayout from "@/components/faculty-layout"

export default function FacultyDashboard() {
  const [stats, setStats] = useState({
    totalStudents: 120,
    attendanceToday: 112,
    upcomingEvents: 3,
    pendingTasks: 5,
  })

  return (
    <FacultyLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Faculty Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">My Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalStudents}</div>
              <p className="text-xs text-muted-foreground mt-1">Assigned to your classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {stats.attendanceToday} / {stats.totalStudents}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {Math.round((stats.attendanceToday / stats.totalStudents) * 100)}% present today
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.upcomingEvents}</div>
              <p className="text-xs text-muted-foreground mt-1">Events in next 7 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.pendingTasks}</div>
              <p className="text-xs text-muted-foreground mt-1">Tasks requiring attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Student Management</CardTitle>
              <CardDescription>Manage student details and marks</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/faculty/students">
                <Button className="w-full">View Students</Button>
              </Link>
              <Link href="/faculty/marks/add">
                <Button variant="outline" className="w-full">
                  Add Marks
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attendance</CardTitle>
              <CardDescription>Manage daily attendance records</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/faculty/attendance/mark">
                <Button className="w-full">Mark Attendance</Button>
              </Link>
              <Link href="/faculty/attendance/view">
                <Button variant="outline" className="w-full">
                  View Attendance Records
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Events & Activities</CardTitle>
              <CardDescription>Manage events and workshops</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/faculty/events">
                <Button className="w-full">View Events</Button>
              </Link>
              <Link href="/faculty/events/add">
                <Button variant="outline" className="w-full">
                  Add New Event
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Placements</CardTitle>
              <CardDescription>Manage placement activities</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/faculty/placements">
                <Button className="w-full">View Companies</Button>
              </Link>
              <Link href="/faculty/internships">
                <Button variant="outline" className="w-full">
                  Student Internships
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
              <CardDescription>View and update your profile</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/faculty/profile">
                <Button className="w-full">View Profile</Button>
              </Link>
              <Link href="/faculty/profile/professional">
                <Button variant="outline" className="w-full">
                  Professional Details
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Daily Status</CardTitle>
              <CardDescription>Update your daily status</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/faculty/status/update">
                <Button className="w-full">Update Status</Button>
              </Link>
              <Link href="/faculty/status/history">
                <Button variant="outline" className="w-full">
                  View Status History
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <h2 className="text-2xl font-bold mb-4">Today's Schedule</h2>
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Data Structures (CS301)</p>
                  <p className="text-sm text-muted-foreground">3rd Year - Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">09:00 AM - 10:30 AM</p>
                  <p className="text-sm text-muted-foreground">Room 201</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Database Management (CS305)</p>
                  <p className="text-sm text-muted-foreground">3rd Year - Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">11:00 AM - 12:30 PM</p>
                  <p className="text-sm text-muted-foreground">Lab 102</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Department Meeting</p>
                  <p className="text-sm text-muted-foreground">Faculty Meeting</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">02:00 PM - 03:00 PM</p>
                  <p className="text-sm text-muted-foreground">Conference Room</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Algorithm Design (CS302)</p>
                  <p className="text-sm text-muted-foreground">3rd Year - Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">03:30 PM - 05:00 PM</p>
                  <p className="text-sm text-muted-foreground">Room 205</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <h2 className="text-2xl font-bold mb-4">Pending Tasks</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Submit Mid-term Marks</p>
                  <p className="text-sm text-muted-foreground">For CS301 - Data Structures</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-red-500">Due: Tomorrow</p>
                  <Link href="/faculty/marks/add">
                    <Button size="sm" variant="outline">
                      Complete
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Review Project Proposals</p>
                  <p className="text-sm text-muted-foreground">Final Year Projects</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-amber-500">Due: In 3 days</p>
                  <Link href="/faculty/projects">
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Update Course Materials</p>
                  <p className="text-sm text-muted-foreground">For CS305 - Database Management</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-amber-500">Due: In 5 days</p>
                  <Link href="/faculty/courses">
                    <Button size="sm" variant="outline">
                      Update
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Prepare Workshop Materials</p>
                  <p className="text-sm text-muted-foreground">Web Development Workshop</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-amber-500">Due: In 7 days</p>
                  <Link href="/faculty/workshops">
                    <Button size="sm" variant="outline">
                      Prepare
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Update Professional Profile</p>
                  <p className="text-sm text-muted-foreground">Add recent publications</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-500">Due: In 10 days</p>
                  <Link href="/faculty/profile/professional">
                    <Button size="sm" variant="outline">
                      Update
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  )
}
