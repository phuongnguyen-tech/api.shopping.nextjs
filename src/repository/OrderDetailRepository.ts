import { BaseRepository } from "./BaseRepository";
import { OrderDetail } from "../entities/orderdetail";
import orderDetailsData from "../datas/orderDetailsData";

class OrderDetailRepository extends BaseRepository<OrderDetail> {
  constructor() {
    super();
    this.memoryEntity = orderDetailsData;
  }
}

export const orderDetailRepository = new OrderDetailRepository();
