import { FC } from "react";
import Image from "next/image";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import { IProduct } from "@/mockup/product";
import Link from "next/link";

type Props = {
  product: IProduct;
};

const SmallCard2: FC<Props> = ({ product }) => {
  return (
    <div className="grid grid-cols-7 justify-items-center items-center rounded-xl bg-white px-8 py-32 gap-16">
      <Link href={`/products/${product.id}`} className="col-span-3">
        <Image
          src={product.image[0].src}
          alt={product.image[0].alt}
          width={337}
          height={389}
        />
      </Link>
      <div className="col-span-4 flex flex-col">
        <h4 className="text-[2rem] font-bold">{product.name}</h4>
        <div className="text-[1.8rem]">{product.description}</div>

        <div className="flex flex-row items-center gap-2 mt-10">
          <h4 className="text-[2rem] font-bold">{product.price}</h4>
          <ChevronRightIcon height={32} />
          <Link href={`/products/${product.id}`}>
            <h4 className="text-[1.8rem] font-bold">ซื้อ</h4>
          </Link>
          <HeartIcon color={product.isFavorited ? "red" : "gray"} height={32} />
        </div>
      </div>
    </div>
  );
};

export default SmallCard2;
