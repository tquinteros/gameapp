"use client"
import Image from "next/image";
import React, { useState } from "react";
import { addExperience, addLevel, addExperienceSkill, addLevelSkill, addGold, addItemToInventory } from "@/redux/features/auth";
import { miningLevels } from "@/data/levels";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { levels } from '@/data/levels';
import { toggleFlag } from "@/redux/features/flag";
import { MineralProps } from "@/types/types";
import { items } from "@/data/items/items";

const MineralCard = ({ mineral }: { mineral: MineralProps }) => {


    const dispatch = useDispatch();
    const [isWorking, setIsWorking] = useState(false);
    const user = useAppSelector((state) => state.authReducer.value);
    const flagValue = useAppSelector((state) => state.flagReducer.enabled);

    const [progress, setProgress] = useState(0);

    const findUserSkill = (skillName: string) => {
        return user.skillsLevels.find(skill => skill.name === skillName) || { level: 0, experience: 0 };
    };

    const convertMsToSeconds = (ms: number) => {
        return ms / 1000;
    }

    const handleAddMiningExperience = (experience: number, delay: number) => {
        const givenItem = items.find(item => item.type === mineral.type);
        const miningSkill = findUserSkill("Mining");
        const currentLevelThreshold = levels[user.level].experience;
        if (!miningSkill) {
            return;
        }

        if (miningSkill.level < mineral.levelRequired) {
            toast.error(`You need to be at least level ${mineral.levelRequired} to mine this mineral!`, {
                icon: "⛏",
                autoClose: 2000,
            });
            return;
        }

        if (!user.inventory.some((item) => item.category === "pickaxe" && item.tier && item.tier >= mineral.requiredTier)) {
            toast.error(`You need a tier ${mineral.requiredTier} pickaxe to mine this mineral!`, {
                icon: "⛏",
                autoClose: 2000,
            });
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
                    if (user.experience + 1 >= currentLevelThreshold) {
                        dispatch(addLevel(1));
                        dispatch(addExperience(-user.experience));
                    } else {
                        dispatch(addExperience(1));
                    }
                    setProgress(0);
                    if (!givenItem) {
                        console.error("No item found for the given type.");
                        return;
                    }
                    dispatch(addItemToInventory({ item: givenItem, quantity: 1 }));
                    toast.success(`+1 ${givenItem.name}`, {
                        position: "bottom-center",
                        icon: () => <Image src={givenItem.image} width={25} height={25} alt={givenItem.name} />
                    });
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
                    if (user.experience + 1 >= currentLevelThreshold) {
                        dispatch(addLevel(1));
                        dispatch(addExperience(-user.experience));
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
                    if (!givenItem) {
                        console.error("No item found for the given type.");
                        return;
                    }
                    dispatch(addItemToInventory({ item: givenItem, quantity: 1 }));
                    toast.success(`+1 ${givenItem.name}`, {
                        position: "bottom-center",
                        icon: () => <Image src={givenItem.image} width={25} height={25} alt={givenItem.name} />
                    });
                }
            }, delay / 100);

        }
    };

    return (
        <div className="col-span-12 relative bg-[#3c3f50] rounded-lg md:col-span-6 lg:col-span-4 xl:col-span-3 p-4 flex flex-col gap-3">
            <div className="absolute top-2 left-2">
                {findUserSkill("Mining")?.level !== undefined ? (
                    findUserSkill("Mining")?.level < mineral.levelRequired ? (
                        <span className="absolute top-0 left-0 text-white w-48 text-center px-8 py-1.5 rounded-lg border-white border-2 bg-[#0000004D] backdrop-blur-2xl">Level {mineral.levelRequired} required</span>
                    ) : (
                        null
                    )
                ) : null}
            </div>
            <div className="flex justify-center">
                <Image src={mineral.materialImg} alt={mineral.name} width={150} className="aspect-square" height={150} />
            </div>
            <div className="flex flex-col gap-2">
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
                disabled={progress > 0 || flagValue}
                className={`w-full hover:opacity-75 duration-300 py-2 test text-white rounded ${progress > 0 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleAddMiningExperience(mineral.experience, mineral.delay)}>Mine
            </button>
        </div>
    )
}

export default MineralCard;