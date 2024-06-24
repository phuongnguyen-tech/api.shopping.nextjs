import { BaseEntity } from "./BaseEntity";

export interface Order extends BaseEntity {
  customerId: string;
  orderDate: Date;
  totalAmount: number;
  status: string;
}
