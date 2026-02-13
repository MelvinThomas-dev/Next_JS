'use client';

import { useState } from "react";

export default function Client() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const greet = () => {
        alert(`Hello ${name}! Your password is ${password}`);
        setName("");
        setPassword("");
    }

    // In Client Side Component we can use react hooks like useState, useEffect, useContext etc
    //'use client' is a directive that tells Next.js that this component should be rendered on the client side. 
    // This is necessary because we are using React hooks in this component, which are not supported in server components.

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
            <h1 className="text-3xl font-bold mb-4">This is a Client Side Component</h1>
            <p className="mb-8">
                HELLO FROM CLIENT RENDERING.
            </p>


            <h2 className="text-2xl font-bold mb-4">Get Login Details</h2>
            <form className="flex flex-col gap-4 w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded"
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={(e)=>{greet()}}
                >
                    Login
                </button>
            </form>



        </div>
    );
}