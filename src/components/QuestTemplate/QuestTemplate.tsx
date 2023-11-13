import { items } from "@/data/items/items";
import { quests } from "@/data/quests";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
import { QuestProps, ItemProps, InventoryItem } from "@/types/types";
import { addItemToInventory } from "@/redux/features/auth";
import { useDispatch } from "react-redux";

const QuestTemplate = () => {
    const user = useAppSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    const handleClaimQuest = () => {
        console.log("hola")
    };

    return (
        <div>
            <h1>Quest Template</h1>
            <div>
                {quests.map((quest) => (
                    <div key={quest.name}>
                        <span>{quest.name}</span>
                        {quest.requirements.map((requirement) => {
                            const matchingItem = items.find((item) => item.id === requirement.id);
                            if (matchingItem) {
                                return (
                                    <div key={matchingItem.id} className="flex items-center gap-1">
                                        <Image
                                            data-tooltip-place="top"
                                            data-tooltip-id={`${requirement.id}`}
                                            src={matchingItem.image}
                                            alt={matchingItem.name}
                                            width={30}
                                            height={30}
                                        />
                                        <span>({requirement.quantity})</span>
                                    </div>
                                );
                            } else {
                                console.error(`Item with ID ${requirement.id} not found.`);
                                return null;
                            }
                        })}
                        <button onClick={() => handleClaimQuest()}>Claim</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestTemplate;