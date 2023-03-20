import Image from "next/image";
import { FC } from "react";

type Props = {
  itemCount: number;
};

const ShoppingBag: FC<Props> = ({ itemCount }) => {
  return (
    <div className="relative">
      <Image
        src="/assets/ShoppingBag.svg"
        alt="shopping bag icon"
        width={32}
        height={32}
      />
      {itemCount > 0 && (
        <span className="absolute bottom-[-10px] right-[-10px] flex justify-center items-center rounded-full p-[4px] w-[25px] h-[25px] bg-[#656863]">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default ShoppingBag;
