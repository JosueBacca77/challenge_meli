interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
}

export interface ItemDescription extends Item {
  sold_quantity: number;
  description: string;
}
