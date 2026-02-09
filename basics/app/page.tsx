import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Learning Next JS</h1>



        {/* if we use like this then it will do a full page reload and we will lose the state of the application 
        and it will be slow because it will have to reload all the resources again.
        So we should use Link component from next/link to navigate between pages without reloading the page.*/}

        {/* <a className="text-blue-500 hover:underline" href="/Dashboard">Dashboard Page</a> <br /> 
        <a className="text-blue-500 hover:underline" href="/Dashboard/settings">Go to settings</a> */}

        
        {/* One way to navigate between pages in Next.js is to use the Link component from next/link.
        It allows us to navigate between pages without reloading the page and it also prefetches the page
        in the background for faster navigation. */}
        <Link className="text-blue-500 hover:underline" href="/Dashboard">Dashboard Page</Link> <br /> 
        <Link className="text-blue-500 hover:underline" href="/Dashboard/settings">Go to settings</Link>





      </main>
    </div>
  );
}
