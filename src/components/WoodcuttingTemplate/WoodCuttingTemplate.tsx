import { useAppSelector } from "@/redux/store";
import React from "react";
import { miningLevels } from "@/data/levels";
import { useDispatch } from "react-redux";
import WoodCuttingCard from "./WoodCuttingCard";
import { trees } from "@/data/trees";

const WoodCuttingTemplate = () => {
    const user = useAppSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    const findUserSkillLevel = (skillName: string) => {
        const skill = user.skillsLevels.find((skill) => skill.name === skillName);
        return skill ? skill.level : 0;
    };

    const findUserSkillExperience = (skillName: string) => {
        const skill = user.skillsLevels.find((skill) => skill.name === skillName);
        return skill ? skill.experience : 0;
    };

    const getRemainingExperience = (currentExperience: number, currentLevel: number) => {
        const currentLevelData = miningLevels[currentLevel - 1];
        if (currentLevelData) {
            return currentLevelData.experience - currentExperience;
        } else {
            return 0;
        }
    };

    const getExperienceNextLevel = (currentLevel: number) => {
        const currentLevelData = miningLevels[currentLevel - 1];
        if (currentLevelData) {
            return currentLevelData.experience;
        } else {
            return 0;
        }
    }

    const level = findUserSkillLevel("Woodcutting");
    const experienceNextLevel = getExperienceNextLevel(level);
    const currentExperience = findUserSkillExperience("Woodcutting");
    const remainingExperience = getRemainingExperience(currentExperience, level);

    const progress = level > 0 && miningLevels[level - 1] ? (currentExperience / miningLevels[level - 1].experience) * 100 : 0;

    return (
        <div className="">
            <p>Woodcutting Level: {level}</p>
            <div className="h-6 rounded-lg relative bg-gray-700">
                <div className="h-6 rounded-l-lg bg-green-700/100" style={{ width: `${progress}%`, maxWidth: "100%" }}></div>
                <div className="absolute flex top-0 left-1/2 -translate-x-1/2">
                    <p>{currentExperience} / {experienceNextLevel}</p>
                </div>
            </div>
            {/* <p>Remaining Experience for Next Level: {remainingExperience}</p> */}
            <div className="grid mt-12 grid-cols-12 gap-4">

                {
                    trees.map((tree) => {
                        return (
                            <WoodCuttingCard key={tree.name} mineral={tree} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default WoodCuttingTemplate;
