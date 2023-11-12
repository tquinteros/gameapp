import React, { useState } from "react";
import { Tooltip } from 'react-tooltip';
import Image from "next/image";
import { addItemToInventory, removeGold, removeItemFromInventory } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { ItemProps, RecipeItem } from "@/types/types";
import { items } from "@/data/items/items";

const CraftingItem = ({ item }: { item: ItemProps }) => {
    const dispatch = useDispatch();
    const user = useAppSelector((state) => state.authReducer.value);
    const [quantity, setQuantity] = useState(1);

    const handleCraftItem = () => {
        if (item.craftable && item.recipe) {
            const hasIngredients = item.recipe.every((ingredient) => {
                const inventoryItem = user.inventory.find(
                    (invItem) =>
                        invItem.id === ingredient.id &&
                        invItem.quantity &&
                        invItem.quantity >= ingredient.quantity
                );
                return inventoryItem !== undefined;
            });
    
            if (hasIngredients) {
                const recipeItems: ItemProps[] = item.recipe.map((ingredient) => {
                    const fullItem = items.find((mat) => mat.id === ingredient.id);
                    if (!fullItem) {
                        console.error(`Item with ID ${ingredient.id} not found.`);
                        return { id: ingredient.id, name: "Unknown Item", price: 0, type: "", image: "", quantity: 0 };
                    }
                    return {
                        ...fullItem,
                        quantity: ingredient.quantity || 0,
                    };
                });
    
                if (item.tier && user.gold < 100 * item.tier) {
                    toast.error("You don't have enough gold");
                    return;
                }
    
                dispatch(addItemToInventory({ item, quantity }));
                dispatch(removeItemFromInventory(recipeItems));
                toast.success(`Crafted ${item.name} successfully!`);
                if (item.tier) {
                    dispatch(removeGold(100 * item.tier));
                }
            } else {
                toast.error(`Not enough ingredients to craft ${item.name}.`);
            }
        } else {
            toast.error(`Cannot craft ${item.name}.`);
        }
    };

    return (
        <div className="flex lg:col-span-6 col-span-12 items-center justify-between border rounded-sm px-2 py-1 gap-1">
            <Image data-tooltip-place="top" data-tooltip-id={`tooltip-${item.id}`} src={item.image} alt={item.name} className="" width={50} height={50} />
            <Tooltip className="z-40" id={`tooltip-${item.id}`}>
                <div className="flex flex-col">
                    <span>{item.name}</span>
                </div>
            </Tooltip>
            <div className="flex gap-4">
                {item.recipe &&
                    item.recipe.map((recipeItem) => {
                        const matchingItem = items.find((item) => item.id === recipeItem.id);
                        if (matchingItem) {
                            return (
                                <div key={matchingItem.id} className="flex items-center gap-1">
                                    <Image
                                        data-tooltip-place="top"
                                        data-tooltip-id={`${recipeItem.id}`}
                                        src={matchingItem.image}
                                        alt={matchingItem.name}
                                        width={30}
                                        height={30}
                                    />
                                    <span>({recipeItem.quantity})</span>
                                    <Tooltip className="z-40" id={`${recipeItem.id}`}>
                                        <div className="flex flex-col">
                                            <span>{matchingItem.name}</span>
                                        </div>
                                    </Tooltip>
                                </div>
                            );
                        } else {
                            console.error(`Item with ID ${recipeItem.id} not found.`);
                            return null;
                        }
                    })}
            </div>
            <button className="border rounded-md px-2 py-1" onClick={handleCraftItem}>Craft 🟡 {item.tier && (100 * item.tier)}</button>
        </div>
    );
};

export default CraftingItem;