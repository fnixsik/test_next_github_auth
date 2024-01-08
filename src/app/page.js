import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Home = async() => {

  const session = await getServerSession(options)
  console.log(' Main session :', session, ' HERE !!! ')

  return ( 
    <main className=" bg-slate-200 max-h-screen">
      <div className="flex justify-between items-center w-full px-10 py-4">
        <Link href="/">Home Ulat</Link>
        <Link href="/api/auth/signin">Register</Link>
      </div>
    </main>
   );
}
 
export default Home;``