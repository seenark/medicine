import { IProduct } from "@/mockup/product";
import { FC, useEffect, useState } from "react";
import Card from "./Card";

type Props = {
  products: [IProduct, IProduct];
};

const SwapCardBanner: FC<Props> = ({ products }) => {
  const [isFront, setIsFront] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIsFront((old) => {
        if (old === 0) return 1;
        else return 0;
      });
    }, 7000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center px-4 bg-white overflow-hidden 2xl:px-[128px] 3xl:px-[512px] py-8">
      <div className="relative h-[639px] w-[1233px]">
        <div
          className={[
            "absolute z-0 h-[639px] w-[1233px]",
            isFront === 0
              ? "animate-move-to-left-to-front"
              : "animate-move-to-right-to-back",
          ].join(" ")}
        >
          <div>
            <Card bgColor="#f4e5e5" product={products[0]} />
          </div>
        </div>

        {/* <div className="absolute z-10 h-[639px] w-[1233px] animate-move-to-right-to-back"> */}
        <div
          className={[
            "absolute z-10 h-[639px] w-[1233px] ",
            isFront === 1
              ? "animate-move-to-left-to-front"
              : "animate-move-to-right-to-back",
          ].join(" ")}
        >
          <div className="top-1">
            <Card bgColor="#f4d5e5" product={products[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapCardBanner;
