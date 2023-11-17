import { items } from "@/data/items/items";
import React, { useEffect } from "react";
import ItemDetail from "../Item/Item";
import { useAppSelector } from "@/redux/store";

const ShopTemplate = () => {
    const user = useAppSelector((state) => state.authReducer.value);

    useEffect(() => {
        console.log(user, "USER");
    }, []);

    return (
        <div className="flex justify-center lg:justify-normal flex-wrap gap-8">
            {/* {Object.values(items).map((itemCategory) =>
                itemCategory.map((item) => (
                    <ItemDetail item={item} key={item.name} />
                ))
            )} */}
            {
                items.map((item) => (
                    <ItemDetail item={item} key={item.name} />
                ))
            }
        </div>
    );
};

export default ShopTemplate;
