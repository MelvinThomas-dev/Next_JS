'use client';
import { useRouter } from "next/navigation";

export default function Dashboard() {


 const router = useRouter();
    
    const back = () => {
        router.push("/"); 
    }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        
        
        <h1>Dashboard Page</h1>

    {/* Another way to navigate between pages in Next.js is to use the useRouter hook from next/router.
            It allows us to programmatically navigate between pages and also gives us access to the router
            object which contains information about the current route. */}
        <button className="bg-blue-500 rounded text-white px-4 py-2 rounded hover:bg-blue-600" onClick={back}>
            Go to Home page
        </button>








      </main>
    </div>
  );
}