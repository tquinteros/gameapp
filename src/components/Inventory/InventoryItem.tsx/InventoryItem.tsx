import React from "react";
import { Tooltip } from 'react-tooltip';
import Image from "next/image";
import { addItemToInventory, removeGold, addExperience, removeItemFromInventory, addGold } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { ItemProps } from "@/types/types";

const InventoryItem = ({ item }: { item: ItemProps }) => {

    const dispatch = useDispatch();
    const user = useAppSelector((state) => state.authReducer.value);

    const handleRemoveItem = (item: ItemProps) => {
        dispatch(removeItemFromInventory(item))
        dispatch(addGold(item.price * 0.8))
        console.log(user.inventory, "INVENTORY")
        toast.success(`You sold ${item.name} for ${item.price * 0.8} gold!`)
    }

    return (
        <div className="flex flex-col items-center">
            <div
                onClick={() => handleRemoveItem(item)}
                className="flex flex-col border-2 rounded-md border-gray-300 w-16 h-16 items-center justify-center cursor-pointer" data-tooltip-id={`tooltip-${item.id}`}>
                <Image src={item.image} alt={item.name} width={50} height={50} />
                <Tooltip id={`tooltip-${item.id}`}>
                    <div className="flex flex-col">
                        <span>{item.name}</span>
                        <span>Description: {item.description}</span>
                    </div>
                </Tooltip>
            </div>
            <span>{item.quantity}</span>
        </div>
    )
}

export default InventoryItem;


