"use client"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
//iconos en lucide react
function Topbar() {
  const { isSignedIn } = useAuth();
  //routes
  const topRoutes = [
    { label: "Instructor", path: "/instructor/courses" },
    { label: "Learning", path: "/learning" }
  ]
  return (

    <div className="flex justify-between items-center p-4" >
      <Link href="/">
        <Image src="/logo.png" height={85} width={85} alt="logo" />
      </Link>
      <div className="max-md:hidden w-[400px] rounded-full flex">
        <input className="flex-grow bg-[#FFF8eb] rounded-l-full border-none outline-none text-sm pl-4 py-3" placeholder="Buscador de cursos" />
        <button className="bg-[#1cfff4] rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#6675ff66]">
          <Search className="h-4 w-4" />
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden gap-6">
          {
            topRoutes.map((route, index) => (
              <Link key={index} href={route.path} className="text-sm font-medium px-4 text-[#1c1e6e]">
                {route.label}
              </Link>
            ))
          }
        </div>

        {isSignedIn ?
          (<UserButton afterSignOutUrl="/sign-in" />) :
          (<Link href="/sign-in"><Button>Sign in</Button></Link>)}
      </div>
    </div>
  )
}

export default Topbar