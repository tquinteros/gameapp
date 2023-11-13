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
    hp: number;
    maxHp: number;
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
        hp: 100,
        maxHp: 100,
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
        logIn: (state, action: PayloadAction<{ username: string; isAdmin: boolean; level: number; gold: number; experience: number; skillsLevels: SkillLevel[]; inventory: InventoryItem[]; inventorySlots: number; hp: number; maxHp: number; }>) => {
            const { username, isAdmin, level, experience, skillsLevels, gold, inventory, inventorySlots, hp, maxHp } = action.payload;
            return {
                value: {
                    isAuthenticated: true,
                    username,
                    id: crypto.randomUUID(),
                    isAdmin,
                    gold,
                    hp,
                    level,
                    maxHp,
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
            state.value.maxHp += 10;
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
        addItemToInventory: (state, action: PayloadAction<{ item: ItemProps; quantity: number }>) => {
            const { item, quantity } = action.payload;
        
            const newItem: ItemProps = {
                id: item.id,
                name: item.name,
                price: item.price,
                type: item.type,
                description: item.description,
                image: item.image,
                level: item.level,
                quantity: quantity,
                damage: item.damage,
                regenerate: item.regenerate,
                category: item.category,
                tier: item.tier,
            };
        
            const existingItem = state.value.inventory.find((existing) => existing.id === newItem.id);
        
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
        removeItemFromInventory: (state, action: PayloadAction<ItemProps | ItemProps[]>) => {
            const itemsToRemove = Array.isArray(action.payload) ? action.payload : [action.payload];
        
            itemsToRemove.forEach(itemToRemove => {
                const itemIndex = state.value.inventory.findIndex((item) => item.id === itemToRemove.id);
        
                if (itemIndex !== -1) {
                    const currentItem = state.value.inventory[itemIndex];
        
                    if (currentItem.quantity !== undefined) {
                        currentItem.quantity -= itemToRemove.quantity || 1;
        
                        if (currentItem.quantity <= 0) {
                            state.value.inventory.splice(itemIndex, 1);
                        }
                    } else {
                        state.value.inventory.splice(itemIndex, 1);
                    }
                }
            });
        },
        addInventorySlots: (state, action: PayloadAction<number>) => {
            state.value.inventorySlots += action.payload;
        },
        healthHp: (state, action: PayloadAction<number>) => {
            state.value.hp += action.payload;
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
    healthHp,
} = auth.actions;
export default auth.reducer;