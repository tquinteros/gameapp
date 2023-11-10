export type ItemProps = {
  id: number,
  name: string,
  price: number,
  type: string,
  description?: string,
  image: string,
  level?: number,
  quantity?: number,
  category: string,
};

export type MineralProps = {
  name: string;
  materialImg: string;
  itemImg: string;
  experience: number;
  delay: number;
  levelRequired: number;
  requiredPickaxe: string;
  percentageGold: number;
};