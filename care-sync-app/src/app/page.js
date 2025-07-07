'use client'
import Image from "next/image";




import {
  Search,
  Bell,
  ChevronDown,
  MoreHorizontal,
  Eye,
  Calendar,
  Users,
  FileText,
  Stethoscope,
  Phone,
  CreditCard,
  Shield,
  FlaskConical,
  BarChart3,
  HelpCircle,
  Settings,
  Building2,
} from "lucide-react"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const sidebarItems = [
  { icon: Building2, label: "PulseCare Hospital", sublabel: "7th Avenue, USA", isHeader: true },
  { icon: BarChart3, label: "Dashboard" },
  {
    label: "Patient Management",
    isSection: true,
    items: [
      { icon: Calendar, label: "Appointments", active: true },
      { icon: Users, label: "Patients" },
      { icon: FileText, label: "Medical Records" },
      { icon: FileText, label: "Prescriptions" },
    ],
  },
  {
    label: "Staff Management",
    isSection: true,
    items: [
      { icon: Stethoscope, label: "Doctor & Staff" },
      { icon: Phone, label: "Telehealth" },
    ],
  },
  {
    label: "Finances & Billings",
    isSection: true,
    items: [
      { icon: CreditCard, label: "Billings & Payments" },
      { icon: Shield, label: "Insurance Claims" },
    ],
  },
  {
    label: "Laboratory Management",
    isSection: true,
    items: [
      { icon: FlaskConical, label: "Lab Reports" },
      { icon: BarChart3, label: "Reports" },
    ],
  },
  { icon: HelpCircle, label: "Contact & Support" },
  { icon: Settings, label: "Settings" },
]


const appointments = [
  {
    id: 1,
    patient: "JOHN DOE",
    doctor: "DR. SMITH",
    department: "CARDIOLOGY",
    date: "03/02/25",
    time: "6:30 PM",
    status: "UPCOMING",
  },
  {
    id: 2,
    patient: "LISA CARTER",
    doctor: "DR. EDWARDS",
    department: "DERMATOLOGY",
    date: "03/02/25",
    time: "5:00 PM",
    status: "COMPLETED",
  },
  {
    id: 3,
    patient: "SARAH LEE",
    doctor: "DR. CLARK",
    department: "ORTHOPEDICS",
    date: "03/02/25",
    time: "03:30 AM",
    status: "CANCELLED",
  },
  {
    id: 4,
    patient: "BRIAN DAVIS",
    doctor: "DR. SIMMONS",
    department: "NEUROLOGY",
    date: "03/02/25",
    time: "02:30 AM",
    status: "COMPLETED",
  },
  {
    id: 5,
    patient: "AMANDA WHITE",
    doctor: "DR. FISHER",
    department: "CARDIOLOGY",
    date: "03/02/25",
    time: "12:00 PM",
    status: "COMPLETED",
  },
  {
    id: 6,
    patient: "EMMA WILLIAMS",
    doctor: "DR. LANE",
    department: "NEUROLOGY",
    date: "03/02/25",
    time: "01:30 AM",
    status: "COMPLETED",
  },
  {
    id: 7,
    patient: "LIAM ANDERSON",
    doctor: "DR. FOX",
    department: "NEUROLOGY",
    date: "03/02/25",
    time: "11:30 AM",
    status: "CANCELLED",
  },
  {
    id: 8,
    patient: "DAVID JOHNSON",
    doctor: "DR. COOPER",
    department: "CARDIOLOGY",
    date: "03/02/25",
    time: "11:00 AM",
    status: "COMPLETED",
  },
  {
    id: 9,
    patient: "OLIVIA CHEN",
    doctor: "DR. MCCOY",
    department: "DERMATOLOGY",
    date: "03/02/25",
    time: "12:00 PM",
    status: "COMPLETED",
  },
  {
    id: 10,
    patient: "MICHAEL CHEN",
    doctor: "DR. WILLIAM",
    department: "DERMATOLOGY",
    date: "03/02/25",
    time: "10:30 AM",
    status: "COMPLETED",
  },
]

const getStatusBadge = (status) => {
  switch (status) {
    case "UPCOMING":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">UPCOMING</Badge>
    case "COMPLETED":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">COMPLETED</Badge>
    case "CANCELLED":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">CANCELLED</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function Home() {

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-semibold text-lg">MediSphere</span>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item, index) => {
              if (item.isHeader) {
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-4">
                    <Building2 className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.sublabel}</div>
                    </div>
                  </div>
                )
              }

              if (item.isSection) {
                return (
                  <div key={index} className="mb-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3">
                      {item.label}
                    </div>
                    {item.items?.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                          subItem.active
                            ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <subItem.icon className="w-4 h-4" />
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )
              }

              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-gray-500">{"<"}</span>
              <h1 className="text-xl font-semibold">Appointments</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search Here..."
                  className="pl-10 w-80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JJ</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-medium">Jacob Jones</div>
                  <div className="text-gray-500 text-xs">Super Admin</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="bg-purple-100 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-700">Today's Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">46</div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-100 border-yellow-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-yellow-700">Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-900">26</div>
              </CardContent>
            </Card>

            <Card className="bg-green-100 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-700">Completed Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">14</div>
              </CardContent>
            </Card>

            <Card className="bg-red-100 border-red-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-red-700">Cancelled Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-900">6</div>
              </CardContent>
            </Card>
          </div>

          {/* Appointments Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Appointments List</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Search Doctor, Patient, etc..." className="pl-10 w-64" />
                  </div>

                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="today">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Today" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>PATIENT NAME</TableHead>
                    <TableHead>DOCTOR</TableHead>
                    <TableHead>DEPARTMENT</TableHead>
                    <TableHead>APPOINTMENT DATE</TableHead>
                    <TableHead>APPOINTMENT TIME</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.id}</TableCell>
                      <TableCell className="font-medium">{appointment.patient}</TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>{appointment.department}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Cancel</DropdownMenuItem>
                              <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">Showing 1 to 10 of 46 entries</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                  <Button variant="ghost" size="sm">
                    2
                  </Button>
                  <Button variant="ghost" size="sm">
                    3
                  </Button>
                  <Button variant="ghost" size="sm">
                    4
                  </Button>
                  <Button variant="ghost" size="sm">
                    5
                  </Button>
                  <Button variant="ghost" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
