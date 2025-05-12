"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import StudentLayout from "@/components/student-layout"

export default function StudentDashboard() {
  const [stats, setStats] = useState({
    attendance: 85,
    currentCGPA: 8.7,
    upcomingEvents: 3,
    pendingAssignments: 2,
  })

  return (
    <StudentLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{stats.attendance}%</div>
              <Progress value={stats.attendance} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">Minimum required: 75%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current CGPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{stats.currentCGPA}</div>
              <Progress value={stats.currentCGPA * 10} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">Out of 10.0</p>
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.pendingAssignments}</div>
              <p className="text-xs text-muted-foreground mt-1">Due this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic Records</CardTitle>
              <CardDescription>View your marks and attendance</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/student/marks">
                <Button className="w-full">View Marks</Button>
              </Link>
              <Link href="/student/attendance">
                <Button variant="outline" className="w-full">
                  View Attendance
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Events & Activities</CardTitle>
              <CardDescription>Explore college events</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/student/events">
                <Button className="w-full">View Events</Button>
              </Link>
              <Link href="/student/events/registered">
                <Button variant="outline" className="w-full">
                  My Registrations
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Career Opportunities</CardTitle>
              <CardDescription>Explore placements and internships</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/student/placements">
                <Button className="w-full">Placement Companies</Button>
              </Link>
              <Link href="/student/internships">
                <Button variant="outline" className="w-full">
                  Internship Opportunities
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
              <Link href="/student/profile">
                <Button className="w-full">View Profile</Button>
              </Link>
              <Link href="/student/profile/edit">
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Materials</CardTitle>
              <CardDescription>Access study materials</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/student/courses">
                <Button className="w-full">My Courses</Button>
              </Link>
              <Link href="/student/materials">
                <Button variant="outline" className="w-full">
                  Study Materials
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>View and submit assignments</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/student/assignments">
                <Button className="w-full">Pending Assignments</Button>
              </Link>
              <Link href="/student/assignments/submitted">
                <Button variant="outline" className="w-full">
                  Submitted Work
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
                  <p className="text-sm text-muted-foreground">Prof. Robert Smith</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">09:00 AM - 10:30 AM</p>
                  <p className="text-sm text-muted-foreground">Room 201</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Database Management (CS305)</p>
                  <p className="text-sm text-muted-foreground">Prof. Michael Davis</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">11:00 AM - 12:30 PM</p>
                  <p className="text-sm text-muted-foreground">Lab 102</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Lunch Break</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">12:30 PM - 01:30 PM</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Algorithm Design (CS302)</p>
                  <p className="text-sm text-muted-foreground">Prof. Emily Johnson</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">03:30 PM - 05:00 PM</p>
                  <p className="text-sm text-muted-foreground">Room 205</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Annual Tech Symposium</p>
                  <p className="text-sm text-muted-foreground">Technical event with workshops and competitions</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-500">Nov 15, 2023</p>
                  <Link href="/student/events/1">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Industry Expert Talk</p>
                  <p className="text-sm text-muted-foreground">Guest lecture by industry professionals</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-500">Nov 25, 2023</p>
                  <Link href="/student/events/5">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cultural Fest</p>
                  <p className="text-sm text-muted-foreground">Annual cultural celebration with performances</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-500">Dec 5, 2023</p>
                  <Link href="/student/events/2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  )
}
