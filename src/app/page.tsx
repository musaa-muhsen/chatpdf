import { Button } from '@/components/ui/button'
import { UserButton,auth } from '@clerk/nextjs'
import Link from 'next/link';
import Image from 'next/image';
import {LogIn} from 'lucide-react'
import FileUpload from '@/components/FileUpload';

// run once on the server to generate the HTML code, so this is a server component
export default async function Home() {
  const {userId} = await auth();
  const isAuth = !!userId;
  // console.log(isAuth)
  // console.log(!!false)
  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center text-center">
                <div className="flex item-center">
                  <h1 className="mr-3 text-4xl font-semibold">Chat with any PDF</h1>
                  <UserButton afterSignOutUrl='/' />
                </div>
                <div className="flex mt-2">
                  {isAuth && <Button>Go to Chats</Button>}
                </div>
                <p className='max-w-xl mt-1 text-lg text-slate-600'>
                Join millions of students, researchers and professionals to instantly
            answer questions and understand research with AI
                </p>
                <div className="w-full mt-4">
                   {isAuth ? (<FileUpload />): (
                      <Link href="/sign-in">
                        <Button>
                          Login to get Started!
                          <LogIn className="w-4 h-4 ml-2" />

                        </Button>
                      </Link>
                   ) }
                </div>
            </div>

         </div>
      </div>
    
    </>
  )
}
