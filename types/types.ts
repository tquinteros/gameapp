export type ItemProps = {
  id: number | string;
  name: string;
  price: number;
  type: string;
  description?: string;
  image: string;
  level?: number;
  regenerate?: number;
  tier?: number;
  damage?: number;
  craftable?: boolean;
  recipe?: { id: number | string; quantity: number; }[];
  quantity?: number;
  category?: string;
};

export type InventoryItem = ItemProps & {
  quantity?: number;
};

export type RecipeItem = {
  id: string;
  name: string;
  quantity: number;
  image: string;
}

export interface QuestProps {
  name: string;
  description: string;
  requirements: {
    item: ItemProps;
    quantity: number;
  }[];
  rewards: {
    item: ItemProps;
    quantity: number;
  }[];
  isCompleted: boolean;
  claimed: boolean;
}

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

export interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  ref?: React.RefObject<HTMLDivElement>;
}

export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  min?: number;
  max?: number;
  label: string;
  value: string | number;
  required?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CreatureProps {
  name: string;
  health: number;
  attack: number;
  defense: number;
  speed: number;
  experience: number;
  gold: number;
  image: string;
}