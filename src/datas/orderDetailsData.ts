import { OrderDetail } from "../entities/orderdetail";

const orderDetailsData: OrderDetail[] = [
  {
    id: "1",
    createdAt: new Date("2023-02-01"),
    orderId: "1",
    productId: "1",
    quantity: 2,
    unitPrice: 19.99,
  },
  {
    id: "2",
    createdAt: new Date("2023-02-01"),
    orderId: "1",
    productId: "2",
    quantity: 1,
    unitPrice: 49.99,
  },
  {
    id: "3",
    createdAt: new Date("2023-02-02"),
    orderId: "2",
    productId: "3",
    quantity: 3,
    unitPrice: 29.99,
  },
  {
    id: "4",
    createdAt: new Date("2023-02-02"),
    orderId: "2",
    productId: "4",
    quantity: 2,
    unitPrice: 14.99,
  },
  {
    id: "5",
    createdAt: new Date("2023-02-03"),
    orderId: "3",
    productId: "5",
    quantity: 1,
    unitPrice: 59.99,
  },
  {
    id: "6",
    createdAt: new Date("2023-02-03"),
    orderId: "3",
    productId: "6",
    quantity: 2,
    unitPrice: 39.99,
  },
  {
    id: "7",
    createdAt: new Date("2023-02-04"),
    orderId: "4",
    productId: "7",
    quantity: 1,
    unitPrice: 99.99,
  },
  {
    id: "8",
    createdAt: new Date("2023-02-05"),
    orderId: "5",
    productId: "8",
    quantity: 4,
    unitPrice: 24.99,
  },
  {
    id: "9",
    createdAt: new Date("2023-02-06"),
    orderId: "6",
    productId: "9",
    quantity: 5,
    unitPrice: 12.99,
  },
  {
    id: "10",
    createdAt: new Date("2023-02-07"),
    orderId: "7",
    productId: "10",
    quantity: 1,
    unitPrice: 199.99,
  },
  {
    id: "11",
    createdAt: new Date("2023-02-08"),
    orderId: "8",
    productId: "11",
    quantity: 3,
    unitPrice: 22.99,
  },
  {
    id: "12",
    createdAt: new Date("2023-02-09"),
    orderId: "9",
    productId: "12",
    quantity: 2,
    unitPrice: 34.99,
  },
];

export default orderDetailsData;
