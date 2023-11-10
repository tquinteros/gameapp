import React from "react";
import { Tooltip } from 'react-tooltip';
import Image from "next/image";
import { addItemToInventory, removeGold, addExperience } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { ItemProps } from "@/types/types";

const ItemDetail = ({ item }: { item: ItemProps }) => {

    const dispatch = useDispatch();
    const userBalance = useAppSelector((state) => state.authReducer.value.gold);
    const user = useAppSelector((state) => state.authReducer.value);
    
    const handleBuyItem = (item: ItemProps) => {
        if (userBalance < item.price) {
            toast.error("You don't have enough gold");
            return;
        }
    
        const hasItem = user.inventory.some(
            (inventoryItem) => inventoryItem.id === item.id && inventoryItem.quantity === undefined
        );
    
        if (hasItem && (item.category === "tool" || item.category === "armor")) {
            toast.error(`You already have this item in your inventory!`);
            return;
        }
    
        if (user.inventory.length >= user.inventorySlots) {
            toast.error(`You can't have more than ${user.inventorySlots} items`);
            return;
        }
    
        dispatch(removeGold(item.price));
        dispatch(addItemToInventory(item));
        toast.success(`You bought this item for ${item.price} gold!`);
    };
    

    return (
        <div  
        onClick={() => handleBuyItem(item)}
        className="flex flex-col cursor-pointer" data-tooltip-id={`tooltip-${item.id}`}>
            <Image src={item.image} alt={item.name} width={50} height={50} />
            <span>🟡{item.price}</span>
            <Tooltip id={`tooltip-${item.id}`}>
                <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span>Tier {item.tier}</span>
                    <span>Price: {item.price}</span>
                    <span>Type: {item.type}</span>
                    <span>Description: {item.description}</span>
                </div>
            </Tooltip>
        </div>
    )
}

export default ItemDetail;


