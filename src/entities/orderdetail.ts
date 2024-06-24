import { BaseEntity } from "./BaseEntity";

export interface OrderDetail extends BaseEntity {
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
}
