import { TProductInBasket } from "@/stores/basket";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: TProductInBasket[];
};

const ConfirmCheckoutProductTable: FC<Props> = ({ products }) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((b, i) => {
        const firstImage = b.product.image[0];
        return (
          <div
            key={i}
            className="p-8 border-b-2 border-[#DEDEDE] grid grid-cols-7 gap-4 text-[22px]"
          >
            <div className="flex items-center col-span-2">
              <Link href={`/products/${b.product.id}`}>
                <Image
                  src={firstImage.src}
                  alt={firstImage.alt}
                  width={159}
                  height={90}
                />
              </Link>
            </div>
            <div className="col-span-5 flex flex-col justify-between">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">{b.product.name}</div>
                <div className="text-right">{`${b.product.price} บาท`}</div>
                <div className="col-span-2 flex flex-row justify-center items-center gap-2">
                  <p>x {b.amount}</p>
                </div>
                <div className="text-right">
                  {b.product.price * b.amount} บาท
                </div>
              </div>
              <div className="flex justify-end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConfirmCheckoutProductTable;
