export type ItemProps = {
  name: string,
  price: number,
  type: string,
  description?: string,
  image: string,
  level?: number,
  id: number,
  quantity?: number,
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