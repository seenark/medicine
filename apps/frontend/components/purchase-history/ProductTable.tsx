import React, { FC } from "react";
import Image from "next/image";
import { TOrder } from "@/mockup/order";

type Props = {
  products: TOrder["product"];
};

const ProductTable: FC<Props> = (props) => {
  return (
    <div className="w-full">
      {props.products.map((product, index) => (
        <div
          key={index}
          className="p-8 border-b-2 border-[#DEDEDE] grid grid-cols-7 gap-4"
        >
          <div className="col-span-2">
            <Image
              src={product.item.image[0].src}
              alt={product.item.image[0].alt}
              width={159}
              height={90}
            />
          </div>
          <div className="col-span-2">{product.item.name}</div>
          <div>{product.item.price} บาท</div>
          <div>x {product.amount}</div>
          <div>{product.amount * product.item.price} บาท</div>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
