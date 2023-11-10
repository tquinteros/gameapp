export type ItemProps = {
  id: number;
  name: string;
  price: number;
  type: string;
  description?: string;
  image: string;
  level?: number;
  tier?: number;
  quantity?: number;
  category: string;
};

export type InventoryItem = {
  id: number;
  name: string;
  price: number;
  type: string;
  description?: string;
  image: string;
  level?: number;
  tier?: number;
  quantity?: number;
  category: string;
};

export type MineralProps = {
  name: string;
  materialImg: string;
  itemImg: string;
  experience: number;
  delay: number;
  type: string;
  levelRequired: number;
  requiredPickaxe: string;
  requiredTier: number;
  percentageGold: number;
};