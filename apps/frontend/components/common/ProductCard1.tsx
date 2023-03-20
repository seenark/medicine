import { FC } from "react";
import Image from "next/image";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import BigCard from "./productCard/BigCard";
import SmallCard from "./productCard/SmallCard";
import { IProduct } from "@/mockup/product";

type Props = {
  productBig: IProduct;
  productTopRight: IProduct;
  productBottomRight: IProduct;
};

const ProductCard1: FC<Props> = ({
  productBig,
  productTopRight,
  productBottomRight,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <BigCard product={productBig} />
      <div className="grid grid-rows-2 gap-4">
        <SmallCard product={productTopRight} />
        <SmallCard product={productBottomRight} />
      </div>
    </div>
  );
};

export default ProductCard1;
