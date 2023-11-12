import { items } from "./items";

// create an array that contains all the items that can be crafted

export const craftableItems = items.filter(item => item.craftable === true);