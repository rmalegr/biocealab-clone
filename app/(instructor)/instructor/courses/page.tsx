
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"

//Pagina de Instructor de curso 
const CoursesPage = async () => {
  const { userId } = auth()
  if (!userId) {
    return redirect('/sign-in')
  }

  const courses = await db.course.findMany({
    where: {
      instructorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  })


  return (
    <div className="px-6 py-6">
      <Link href={"/instructor/create-course"}>
        <Button>Create New Curse</Button>
      </Link>
      <div className="mt-5">

      </div>
    </div>
  )
}

export default CoursesPage