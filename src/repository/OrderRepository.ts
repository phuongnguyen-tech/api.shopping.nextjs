import { BaseRepository } from "./BaseRepository";
import { Order } from "../entities/order";
import ordersData from "../datas/ordersData";

class OrderRepository extends BaseRepository<Order> {
  constructor() {
    super();
    this.memoryEntity = ordersData;
  }
}

export const orderRepository = new OrderRepository();
