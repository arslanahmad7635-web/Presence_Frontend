import { Users, UserCheck, UserX, Clock } from "lucide-react";

export const kpiData = [
  { title: "Total Enrolled", value: "2,450", icon: Users, color: "text-cyan-400", bgColor: "bg-cyan-400/10", borderColor: "border-cyan-400/20", trend: "+12 this week" },
  { title: "Present Today", value: "1,840", subValue: "75%", icon: UserCheck, color: "text-emerald-400", bgColor: "bg-emerald-400/10", borderColor: "border-emerald-400/20", trend: "vs 72% yesterday" },
  { title: "Absent / Late", value: "610 / 120", icon: UserX, color: "text-rose-400", bgColor: "bg-rose-400/10", borderColor: "border-rose-400/20", trend: "15 unexcused" },
  { title: "Avg Recognition", value: "180 ms", icon: Clock, color: "text-blue-400", bgColor: "bg-blue-400/10", borderColor: "border-blue-400/20", trend: "P99: 210ms" },
];

export const weeklyAttendanceData = [
  { day: "Mon", present: 85, absent: 15 },
  { day: "Tue", present: 88, absent: 12 },
  { day: "Wed", present: 92, absent: 8 },
  { day: "Thu", present: 87, absent: 13 },
  { day: "Fri", present: 75, absent: 25 },
];

export const punctualityData = [
  { name: "On Time", value: 75, color: "#22d3ee" }, // cyan-400
  { name: "Late", value: 15, color: "#f59e0b" },    // amber-500
  { name: "Absent", value: 10, color: "#f43f5e" },   // rose-500
];

export const lowAttendanceStudents = [
  { id: "S-1029", name: "Alex Johnson", course: "CS101", percentage: 68 },
  { id: "S-2041", name: "Maria Garcia", course: "ENG202", percentage: 71 },
  { id: "S-3155", name: "David Smith", course: "MATH300", percentage: 73 },
];

export const initialLiveStream = [
  { id: 1, name: "Sarah Connor", studentId: "S-9912", matchScore: 98, time: "Just now", status: "pass" },
  { id: 2, name: "John Doe", studentId: "S-8821", matchScore: 95, time: "2 min ago", status: "pass" },
  { id: 3, name: "Unknown Face", studentId: "N/A", matchScore: 42, time: "5 min ago", status: "spoof" },
  { id: 4, name: "Emily Chen", studentId: "S-7734", matchScore: 99, time: "12 min ago", status: "pass" },
  { id: 5, name: "Michael Brown", studentId: "S-6645", matchScore: 91, time: "15 min ago", status: "pass" },
];