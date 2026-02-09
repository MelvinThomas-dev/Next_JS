'use client';
import { useRouter } from "next/navigation";

export default function Settings() {
    const router = useRouter();
    
    const back = () => {
        router.push("/Dashboard"); 
    }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>Settings Page</h1>
        <button className="bg-blue-500 rounded text-white px-4 py-2 rounded hover:bg-blue-600" onClick={back}>
            Go to Home page
        </button>
    </div>
  );
}
