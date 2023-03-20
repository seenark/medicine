import { TOrder } from "@/mockup/order";
import React, { FC } from "react";
import OrderCard from "./OrderCard";

type Props = {
  historyOrders: TOrder[];
};

const Overall: FC<Props> = (props) => {
  return (
    <div>
      <div className="p-4 flex flex-col gap-8">
        {props.historyOrders.map((orders, index) => (
          <OrderCard
            key={index}
            orderStatus="ToBePaid"
            orders={orders}
            deliveryCost={50}
          />
        ))}
      </div>
    </div>
  );
};

export default Overall;
