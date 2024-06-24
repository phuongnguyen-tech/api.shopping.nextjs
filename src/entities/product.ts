import { BaseEntity } from "./BaseEntity";

export interface Product extends BaseEntity {
  name: string;
  description?: string;
  price: number;
  bannerUrl: string;
  quantity: number;
  categoryId?: string;
}
