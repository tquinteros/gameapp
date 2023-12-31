import React, { useEffect } from "react";
import { Tooltip } from 'react-tooltip';
import Image from "next/image";
import { addItemToInventory, removeGold, addExperience, removeItemFromInventory, addGold, healthHp } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { ItemProps } from "@/types/types";
import { items } from "@/data/items/items";

const InventoryItem = ({ item }: { item: ItemProps }) => {

    const dispatch = useDispatch();
    const user = useAppSelector((state) => state.authReducer.value);

    const handleRemoveItem = (item: ItemProps) => {
        const itemToRemove: ItemProps = { id: item.id, name: item.name, price: item.price, type: item.type, image: item.image, quantity: 1 };
        dispatch(removeItemFromInventory(itemToRemove));
        dispatch(addGold(item.price * 0.8));
        toast.success(`You sold ${item.name} for ${item.price * 0.8} gold!`);
    };

    const handleOpenChest = () => {
        const chestTier = item.tier;

        const uniqueItemsInInventory = user.inventory.filter((inventoryItem, index, self) =>
            index === self.findIndex((t) => (
                t.id === inventoryItem.id
            ))
        );

        if (uniqueItemsInInventory.length >= user.inventorySlots) {
            toast.error(`You can't have more than ${user.inventorySlots} unique items`);
            return;
        }

        if (chestTier !== undefined) {
            const chestItems = items.filter((item) => item.category !== "chest" && item.tier !== undefined && item.tier <= chestTier);

            if (chestItems.length > 0) {
                const randomItem = chestItems[Math.floor(Math.random() * chestItems.length)];
                dispatch(addItemToInventory({ item: randomItem, quantity: 1 }));
                const itemToRemove: ItemProps = { id: item.id, name: item.name, price: item.price, type: item.type, image: item.image, quantity: 1 };
                dispatch(removeItemFromInventory(itemToRemove));
                toast.success(`You opened a chest and found ${randomItem.name}!`);
            } else {
                toast.error(`Error: No valid items found for the chest's tier.`);
            }
        } else {
            toast.error(`Error: Chest tier is undefined.`);
        }
    };

    const healHp = (item: ItemProps) => {
        const itemToRemove: ItemProps = { id: item.id, name: item.name, price: item.price, type: item.type, image: item.image, quantity: 1, regenerate: item.regenerate, category: item.category };
        if (user.hp === user.maxHp) {
            toast.error(`You are already at full health!`);
            return;
        }
        if (item.regenerate) {
            if (user.hp + item.regenerate > user.maxHp) {
                dispatch(healthHp(user.maxHp - user.hp));
                dispatch(removeItemFromInventory(itemToRemove));
                toast.success(`You healed ${user.maxHp - user.hp} hp!`);
                return;
            }
            dispatch(healthHp(item.regenerate));
            dispatch(removeItemFromInventory(itemToRemove));
            toast.success(`You healed ${item.regenerate} hp!`);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div
                onClick={() => item.category === "chest" ? handleOpenChest() : item.category === 'potion' ? healHp(item) : handleRemoveItem(item)}
                className="flex flex-col border-2 rounded-md border-gray-300 w-16 h-16 items-center justify-center cursor-pointer" data-tooltip-id={`tooltip-${item.id}`}>
                <Image src={item.image} alt={item.name} width={50} height={50} />
                <Tooltip className="z-40" id={`tooltip-${item.id}`}>
                    <div className="flex flex-col">
                        <span>{item.name}</span>
                        {item.tier && <span>Tier {item.tier}</span>}
                        {
                            item.regenerate && item.type === "health" && item.regenerate < 99999 && (
                                <span>Regenerate {item.regenerate} HP</span>
                            )
                        }
                        {
                            item.regenerate && item.type === "health" && item.regenerate > 99999 && (
                                <span>Regenerate 100% HP</span>
                            )
                        }
                        {
                            item.regenerate && item.type === "mana" && (
                                <span>Regenerate {item.regenerate} MP</span>
                            )
                        }
                    </div>
                </Tooltip>
            </div>
            <span>{item.quantity}</span>
        </div>
    )
}

export default InventoryItem;


