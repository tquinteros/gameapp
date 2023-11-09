"use client"
import Image from "next/image";
import React, { useState } from "react";
import { addExperience, addLevel, addExperienceSkill, addLevelSkill, addGold } from "@/redux/features/auth";
import { miningLevels } from "@/data/levels";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { levels } from '@/data/levels';

type Mineral = {
    name: string;
    materialImg: string;
    itemImg: string;
    experience: number;
    delay: number;
    levelRequired: number;
    percentageGold: number;
}

const MineralCard = ({ mineral }: { mineral: Mineral }) => {


    const dispatch = useDispatch();
    const username = useAppSelector((state) => state.authReducer.value);
    const [progress, setProgress] = useState(0);

    const findUserSkill = (skillName: string) => {
        return username.skillsLevels.find(skill => skill.name === skillName);
    };

    const convertMsToSeconds = (ms: number) => {
        return ms / 1000;
    }

    const handleAddMiningExperience = (experience: number, delay: number) => {
        const miningSkill = findUserSkill("Mining");
        const currentLevelThreshold = levels[username.level].experience;
        if (!miningSkill) {
            return;
        }

        const currentMiningLevel = miningSkill.level;
        const currentMiningExperience = miningSkill.experience;
        const currentMiningLevelThreshold = miningLevels[currentMiningLevel - 1].experience;

        if (currentMiningExperience + experience >= currentMiningLevelThreshold) {
            let currentProgress = 0;
            const interval = setInterval(() => {
                currentProgress += 1;
                setProgress(currentProgress);
                if (currentProgress >= 100) {
                    clearInterval(interval);
                    dispatch(addLevelSkill({ skillName: "Mining", level: 1 }));
                    dispatch(addExperienceSkill({ skillName: "Mining", experience: currentMiningExperience + experience - currentMiningLevelThreshold }));
                    dispatch(addExperienceSkill({ skillName: "Mining", experience: -currentMiningExperience }));
                    // toast.success(`You have leveled up your Mining skill to level ${currentMiningLevel + 1}!`, {
                    //     icon: "⛏",
                    //     autoClose: 2000,
                    // });
                    if (username.experience + 1 >= currentLevelThreshold) {
                        dispatch(addLevel(1));
                        dispatch(addExperience(-username.experience));
                    } else {
                        dispatch(addExperience(1));
                    }
                    setProgress(0);
                }
            }, delay / 100);
        } else {
            let currentProgress = 0;
            const interval = setInterval(() => {
                currentProgress += 1;
                setProgress(currentProgress);
                if (currentProgress >= 100) {
                    clearInterval(interval);
                    dispatch(addExperienceSkill({ skillName: "Mining", experience: experience }));
                    if (username.experience + 1 >= currentLevelThreshold) {
                        dispatch(addLevel(1));
                        dispatch(addExperience(-username.experience));
                    } else {
                        dispatch(addExperience(1));
                    }
                    toast.success(`+${experience}XP`, {
                        icon: "⛏",
                        autoClose: 1000,
                    });
                    const randomValue = Math.random();
                    if (randomValue <= mineral.percentageGold) {
                        dispatch(addGold(1));
                    }
                    setProgress(0);
                }
            }, delay / 100);
        }
    };

    return (
        <div className="col-span-12 bg-[#3c3f50] rounded-lg md:col-span-6 lg:col-span-4 xl:col-span-3 p-4 flex flex-col gap-3">
            <div className="flex justify-center">
                <Image src={mineral.materialImg} alt={mineral.name} width={125} className="" height={125} />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-center">{mineral.name}</h3>
                <span className="flex items-center gap-0.5 justify-center">{mineral.experience} XP / {
                    convertMsToSeconds(mineral.delay)
                } <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z" /></svg>second{mineral.delay > 1000 ? "s" : ""}</span>
                <span className="text-center">{mineral.percentageGold * 100}% chance to find 1 gold</span>
            </div>
            <div className="h-4 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-green-700/100" style={{ width: `${progress}%` }}></div>
            </div>
            <button
                disabled={progress > 0}
                className={`w-full py-2 test text-white rounded ${progress > 0 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleAddMiningExperience(mineral.experience, mineral.delay)}>Mine
            </button>
        </div>
    )
}

export default MineralCard;