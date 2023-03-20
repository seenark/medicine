import { FC } from "react";
import Image from "next/image";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import { IProduct } from "@/mockup/product";
import Link from "next/link";

type Props = {
  product: IProduct;
};

const SmallCard: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col items-center rounded-xl bg-white p-8 gap-4 justify-between">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image[0].src}
          alt={product.image[0].alt}
          width={391}
          height={190}
        />
      </Link>
      <Link href={`/products/${product.id}`}>
        <div className="text-center">
          <h4 className="text-[2rem] font-bold">{product.name}</h4>
          <p className="text-[20px] 3xl:px-[16rem] 2xl:px-32">
            {product.description}
          </p>
        </div>
      </Link>
      <div className="flex flex-row items-center gap-2">
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

export default SmallCard;
