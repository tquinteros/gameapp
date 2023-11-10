import { items } from "@/data/items/items";
import React, { useEffect } from "react";
import ItemDetail from "../Item/Item";
import { useAppSelector } from "@/redux/store";

const ShopTemplate = () => {

    const user = useAppSelector((state) => state.authReducer.value);

    useEffect(() => {
        console.log(user, "USER")
    }, [])

    return (
        <div className="flex gap-8">
            {
                items.map((item) => {
                    return (
                        <ItemDetail item={item} key={item.id} />
                    )
                
                })
            }
        </div>
    )
}

export default ShopTemplate;