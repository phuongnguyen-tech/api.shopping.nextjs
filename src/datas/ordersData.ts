import { Order } from "../entities/order";

const ordersData: Order[] = [
  {
    id: "1",
    createdAt: new Date("2023-02-01"),
    customerId: "1",
    orderDate: new Date("2023-02-01"),
    totalAmount: 150.75,
    status: "Processing",
  },
  {
    id: "2",
    createdAt: new Date("2023-02-02"),
    customerId: "2",
    orderDate: new Date("2023-02-02"),
    totalAmount: 230.0,
    status: "Shipped",
  },
  {
    id: "3",
    createdAt: new Date("2023-02-03"),
    customerId: "3",
    orderDate: new Date("2023-02-03"),
    totalAmount: 79.99,
    status: "Delivered",
  },
  {
    id: "4",
    createdAt: new Date("2023-02-04"),
    customerId: "4",
    orderDate: new Date("2023-02-04"),
    totalAmount: 120.5,
    status: "Cancelled",
  },
  {
    id: "5",
    createdAt: new Date("2023-02-05"),
    customerId: "4",
    orderDate: new Date("2023-02-05"),
    totalAmount: 305.4,
    status: "Processing",
  },
  {
    id: "6",
    createdAt: new Date("2023-02-06"),
    customerId: "4",
    orderDate: new Date("2023-02-06"),
    totalAmount: 95.75,
    status: "Shipped",
  },
  {
    id: "7",
    createdAt: new Date("2023-02-07"),
    customerId: "7",
    orderDate: new Date("2023-02-07"),
    totalAmount: 250.6,
    status: "Delivered",
  },
  {
    id: "8",
    createdAt: new Date("2023-02-08"),
    customerId: "8",
    orderDate: new Date("2023-02-08"),
    totalAmount: 170.3,
    status: "Processing",
  },
  {
    id: "9",
    createdAt: new Date("2023-02-09"),
    customerId: "9",
    orderDate: new Date("2023-02-09"),
    totalAmount: 135.2,
    status: "Shipped",
  },
  {
    id: "10",
    createdAt: new Date("2023-02-10"),
    customerId: "10",
    orderDate: new Date("2023-02-10"),
    totalAmount: 290.99,
    status: "Delivered",
  },
  {
    id: "11",
    createdAt: new Date("2023-02-11"),
    customerId: "1",
    orderDate: new Date("2023-02-11"),
    totalAmount: 60.45,
    status: "Cancelled",
  },
  {
    id: "12",
    createdAt: new Date("2023-02-12"),
    customerId: "4",
    orderDate: new Date("2023-02-12"),
    totalAmount: 110.8,
    status: "Processing",
  },
];

export default ordersData;
