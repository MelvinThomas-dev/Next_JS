import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <ul className="mb-8">
      <li className="text-xl font-bold">Client Side Rendering (or) Client Side Components</li>
      <br />
      <li className="text-xl font-bold">Server Side Rendering (or) Server Side Components</li>
      </ul>

      <p className="mb-8"><strong>Client side rendering</strong> means react components are rendered in the browser after the initial page load. &nbsp;
        All reacts components are client side components by default. &nbsp;
        why client side rendering? &nbsp;
        i can use hooks like useState, useEffect in client side components &nbsp;
        and also event handlers like onClick &nbsp; i can use in client side components &nbsp;
        main keyword "use client" at the top of the file to make a component a client side component &nbsp;
      </p>

      <p className="mb-8"><strong>Server side rendering</strong> means also react components are rendered from the server and show in the browser on each request. &nbsp;
      In Next.js 13, components are server side components by default.
        &nbsp;
        why server side rendering? &nbsp;
        1. Faster initial load time &nbsp;
        2. Better SEO &nbsp;
        3. Improved performance on low-end devices &nbsp;
      we can'it use hooks like useState, useEffect in server side components &nbsp;
      4. Reduced bundle size &nbsp;
      5. Enhanced security &nbsp;
      6. Simplified data fetching &nbsp;
        7. Improved developer experience &nbsp;
        we can't use event handlers like onClick in server side components &nbsp;
        react server componets are to run they use special data format that is react server components payload (RSC payload) &nbsp; 
      RSC= React Server Components Data + clinet side Js instructions &nbsp; server html code will run.
      
      
      
      
      </p>


    <table className="mt-8 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-blue-200 text-black">
          <th className="border border-gray-300 px-4 py-2 ">Feature</th>
          <th className="border border-gray-300 px-4 py-2">Client Side</th>
          <th className="border border-gray-300 px-4 py-2">Server Side</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Rendering</td>
          <td className="border border-gray-300 px-4 py-2">Browser</td>
          <td className="border border-gray-300 px-4 py-2">Server</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Performance</td>
          <td className="border border-gray-300 px-4 py-2">Slower initial load</td>
          <td className="border border-gray-300 px-4 py-2">Faster initial load</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">SEO</td>
          <td className="border border-gray-300 px-4 py-2">Poor</td>
          <td className="border border-gray-300 px-4 py-2">Good</td>
        </tr>
      </tbody>
    </table>
      </div>
  );
}
