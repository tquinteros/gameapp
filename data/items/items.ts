import { materials } from './materials';
import { pickaxes } from "./pickaxes";
import { axes } from "./axes";
import { chests } from "./chests";
import { swords } from './swords';
import { potions } from './potions';
export const items = [
    ...pickaxes,
    ...axes,
    ...swords,
    ...chests,
    ...materials,
    ...potions,
]