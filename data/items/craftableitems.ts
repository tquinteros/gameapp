import { items } from "./items";

// create an array that contains all the items that can be crafted

export const craftableItems = items.filter(item => 'craftable' in item && item.craftable === true);
