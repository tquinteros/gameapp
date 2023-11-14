import React, { useEffect, useState } from "react";
import CraftingItem from "./CraftingItem";
import { craftableItems } from "@/data/items/craftableitems";

const CraftingTemplate = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedTier, setSelectedTier] = useState("all");

    useEffect(() => {
        console.log(craftableItems, "craftableItems");
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleTierChange = (tier: string) => {
        setSelectedTier(tier);
    };

    const filteredCraftableItems = craftableItems.filter((item) => {
        const categoryCondition = selectedCategory === "all" || item.category === selectedCategory;
        const tierCondition = selectedTier === "all" || item.tier === parseInt(selectedTier, 10);
        return categoryCondition && tierCondition;
    });

    return (
        <div>
            <h3 className="text-xl text-center">CRAFTING</h3>
            <div className="flex justify-center my-6 gap-4">
                <select className="bg-transparent w-full border rounded-lg" value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
                    <option className="bg-transparent" value="all">All</option>
                    <option className="bg-transparent" value="pickaxe">Pickaxes</option>
                    <option className="bg-transparent" value="axe">Axes</option>
                    <option className="bg-transparent" value="sword">Swords</option>
                </select>
                <select className="bg-transparent w-full border rounded-lg" value={selectedTier} onChange={(e) => handleTierChange(e.target.value)}>
                    <option value="all">All Tiers</option>
                    {[1, 2, 3, 4, 5].map((tier) => (
                        <option key={tier} value={tier.toString()}>
                            Tier {tier}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid gap-4 grid-cols-12">
                {filteredCraftableItems.map((item) => (
                    <CraftingItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CraftingTemplate;