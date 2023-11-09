import React from "react";
import { WorkLinks } from "@/data/navLinks";
import Link from "next/link";

const SideLayout = () => {
    return (
        <div className="max-h-screen p-2 md:p-4 xl:p-8 border border-red-500 col-span-12 md:col-span-3 xl:col-span-2 sticky top-0">
            <Link href="/app" className="text-xl hover:opacity-75 duration-300 flex hover:underline items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#E8EAF6" d="M42 39H6V23L24 6l18 17z" /><path fill="#C5CAE9" d="m39 21l-5-5V9h5zM6 39h36v5H6z" /><path fill="#B71C1C" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z" /><path fill="#D84315" d="M18 28h12v16H18z" /><path fill="#01579B" d="M21 17h6v6h-6z" /><path fill="#FF8A65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z" /></svg>
                Home</Link>
            <div className="flex flex-col">
                {
                    WorkLinks.map((link, index) => {
                        return (
                            <Link className="w-fit" key={index} href={link.href}>{link.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideLayout;