import { useAppSelector } from "@/redux/store";
import React from "react";
import InventoryItem from "./InventoryItem.tsx/InventoryItem";
import Link from "next/link";
import { addInventorySlots, removeGold } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const InventoryTemplate = () => {

    const dispatch = useDispatch();
    const user = useAppSelector((state) => state.authReducer.value);
    const freeSlots = user.inventorySlots - user.inventory.length;

    const handleAddInventorySlots = () => {
        if (user.inventorySlots >= 100) {
            toast.error("You can't have more than 100 slots")
            return;
        }
        dispatch(addInventorySlots(5))
        dispatch(removeGold(100))
    }

    return (
        <div>
            <div className="flex justify-between">
                <h3 className="text-xl text-center uppercase">Inventory</h3>
                <button onClick={handleAddInventorySlots} className="text-xl border p-2 rounded-lg">BUY +5 SLOTS</button>
            </div>
            <h3 className="text-xl uppercase">
                {user.inventory.length} / {user.inventorySlots}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                {
                    user.inventory.map((item, index) => {
                        const uniqueKey = `${item.id}*${crypto.randomUUID()}`;
                        return (
                            <InventoryItem item={item} key={uniqueKey} />
                        );
                    })
                }
                {
                    Array.from(Array(freeSlots)).map((_, index) => {
                        return (
                            <Link href="/app/shop" className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-md w-16 h-16" key={index}>

                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InventoryTemplate;