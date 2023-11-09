"use client"

import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import React from 'react'
import { useAppSelector } from '@/redux/store'
import { logOut, addExperience, addLevel, addGold } from '@/redux/features/auth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { levels } from '@/data/levels';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div className="w-full h-6 bg-gray-700 rounded-md">
            <div
                className="h-full bg-green-700/100 rounded-md"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export const Header = () => {
    const router = useRouter();
    const username = useAppSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

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

    return (
        <header className="py-4 px-4">
            <nav className="grid grid-cols-12">
                <h3 className="text-4xl col-span-2">LOGO</h3>
                <ul className="flex items-center justify-center col-span-7 gap-8">
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
                <div className="flex col-span-3 gap-6 items-center">
                    <h3 className=''>Level {username.level}</h3>
                    <div className='relative w-[60%]'>
                        <ProgressBar progress={progress} />
                        <span className='absolute top-0 left-1/2 -translate-x-1/2'>{username.experience}/{experienceNextLevel}</span>
                    </div>
                    <span className="cursor-pointer">🟡 {username.gold}</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;