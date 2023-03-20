import { IProduct } from "@/mockup/product";
import { FC } from "react";
import BigCard from "./productCard/BigCard";
import SmallCard from "./productCard/SmallCard";
import SmallCard2 from "./productCard/SmallCard2";

type Props = {
  productLeft: IProduct;
  productRight: IProduct;
};

const ProductCard3: FC<Props> = ({ productLeft, productRight }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SmallCard2 product={productLeft} />
      <SmallCard2 product={productRight} />
    </div>
  );
};

export default ProductCard3;
