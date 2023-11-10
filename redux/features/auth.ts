import { miningLevels } from "@/data/levels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ItemProps, InventoryItem } from "@/types/types";

type SkillLevel = {
    name: string;
    level: number;
    experience: number;
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
    inventorySlots: number;
    skillsLevels: SkillLevel[];
    inventory: InventoryItem[];
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
        inventorySlots: 50,
    },
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => initialState,
        logIn: (state, action: PayloadAction<{ username: string; isAdmin: boolean; level: number; gold: number; experience: number; skillsLevels: SkillLevel[]; inventory: InventoryItem[]; inventorySlots: number; }>) => {
            const { username, isAdmin, level, experience, skillsLevels, gold, inventory, inventorySlots } = action.payload;
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
                    inventorySlots
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
        addItemToInventory: (state, action: PayloadAction<ItemProps>) => {
            const newItem: ItemProps = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                type: action.payload.type,
                description: action.payload.description,
                image: action.payload.image,
                level: action.payload.level,
                quantity: 1,
                category: action.payload.category,
            };

            const existingItem = state.value.inventory.find(item => item.id === newItem.id);

            if (existingItem) {
                if (existingItem.quantity !== undefined) {
                    existingItem.quantity += newItem.quantity || 0;
                } else {
                    existingItem.quantity = newItem.quantity || 0;
                }
            } else {
                state.value.inventory.push(newItem);
            }
        },
        removeItemFromInventory: (state, action: PayloadAction<ItemProps>) => {
            const itemIndex = state.value.inventory.findIndex((item) => item.id === action.payload.id);
            if (itemIndex !== -1) {
                const currentItem = state.value.inventory[itemIndex];
                if (currentItem.quantity && currentItem.quantity > 1) {
                    currentItem.quantity -= 1;
                }
                else {
                    state.value.inventory.splice(itemIndex, 1);
                }
            }
        },
        addInventorySlots: (state, action: PayloadAction<number>) => {
            state.value.inventorySlots += action.payload;
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
    removeItemFromInventory,
    addInventorySlots,
} = auth.actions;
export default auth.reducer;