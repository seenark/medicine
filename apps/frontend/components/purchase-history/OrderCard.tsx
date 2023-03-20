import { TOrder } from "@/mockup/order";
import { TPurchaseStatus } from "@/stores/order";
import React, { useMemo } from "react";
import ProductTable from "./ProductTable";

type Props = {
  orderStatus: TPurchaseStatus;
  orders: TOrder;
  deliveryCost: number;
};

const OrderCard = (props: Props) => {
  let orderStatus = "รอการชำระเงิน";
  if (props.orderStatus === "Packing") orderStatus = "รอจัดส่ง";
  if (props.orderStatus === "Develiring") orderStatus = "กำลังจัดส่ง";
  if (props.orderStatus === "Completed") orderStatus = "จัดส่งสำเร็จ";

  const totalCost = useMemo(() => {
    return props.orders.product
      .map((product) => product.amount * product.item.price)
      .reduce((pre, cur) => pre + cur, 0);
  }, [props.orders]);

  return (
    <div className="flex flex-col bg-white rounded-xl p-4">
      <header className="flex flex-row justify-between">
        <div className="bg-[#F6F6F6] p-2 flex flex-row gap-8">
          <span>เลขที่คำสั่งซื้อ</span>
          <span>#{props.orders.orderId}</span>
        </div>
        <div className="flex flex-row gap-8">
          <span className="font-bold">สถานะการสั่งซื้อ</span>
          <span>
            <u className="text-red-400">{orderStatus}</u>
          </span>
        </div>
      </header>
      <main className="grid grid-cols-3 gap-4 items-end">
        <div className="col-span-2">
          <ProductTable products={props.orders.product} />
        </div>
        <div className="flex flex-col justify-end ">
          <div className="grid grid-cols-5 gap-4 bg-gray-100 rounded-xl p-10 text-[18px]">
            <div className="text-right col-span-2">รวมค่าสินค้า</div>
            <div className="text-right text-orange-base col-span-2">
              {totalCost}
            </div>
            <div>บาท</div>
            <div className="text-right col-span-2">ค่าจัดส่ง</div>
            <div className="text-right col-span-2">{props.deliveryCost}</div>
            <div>บาท</div>
            <div className="text-right col-span-2">รวมการสั่งซื้อ</div>
            <div className="text-right text-orange-base col-span-2">
              {totalCost + props.deliveryCost}
            </div>
            <div>บาท</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderCard;
