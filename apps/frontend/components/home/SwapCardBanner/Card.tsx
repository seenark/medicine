import React, { FC } from "react";
import Image from "next/image";
import { IProduct, products } from "@/mockup/product";
import Link from "next/link";

type Props = {
  bgColor: string;
  product: IProduct;
};

const Card: FC<Props> = ({ product, bgColor }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div style={{ backgroundColor: `${bgColor}` }} className="rounded-2xl">
        <div className="grid grid-cols-2 align-middle justify-center h-[auto] pb-[16px]">
          <div className="flex flex-col items-center relative">
            <div className="absolute top-[56px] left-[25%]">
              <Image
                src={product.image[0].src}
                alt={product.image[0].alt}
                width={388}
                height={388}
              />
            </div>
            <div className="absolute top-[229px] left-[50%]">
              <Image
                src="/assets/tmp/swap-banner-product1-1.png"
                alt="p1-2"
                width={376}
                height={330}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[73px] py-[24px] items-center">
            <div className="text-[#863507] font-[700] px-[25px] py-[10px] flex flex-col items-center justify-center bg-[#FFE4CB] rounded-[20px]">
              <h1 className="text-[34px] whitespace-nowrap">{product.name}</h1>
              <p className="text-[26px]">ใช้วัตถุให้ความหวานแทนน้ำตาล</p>
            </div>
            <div className="text-[#863507] font-[700] w-[415px] px-[25px] py-[10px] flex flex-col items-center justify-center bg-[#FFE4CB] rounded-[20px]">
              <p className="text-[24px] line-clamp-6">{product.description} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
