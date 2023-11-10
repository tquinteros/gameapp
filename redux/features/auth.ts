import { miningLevels } from "@/data/levels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type SkillLevel = {
    name: string;
    level: number;
    experience: number;
};

type Item = {
    name: string,
    price: number,
    type: string,
    description: string,
    image: string,
    level: number,
    id: number,
};

type InitialState = {
    value: AuthState;
};

type AuthState = {
    isAuthenticated: boolean;
    username: string;
    id: string;
    isAdmin: boolean;
    level: number;
    gold: number;
    experience: number;
    skillsLevels: SkillLevel[];
    inventory: Item[];
};

const initialState: InitialState = {
    value: {
        isAuthenticated: false,
        username: "",
        id: "",
        isAdmin: false,
        level: 0,
        experience: 0,
        skillsLevels: [],
        inventory: [],
        gold: 0,
    },
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => initialState,
        logIn: (state, action: PayloadAction<{ username: string; isAdmin: boolean; level: number; gold: number; experience: number; skillsLevels: SkillLevel[]; inventory: Item[] }>) => {
            const { username, isAdmin, level, experience, skillsLevels, gold, inventory } = action.payload;
            return {
                value: {
                    isAuthenticated: true,
                    username,
                    id: crypto.randomUUID(),
                    isAdmin,
                    gold,
                    level,
                    experience,
                    skillsLevels,
                    inventory,
                },
            };
        },
        toggleAdmin: (state) => {
            state.value.isAdmin = !state.value.isAdmin;
        },
        addExperience: (state, action: PayloadAction<number>) => {
            state.value.experience += action.payload;
        },
        addLevel: (state, action: PayloadAction<number>) => {
            state.value.level += action.payload;
            state.value.gold += 50;
            toast.success(`You have earned 50 gold!`, {
                icon: "💰",
                position: "bottom-right",
            });
            toast.success(`You have reached level ${state.value.level}!`);
        },
        addExperienceSkill: (state, action: PayloadAction<{ skillName: string, experience: number }>) => {
            const { skillName, experience } = action.payload;
            const skillIndex = state.value.skillsLevels.findIndex((skill) => skill.name === skillName);
            if (skillIndex !== -1) {
                const updatedExperience = state.value.skillsLevels[skillIndex].experience + experience;
                state.value.skillsLevels[skillIndex].experience = updatedExperience >= 0 ? updatedExperience : 0;
            }
        },
        addLevelSkill: (state, action: PayloadAction<{ skillName: string, level: number }>) => {
            const { skillName, level } = action.payload;
            const skillIndex = state.value.skillsLevels.findIndex((skill) => skill.name === skillName);
            if (skillIndex !== -1) {
                state.value.skillsLevels[skillIndex].level += level;
            }
            toast.info(`You have reached level ${state.value.skillsLevels[skillIndex].level} in ${skillName}!`, {
                icon: "🚀",
            });
        },
        addGold: (state, action: PayloadAction<number>) => {
            state.value.gold += action.payload;
            toast.success(`You have earned ${action.payload} gold!`, {
                icon: "💰",
                position: "bottom-right",
            });
        },
        removeGold: (state, action: PayloadAction<number>) => {
            state.value.gold -= action.payload;
        },
        addItemToInventory: (state, action: PayloadAction<Item>) => {
            state.value.inventory.push(action.payload);
        },
    },
});

export const { logIn,
    logOut,
    toggleAdmin,
    addExperience,
    addLevel,
    addExperienceSkill,
    addLevelSkill,
    addGold,
    removeGold,
    addItemToInventory,
} = auth.actions;
export default auth.reducer;