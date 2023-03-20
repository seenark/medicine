import { FC } from "react";
import Image from "next/image";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import HeartIcon from "@heroicons/react/24/solid/HeartIcon";
import { IProduct } from "@/mockup/product";
import Link from "next/link";

type Props = {
  product: IProduct;
};

const ProductCard4: FC<Props> = ({ product }) => {
  return (
    <div className="grid grid-cols-3 gap-4 rounded-xl overflow-hidden">
      <div className="col-span-2 rounded-xl overflow-hidden h-full bg-[url('/assets/ingredient-bg-2.png')] bg-cover">
        {/* <Image */}
        {/*   src="/assets/ingredient-bg-2.png" */}
        {/*   alt="bg" */}
        {/*   width={787} */}
        {/*   height={595} */}
        {/*   className="w-full h-full object-cover" */}
        {/* /> */}
      </div>
      <div className="rounded-xl overflow-hidden bg-white flex flex-col items-center p-4">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image[0].src}
            alt={product.image[0].alt}
            width={430}
            height={319}
          />
        </Link>
        <Link href={`/products/${product.id}`}>
          <div className="flex flex-col items-center p-8">
            <h4 className="text-[1.8rem] font-bold">{product.name}</h4>
            <p className="">{product.description}</p>
          </div>
        </Link>
        <div>
          <div className="flex flex-row items-center gap-2">
            <h4 className="text-[2rem] font-bold">{product.price}</h4>
            <ChevronRightIcon height={32} />
            <Link href={`/products/${product.id}`}>
              <h4 className="text-[1.8rem] font-bold">ซื้อ</h4>
            </Link>
            <HeartIcon
              color={product.isFavorited ? "red" : "gray"}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard4;
