"use client"
import { BarChart, BarChart4, Icon, MonitorPlay } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Sidebar() {
  const pathname = usePathname();
  const sidebarRoutes = [
    {
      icon: <MonitorPlay />,
      label: "Courses",
      path: "/instructor/instructor/courses"
    },
    {
      icon: <BarChart4 />,
      label: "Perforance",
      path: "/instructor/perfomance"
    }
  ]
  return (
    <div className="max-sm:hidden flex flex-col w-64  border-r shadow-md px-3 my-4 gap-4 text-sm font-medium">
      {sidebarRoutes.map((route) => (
        <Link
          href={route.path}
          key={route.path}
          className={`flex items-center gap-4 p-3 rounded-lg hover:bg-[#FFF8EB]
          ${pathname.startsWith(route.path) && "bg-[#04fd3a] hover:bg-[#04fd3a]/80"}
          `}
        >
          {route.icon} {route.label}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar