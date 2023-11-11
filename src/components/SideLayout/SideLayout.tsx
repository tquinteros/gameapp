import React from "react";
import { WorkLinks } from "@/data/navLinks";
import Link from "next/link";

const SideLayout = () => {
    return (
        <div className="max-h-screen test rounded-md z-30 p-2 md:p-4 xl:p-8 col-span-12 md:col-span-3 xl:col-span-2 sticky top-0">
            <div className="flex flex-col gap-4 mb-8">
                <Link href="/app" className="text-xl hover:opacity-75 duration-300 flex hover:underline items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#E8EAF6" d="M42 39H6V23L24 6l18 17z" /><path fill="#C5CAE9" d="m39 21l-5-5V9h5zM6 39h36v5H6z" /><path fill="#B71C1C" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z" /><path fill="#D84315" d="M18 28h12v16H18z" /><path fill="#01579B" d="M21 17h6v6h-6z" /><path fill="#FF8A65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z" /></svg>
                    Home</Link>
                <Link href="/app/shop" className="text-xl hover:opacity-75 duration-300 flex hover:underline items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><g fill="none"><path fill="#F3AD61" d="M3 12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.3l3.559 11.862A3 3 0 0 0 9.732 30h12.536a3 3 0 0 0 2.873-2.138L28.7 16h.3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H11l-1-.5l-1 .5H3Z"/><path fill="#D3883E" d="m3.678 16l-.29.29l.326 1.088l1.296-1.297l1.415 1.415L5.01 18.91l-1.196-1.197l.879 2.929l.317-.318l1.415 1.414l-1.08 1.08l.893 2.977l.187.186l-.1.1l.326 1.088l.48-.48l1.415 1.413l-.977.977c.236.245.51.448.814.6l.87-.87L10.443 30h1.862l1.19-1.19L14.687 30h1.862l1.19-1.19L18.93 30h1.861l1.191-1.19l1.083 1.083c.346-.096.67-.252.957-.458l-1.333-1.333l1.414-1.414l1.061 1.06l.018-.017l.318-1.06l-.69-.69l1.28-1.28l.607-2.02l-.472.471l-1.415-1.414l1.415-1.414l.907.907l.326-1.088l-.526-.526l.977-.977l.606-2.02l-.169.169l-.789-.789h-2.665l-.789.789l-.788-.789h-2.666l-.788.789L19.07 16h-2.665l-.789.789l-.789-.789h-2.665l-.789.789l-.788-.789H7.92l-.788.789L6.343 16H3.678Zm2.04 3.617l1.414-1.414l1.414 1.414l-1.414 1.414l-1.414-1.414Zm2.12 2.121l1.415-1.414l1.414 1.414l-1.414 1.415l-1.414-1.415Zm2.122-2.121l1.414-1.414l1.415 1.414l-1.415 1.414l-1.414-1.414Zm0 4.243l1.414-1.415l1.415 1.415l-1.415 1.414L9.96 23.86Zm4.95-2.122l-1.414 1.415l-1.414-1.415l1.414-1.414l1.414 1.414Zm-2.829 4.243l1.415-1.414l1.414 1.414l-1.414 1.414l-1.415-1.414Zm2.122-2.121l1.414-1.415l1.414 1.415l-1.414 1.414l-1.414-1.414Zm0 4.242l1.414-1.414l1.414 1.414l-1.414 1.415l-1.414-1.415Zm5.657 1.415l-1.415-1.415l1.415-1.414l1.414 1.414l-1.414 1.415Zm-3.536-3.536l1.414-1.414l1.415 1.414l-1.415 1.414l-1.414-1.414Zm5.657 1.414l-1.414-1.414l1.414-1.414l1.414 1.414l-1.414 1.414Zm2.121-2.121l-1.414-1.414l1.414-1.415l1.415 1.415l-1.415 1.414Zm-2.12-2.121l-1.415-1.415l1.414-1.414l1.414 1.414l-1.414 1.415Zm3.535-3.536l-1.415 1.414l-1.414-1.414l1.414-1.414l1.415 1.414Zm-2.122-2.121l-1.414 1.414l-1.414-1.414l1.414-1.415l1.414 1.415Zm-5.657-1.415l1.415 1.415l-1.415 1.414l-1.414-1.414l1.414-1.415Zm2.122 2.122l1.414 1.414l-1.414 1.414l-1.415-1.414l1.415-1.414Zm-4.243 0l1.414 1.414l-1.414 1.414l-1.414-1.414l1.414-1.414Zm2.121 2.121l1.415 1.414l-1.415 1.415l-1.414-1.415l1.414-1.414Zm2.122 4.95l-1.415-1.414l1.415-1.415l1.414 1.415l-1.414 1.414Zm7.778-7.778l-1.414 1.414l-1.415-1.414l1.415-1.415l1.414 1.415Zm-16.264 9.192l1.415 1.414l-1.415 1.415l-1.414-1.415l1.414-1.414Zm3.536-9.192l-1.414 1.414l-1.414-1.414l1.414-1.415l1.414 1.415Zm-4.243 8.485l-1.414 1.414l-1.414-1.414l1.414-1.414l1.414 1.414ZM8.546 23.86l-1.414 1.414l-1.414-1.414l1.414-1.415l1.414 1.415Zm.707-4.95L7.84 17.496l1.414-1.415l1.414 1.415l-1.414 1.414Z"/><path fill="#E19747" d="M13 2c-2.5 0-4 2-4 4v6h2V6c0-2.5 1.5-3 3-3h4c1.5 0 3 .5 3 3v8a1 1 0 1 0 2 0V6c0-2-1.5-4-4-4h-6Z"/></g></svg>
                    Shop</Link>
                <Link href="/app/inventory" className="text-xl hover:opacity-75 duration-300 flex hover:underline items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 90 100"><path fill="#C0392C" d="M0 94a6 6 0 0 0 6 6h78a6 6 0 0 0 6-6V75H0v19zM69 0h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H69a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM10 0h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" /><path fill="#AC3327" d="M12 20h2V0h-2v20zm5-20v20h2V0h-2zm54 20h2V0h-2v20zm5-20v20h2V0h-2z" /><path fill="#E67E21" d="M51 5v5h5l-5-5zm-12 5V5l-5 5h5z" /><path fill="#D35400" d="M44.938 4c2.681 0 4.841.752 6.039 1.879L51 5.5C51 3.017 48.527 1 44.938 1C41.35 1 39 3.017 39 5.5l.039.328C40.21 4.729 42.299 4 44.938 4z" /><path fill="#F39C12" d="M20 10h50c11.046 0 20 8.955 20 20v45H0V30c0-11.044 8.954-20 20-20z" /><path fill="#D35400" d="m54.561 31.939l-8.498-8.5a1.504 1.504 0 0 0-2.125 0l-8.498 8.5a1.502 1.502 0 0 0 0 2.123l8.498 8.498a1.5 1.5 0 0 0 2.125 0l8.498-8.498a1.503 1.503 0 0 0 0-2.123zM44 34.5a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0v3zm5 0a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0v3z" /><path fill="#E67E21" d="M76 58a4 4 0 0 0-4-4H18a4 4 0 0 0-4 4v6h2v18a4 4 0 0 0 4 4h50a4 4 0 0 0 4-4V64h2v-6z" /><path fill="#CF7120" d="M74 66v-2H16v2h8.312v3.625a2 2 0 0 0 3.662 1.111A1.984 1.984 0 0 1 27 71a2 2 0 0 1-2-2v-3h49z" /><path fill="#EBEDEE" d="M25 64v5a2 2 0 0 0 4 0v-5h-4zm2 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2z" /><path fill="#F4A629" d="M70 10H20C8.954 10 0 18.956 0 30v3c0-11.045 8.954-20 20-20h50c11.046 0 20 8.955 20 20v-3c0-11.044-8.954-20-20-20z" /><path fill="#D3D5D6" d="M25 64h4v2h-4z" /><path fill="#CF7120" d="M27 68a.99.99 0 0 0-.934.676l.247-.051c.552 0 1 .449 1 1c0 .115-.03.223-.065.326A.988.988 0 0 0 28 69c0-.551-.448-1-1-1z" /><path fill="#BA651C" d="M24.312 64H25v2h-.688z" /><path fill="#AC3327" d="M84 97H6a6 6 0 0 1-6-6v3a6 6 0 0 0 6 6h78a6 6 0 0 0 6-6v-3a6 6 0 0 1-6 6zM70 86H20a4 4 0 0 1-4-4v2a4 4 0 0 0 4 4h50a4 4 0 0 0 4-4v-2a4 4 0 0 1-4 4z" /></svg>
                    Inventory</Link>
            </div>
            <div className="flex flex-col">
                {
                    WorkLinks.map((link, index) => {
                        return (
                            <Link className="w-fit text-xl hover:opacity-75 duration-300" key={index} href={link.href}>{link.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideLayout;