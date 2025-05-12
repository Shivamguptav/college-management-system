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

// Sample events data
const initialEvents = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "2023-11-15",
    time: "09:00 AM",
    venue: "Main Auditorium",
    organizer: "Computer Science Department",
    type: "Academic",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Cultural Fest",
    date: "2023-12-05",
    time: "10:00 AM",
    venue: "College Grounds",
    organizer: "Student Council",
    type: "Cultural",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Workshop on AI",
    date: "2023-10-20",
    time: "02:00 PM",
    venue: "Seminar Hall",
    organizer: "AI Club",
    type: "Workshop",
    status: "Completed",
  },
  {
    id: 4,
    title: "Sports Meet",
    date: "2023-09-15",
    time: "08:00 AM",
    venue: "Sports Complex",
    organizer: "Physical Education Department",
    type: "Sports",
    status: "Completed",
  },
  {
    id: 5,
    title: "Industry Expert Talk",
    date: "2023-11-25",
    time: "11:00 AM",
    venue: "Conference Hall",
    organizer: "Placement Cell",
    type: "Career",
    status: "Upcoming",
  },
]

export default function EventsPage() {
  const [events, setEvents] = useState(initialEvents)
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  // Filter events based on search term and filters
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = typeFilter === "" || event.type === typeFilter
    const matchesStatus = statusFilter === "" || event.status === statusFilter

    return matchesSearch && matchesType && matchesStatus
  })

  const handleDeleteEvent = (id: number) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== id))
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
          <h1 className="text-3xl font-bold">Manage Events</h1>
          <Link href="/admin/events/add">
            <Button>Add New Event</Button>
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
                  placeholder="Search by title, organizer, or venue"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Academic">Academic</SelectItem>
                    <SelectItem value="Cultural">Cultural</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Career">Career</SelectItem>
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
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Organizer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>{event.title}</TableCell>
                      <TableCell>{event.date}</TableCell>
                      <TableCell>{event.time}</TableCell>
                      <TableCell>{event.venue}</TableCell>
                      <TableCell>{event.organizer}</TableCell>
                      <TableCell>{event.type}</TableCell>
                      <TableCell>{getStatusBadge(event.status)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Link href={`/admin/events/${event.id}`}>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </Link>
                          <Link href={`/admin/events/edit/${event.id}`}>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteEvent(event.id)}>
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-4">
                      No events found matching the criteria
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
