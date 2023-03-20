import React, { FC } from "react";
import Image from "next/image";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import { IProduct } from "@/mockup/product";
import Link from "next/link";

type Props = {
  product: IProduct;
};

const BigCard: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-xl bg-white p-8">
      <Link href={`/products/${product.id}`}>
        <div className="flex flex-col gap-20 mt-8">
          <div className="flex flex-row justify-center">
            <Image
              src={product.image[0].src}
              alt={product.image[0].alt}
              width={646}
              height={415}
              className="h-full"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-[2rem] font-bold">{product.name}</h4>
            <p className="text-[20px] 3xl:px-[16rem] 2xl:px-32">
              {product.description}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-row justify-center items-center gap-2">
        <h4 className="text-[2rem] font-bold">{product.price}</h4>
        <ChevronRightIcon height={32} />
        <Link href={`/products/${product.id}`}>
          <h4 className="text-[1.8rem] font-bold">ซื้อ</h4>
        </Link>
        <HeartIcon color={product.isFavorited ? "red" : "gray"} height={32} />
      </div>
    </div>
  );
};

export default BigCard;
