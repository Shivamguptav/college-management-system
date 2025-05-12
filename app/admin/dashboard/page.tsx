"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AdminLayout from "@/components/admin-layout"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalStudents: 1250,
    totalFaculty: 85,
    upcomingEvents: 12,
    placementCompanies: 28,
  })

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalStudents}</div>
              <p className="text-xs text-muted-foreground mt-1">Enrolled in various programs</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Faculty Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalFaculty}</div>
              <p className="text-xs text-muted-foreground mt-1">Across all departments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.upcomingEvents}</div>
              <p className="text-xs text-muted-foreground mt-1">Scheduled in next 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Placement Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.placementCompanies}</div>
              <p className="text-xs text-muted-foreground mt-1">Registered for campus recruitment</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Student Management</CardTitle>
              <CardDescription>Add, view, or manage student records</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/admin/students">
                <Button className="w-full">View All Students</Button>
              </Link>
              <Link href="/admin/students/add">
                <Button variant="outline" className="w-full">
                  Add New Student
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Faculty Management</CardTitle>
              <CardDescription>Add, view, or manage faculty records</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/admin/faculty">
                <Button className="w-full">View All Faculty</Button>
              </Link>
              <Link href="/admin/faculty/add">
                <Button variant="outline" className="w-full">
                  Add New Faculty
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Management</CardTitle>
              <CardDescription>Create and manage college events</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/admin/events">
                <Button className="w-full">View All Events</Button>
              </Link>
              <Link href="/admin/events/add">
                <Button variant="outline" className="w-full">
                  Add New Event
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Placement Management</CardTitle>
              <CardDescription>Manage placement companies and activities</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/admin/placements">
                <Button className="w-full">View All Companies</Button>
              </Link>
              <Link href="/admin/placements/add">
                <Button variant="outline" className="w-full">
                  Add New Company
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view various reports</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/admin/reports/students">
                <Button className="w-full">Student Reports</Button>
              </Link>
              <Link href="/admin/reports/placements">
                <Button variant="outline" className="w-full">
                  Placement Reports
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure system settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Link href="/admin/settings">
                <Button className="w-full">General Settings</Button>
              </Link>
              <Link href="/admin/users">
                <Button variant="outline" className="w-full">
                  User Management
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <Card>
          <CardHeader>
            <CardTitle>System Logs</CardTitle>
            <CardDescription>Recent actions performed in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <p className="font-medium">New student added</p>
                <p className="text-sm text-muted-foreground">
                  Admin user added John Doe to Computer Science department
                </p>
                <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Event updated</p>
                <p className="text-sm text-muted-foreground">Annual Tech Symposium date changed to November 15, 2023</p>
                <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">New company registered</p>
                <p className="text-sm text-muted-foreground">
                  TechCorp added to placement portal for campus recruitment
                </p>
                <p className="text-xs text-muted-foreground">May 8, 2023, 11:20 AM</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Faculty profile updated</p>
                <p className="text-sm text-muted-foreground">Dr. Sarah Johnson updated professional qualifications</p>
                <p className="text-xs text-muted-foreground">May 7, 2023, 2:15 PM</p>
              </div>
              <div>
                <p className="font-medium">System maintenance</p>
                <p className="text-sm text-muted-foreground">Database backup and system update performed</p>
                <p className="text-xs text-muted-foreground">May 5, 2023, 9:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
