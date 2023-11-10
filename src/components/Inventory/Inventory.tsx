import { useAppSelector } from "@/redux/store";
import React from "react";
import InventoryItem from "./InventoryItem.tsx/InventoryItem";

const InventoryTemplate = () => {

    const user = useAppSelector((state) => state.authReducer.value);

    return (
        <div>
            <h3 className="text-xl text-center uppercase">Inventory</h3>
            <div className="flex">
                {
                    user.inventory.map((item) => {
                        return (
                            <InventoryItem item={item} key={item.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InventoryTemplate;