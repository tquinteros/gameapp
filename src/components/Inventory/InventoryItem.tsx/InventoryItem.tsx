import React from "react";
import { Tooltip } from 'react-tooltip';
import Image from "next/image";
import { addItemToInventory, removeGold, addExperience } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";

type Item = {
    name: string,
    price: number,
    type: string,
    description: string,
    image: string,
    level: number,
    id: number
}

const InventoryItem = ({ item }: { item: Item }) => {

    const dispatch = useDispatch();
    const userBalance = useAppSelector((state) => state.authReducer.value.gold);

    return (
        <div
            className="flex flex-col cursor-pointer" data-tooltip-id={`tooltip-${item.id}`}>
            <Image src={item.image} alt={item.name} width={50} height={50} />
            <Tooltip id={`tooltip-${item.id}`}>
                <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span>Type: {item.type}</span>
                    <span>Description: {item.description}</span>
                </div>
            </Tooltip>
        </div>
    )
}

export default InventoryItem;


