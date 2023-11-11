import React, { useState } from "react";
import { Tooltip } from 'react-tooltip';
import Image from "next/image";
import { addItemToInventory, removeGold, addExperience } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { ItemProps } from "@/types/types";
import BuyModal from "../Modals/BuyModal/BuyModal";

const ItemDetail = ({ item }: { item: ItemProps }) => {

    const dispatch = useDispatch();
    const userBalance = useAppSelector((state) => state.authReducer.value.gold);
    const user = useAppSelector((state) => state.authReducer.value);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleBuyItem = (item: ItemProps, quantity: number) => {
        if (userBalance < item.price * quantity) {
            toast.error("You don't have enough gold");
            return;
        }

        const uniqueItemsInInventory = new Set(user.inventory.map((inventoryItem) => inventoryItem.id));

        if (uniqueItemsInInventory.size >= user.inventorySlots) {
            toast.error(`You can't have more than ${user.inventorySlots} unique items`);
            return;
        }

        dispatch(removeGold(item.price * quantity));
        dispatch(addItemToInventory({ item, quantity }));
        toast.success(`You bought ${quantity} ${item.name} for ${item.price * quantity} gold!`);
        handleCloseModal();
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div
            // onClick={() => handleBuyItem(item, 1)}
            className="flex flex-col" data-tooltip-place="bottom" data-tooltip-id={`tooltip-${item.id}`}>
            <Image
                onClick={() => setIsModalOpen(true)}
                src={item.image} alt={item.name} className="cursor-pointer" width={50} height={50} />
            <span>🟡{item.price}</span>
            <Tooltip className="z-40" id={`tooltip-${item.id}`}>
                <div className="flex flex-col">
                    <span>{item.name}</span>
                    {
                        item.tier && (<span>Tier {item.tier}</span>)
                    }
                    <span>Description: {item.description}</span>
                </div>
            </Tooltip>
            <BuyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <h3 className="text-2xl text-center">You&apos;re buying</h3>
                <div className="flex gap-4 flex-col">
                    <div className="flex">
                        <Image
                            src={item.image} alt={item.name} className="cursor-pointer" width={75} height={75} />
                        <div className="flex flex-col">
                            <span>{item.name}</span>
                            {
                                item.tier && (
                                    <span>Tier: {item.tier}</span>
                                )
                            }
                            <span>🟡{item.price} (each)</span>
                        </div>
                    </div>
                    <div>
                        <label>
                            Quantity:
                            <input className="w-full bg-black/25 border px-2 py-0.5 rounded-md" type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                        </label>
                    </div>
                    <div>
                        Total: {item.price * quantity}
                    </div>
                    <div className="flex gap-2 w-full">
                        <button
                            onClick={handleCloseModal}
                            className="px-4 w-full py-0.5 rounded-md border"
                        >Close
                        </button>
                        <button
                            onClick={() => handleBuyItem(item, quantity)}
                            className="px-4 w-full py-0.5 rounded-md border"
                        >Buy Item
                        </button>
                    </div>
                </div>
            </BuyModal>
        </div>
    )
}

export default ItemDetail;





