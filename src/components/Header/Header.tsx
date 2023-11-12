"use client"

import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'
import { useAppSelector } from '@/redux/store'
import { logOut, addExperience, addLevel, addGold } from '@/redux/features/auth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { levels } from '@/data/levels';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { RefObject } from "react";

interface ProgressBarProps {
    progress: number;
    max?: number;
}

export const ProgressBar = ({ progress, max }: ProgressBarProps) => {
    return (
        <div className="w-full h-6 bg-gray-700 rounded-md">
            <div
                className="h-full bg-green-700/100 rounded-md"
                style={{ width: `${progress}%`, maxWidth: `${max}%`, }}
            ></div>
        </div>
    );
};

export const Header = () => {
    const router = useRouter();
    const username = useAppSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef: RefObject<HTMLDivElement> = useRef(null);

    const handleLogOut = () => {
        dispatch(logOut());
        router.push("/");
    };

    const handleAddExperience = () => {
        const currentLevelThreshold = levels[username.level].experience;
        if (username.experience + 1 >= currentLevelThreshold) {
            dispatch(addLevel(1));
            dispatch(addExperience(-username.experience));
        } else {
            dispatch(addExperience(1));
        }
    };

    const experienceNextLevel = levels[username.level].experience;

    const currentLevelThreshold = levels[username.level].experience;
    const progress =
        username.experience >= currentLevelThreshold
            ? 100
            : (username.experience / currentLevelThreshold) * 100;

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    return (
        <header className="py-4 px-4">
            <nav className="hidden lg:grid grid-cols-12">
                <h3 className="text-4xl col-span-1">DESKTOP</h3>
                <div className="flex justify-center 2xl:col-span-9 col-span-8 gap-6 items-center">
                    <h3 className=''>Level {username.level}</h3>
                    <div className='relative w-[50%]'>
                        <ProgressBar progress={progress} />
                        <span className='absolute top-0 left-1/2 -translate-x-1/2'>{username.experience}/{experienceNextLevel}</span>
                    </div>
                    <Link href="/app/shop" className="">🟡 {username.gold}</Link>
                </div>
                <ul className="flex items-center justify-end 2xl:col-span-2 col-span-3 gap-8">
                    {navLinks.map((navLink) => (
                        <li key={navLink.name}>
                            <Link href={navLink.href}>{navLink.name}</Link>
                        </li>
                    ))}
                    <li className="cursor-pointer">
                        <button onClick={handleLogOut}>Log Out</button>
                    </li>
                    <li className="cursor-pointer">
                        <button onClick={handleAddExperience}>ADD EXP</button>
                    </li>
                </ul>
            </nav>


            {/* MOBILE */}
            <nav ref={navRef} className="flex justify-between items-center relative lg:hidden">
                <h3 className="text-4xl">AAAA</h3>
                <Link href="/app/shop" className="cursor-pointer mt-2">🟡 {username.gold}</Link>
                {
                    isMenuOpen ? (
                        <div className='flex justify-end items-center'>
                            <AiOutlineClose onClick={handleToggleMenu} className="cursor-pointer" size={32} />
                        </div>
                    ) : (
                        <div className='flex justify-end items-center'>
                            <AiOutlineMenu onClick={handleToggleMenu} className="cursor-pointer" size={32} />
                        </div>
                    )
                }
                {
                    isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col h-fit p-4 rounded-md w-64 bg-black z-[9999] absolute top-16 -right-2 gap-4">
                            {navLinks.map((navLink) => (
                                <span key={navLink.name}>
                                    <Link href={navLink.href}>{navLink.name}</Link>
                                </span>
                            ))}
                            <span className="cursor-pointer">
                                <button onClick={handleLogOut}>Log Out</button>
                            </span>
                            <span className="cursor-pointer">
                                <button onClick={handleAddExperience}>ADD EXP</button>
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className='text-center'>Level {username.level}</h3>
                                <div className='relative w-full'>
                                    <ProgressBar progress={progress} />
                                    <span className='absolute top-0 left-1/2 -translate-x-1/2'>{username.experience}/{experienceNextLevel}</span>
                                </div>
                            </div>
                        </motion.div>
                    )
                }

            </nav>
        </header>
    );
};

export default Header;