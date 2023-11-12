import React, { useEffect, useState } from "react";
import CraftingItem from "./CraftingItem";
import { craftableItems } from "@/data/items/craftableitems";

const CraftingTemplate = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        console.log(craftableItems, "craftableItems");
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredCraftableItems = selectedCategory === "all"
        ? craftableItems
        : craftableItems.filter(item => item.category === selectedCategory);

    return (
        <div>
            <h3 className="text-xl text-center">CRAFTING</h3>
            <div className="flex max-w-3xl mx-auto flex-col gap-12">
                <div className="flex gap-4">
                    <button onClick={() => handleCategoryChange("all")}>All</button>
                    <button onClick={() => handleCategoryChange("pickaxe")}>Pickaxes</button>
                    <button onClick={() => handleCategoryChange("axe")}>Axes</button>
                    <button onClick={() => handleCategoryChange("sword")}>Swords</button>
                    {/* Agrega más botones según las categorías */}
                </div>
                {filteredCraftableItems.map((item) => (
                    <CraftingItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CraftingTemplate;