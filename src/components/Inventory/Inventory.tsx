import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import InventoryItem from "./InventoryItem.tsx/InventoryItem";
import Link from "next/link";
import { addInventorySlots, removeGold } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const InventoryTemplate = () => {

    const dispatch = useDispatch();
    const user = useAppSelector((state) => state.authReducer.value);
    const freeSlots = user.inventorySlots - user.inventory.length;
    const [inventoryPrice, setInventoryPrice] = useState(100);
    const [purchaseCount, setPurchaseCount] = useState(0);

    const calculateNewSlotPrice = () => {
        if (user.inventorySlots >= 100) {
            return 0;
        }
        const newSlotPrice = Math.round(100 * Math.pow(1.2, purchaseCount + 1));
        return newSlotPrice;
    };

    const handleAddInventorySlots = () => {
        if (user.inventorySlots >= 100) {
            toast.error("You can't have more than 100 slots");
            return;
        }

        const newSlotPrice = calculateNewSlotPrice();
        dispatch(addInventorySlots(5));
        dispatch(removeGold(newSlotPrice));
        toast.success(`You bought 5 slots for ${newSlotPrice} gold!`);
        setPurchaseCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-center uppercase">Inventory</h3>
                <div className="flex flex-col gap-1 items-center">
                    {
                        user.inventorySlots < 100 ? (
                            <>
                                <button onClick={handleAddInventorySlots} className="text-xl border p-2 rounded-lg">
                                    Buy +5 slots
                                </button>
                                <span>🟡{calculateNewSlotPrice()}</span>

                            </>
                        ) : (
                            <span>Full Inventory</span>
                        )
                    }
                </div>
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
                        const randomId = crypto.randomUUID();
                        return (
                            <div className="flex flex-col items-center" key={randomId}>
                                <Link href="/app/shop" className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-md w-16 h-16" key={index}>

                                </Link>
                                0
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InventoryTemplate;