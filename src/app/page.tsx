import { Button } from '@/components/ui/button'
import Image from 'next/image'

// run once on the server to generate the HTML code, so this is a server component
export default async function Home() {
  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          hi

         </div>
      </div>
    
    </>
  )
}
