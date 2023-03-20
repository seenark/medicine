import { IProduct, products } from "./product";

export type TOrder = {
  product: {
    amount: number;
    item: IProduct;
  }[];
  orderId: string;
};

export const order1: TOrder = {
  product: [
    {
      amount: 1,
      item: products[0],
    },
    {
      amount: 2,
      item: products[1],
    },
  ],
  orderId: "12345",
};

export const order2: TOrder = {
  product: [
    {
      amount: 10,
      item: products[2],
    },
  ],
  orderId: "234234",
};

export const orderHistory: TOrder[] = [order1, order2];
