import { useAppSelector } from "@/redux/store";
import React from "react";
import InventoryItem from "./InventoryItem.tsx/InventoryItem";
import Link from "next/link";

const InventoryTemplate = () => {

    const user = useAppSelector((state) => state.authReducer.value);
    const freeSlots = 50 - user.inventory.length;

    return (
        <div>
            <h3 className="text-xl text-center uppercase">Inventory</h3>
            <h3 className="text-xl uppercase">
                {user.inventory.length} / 50
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                {
                    user.inventory.map((item) => {
                        return (
                            <InventoryItem item={item} key={item.id} />
                        )
                    })
                }
                {
                    Array.from(Array(freeSlots)).map((_, index) => {
                        return (
                            <Link href="/app/shop"  className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-md w-16 h-16" key={index}>
                            
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InventoryTemplate;