import { craftableItems } from "@/data/items/craftableitems";
import React, { useEffect } from "react";
import CraftingItem from "./CraftingItem";

const CraftingTemplate = () => {

    useEffect(() => {
        console.log(craftableItems, "craftableItems")
    }, [])

    return (
        <div>
            <h3 className="text-xl text-center">CRAFTING</h3>
            <div className="flex max-w-3xl mx-auto flex-col gap-12">
                {
                    craftableItems.map((item) => {
                        return (
                            <CraftingItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CraftingTemplate;