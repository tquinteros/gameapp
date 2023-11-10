import React from "react";
import { WorkLinks } from "@/data/navLinks";
import Link from "next/link";

const SideLayout = () => {
    return (
        <div className="max-h-screen test rounded-md p-2 md:p-4 xl:p-8 col-span-12 md:col-span-3 xl:col-span-2 sticky top-0">
            <div className="flex flex-col gap-4 mb-8">
                <Link href="/app" className="text-xl hover:opacity-75 duration-300 flex hover:underline items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#E8EAF6" d="M42 39H6V23L24 6l18 17z" /><path fill="#C5CAE9" d="m39 21l-5-5V9h5zM6 39h36v5H6z" /><path fill="#B71C1C" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z" /><path fill="#D84315" d="M18 28h12v16H18z" /><path fill="#01579B" d="M21 17h6v6h-6z" /><path fill="#FF8A65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z" /></svg>
                    Home</Link>
                <Link href="/app/inventory" className="text-xl hover:opacity-75 duration-300 flex hover:underline items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 90 100"><path fill="#C0392C" d="M0 94a6 6 0 0 0 6 6h78a6 6 0 0 0 6-6V75H0v19zM69 0h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H69a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM10 0h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" /><path fill="#AC3327" d="M12 20h2V0h-2v20zm5-20v20h2V0h-2zm54 20h2V0h-2v20zm5-20v20h2V0h-2z" /><path fill="#E67E21" d="M51 5v5h5l-5-5zm-12 5V5l-5 5h5z" /><path fill="#D35400" d="M44.938 4c2.681 0 4.841.752 6.039 1.879L51 5.5C51 3.017 48.527 1 44.938 1C41.35 1 39 3.017 39 5.5l.039.328C40.21 4.729 42.299 4 44.938 4z" /><path fill="#F39C12" d="M20 10h50c11.046 0 20 8.955 20 20v45H0V30c0-11.044 8.954-20 20-20z" /><path fill="#D35400" d="m54.561 31.939l-8.498-8.5a1.504 1.504 0 0 0-2.125 0l-8.498 8.5a1.502 1.502 0 0 0 0 2.123l8.498 8.498a1.5 1.5 0 0 0 2.125 0l8.498-8.498a1.503 1.503 0 0 0 0-2.123zM44 34.5a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0v3zm5 0a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0v3z" /><path fill="#E67E21" d="M76 58a4 4 0 0 0-4-4H18a4 4 0 0 0-4 4v6h2v18a4 4 0 0 0 4 4h50a4 4 0 0 0 4-4V64h2v-6z" /><path fill="#CF7120" d="M74 66v-2H16v2h8.312v3.625a2 2 0 0 0 3.662 1.111A1.984 1.984 0 0 1 27 71a2 2 0 0 1-2-2v-3h49z" /><path fill="#EBEDEE" d="M25 64v5a2 2 0 0 0 4 0v-5h-4zm2 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2z" /><path fill="#F4A629" d="M70 10H20C8.954 10 0 18.956 0 30v3c0-11.045 8.954-20 20-20h50c11.046 0 20 8.955 20 20v-3c0-11.044-8.954-20-20-20z" /><path fill="#D3D5D6" d="M25 64h4v2h-4z" /><path fill="#CF7120" d="M27 68a.99.99 0 0 0-.934.676l.247-.051c.552 0 1 .449 1 1c0 .115-.03.223-.065.326A.988.988 0 0 0 28 69c0-.551-.448-1-1-1z" /><path fill="#BA651C" d="M24.312 64H25v2h-.688z" /><path fill="#AC3327" d="M84 97H6a6 6 0 0 1-6-6v3a6 6 0 0 0 6 6h78a6 6 0 0 0 6-6v-3a6 6 0 0 1-6 6zM70 86H20a4 4 0 0 1-4-4v2a4 4 0 0 0 4 4h50a4 4 0 0 0 4-4v-2a4 4 0 0 1-4 4z" /></svg>
                    Inventory</Link>
            </div>
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