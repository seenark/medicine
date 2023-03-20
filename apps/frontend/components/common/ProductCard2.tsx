import { IProduct } from "@/mockup/product";
import { FC } from "react";
import BigCard from "./productCard/BigCard";
import SmallCard from "./productCard/SmallCard";

type Props = {
  productBig: IProduct;
  productTopRight: IProduct;
  productBottomRight: IProduct;
};

const ProductCard2: FC<Props> = ({
  productBig,
  productTopRight,
  productBottomRight,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-rows-2 gap-4">
        <SmallCard product={productTopRight} />
        <SmallCard product={productBottomRight} />
      </div>
      <BigCard product={productBig} />
    </div>
  );
};

export default ProductCard2;
