import { TProductInBasket } from "@/stores/basket";
import { FC } from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  products: TProductInBasket[];
  addAmountOfItemInBasket: (data: { amount: number; index: number }) => void;
  removeItemAtIndex: (atIndex: number) => void;
};

const CheckoutProductTable: FC<Props> = ({
  products,
  addAmountOfItemInBasket,
  removeItemAtIndex,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((b, i) => {
        const firstImage = b.product.image[0];
        return (
          <div
            key={i}
            className="p-8 border-b-2 border-[#DEDEDE] grid grid-cols-7 gap-4 text-[22px]"
          >
            <div className="flex items-center col-span-2">
              <Link href={`/products/${b.product.id}`}>
                <Image
                  src={firstImage.src}
                  alt={firstImage.alt}
                  width={159}
                  height={90}
                />
              </Link>
            </div>
            <div className="col-span-5 flex flex-col justify-between">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">{b.product.name}</div>
                <div className="text-right">{`${b.product.price} บาท`}</div>
                <div className="col-span-2 flex flex-row justify-center items-center gap-2">
                  <button
                    className="p-2 rounded-md bg-gray-300 h-[20px] w-[20px] flex items-center justify-center text-[24px]"
                    onClick={() =>
                      addAmountOfItemInBasket({ amount: -1, index: i })
                    }
                  >
                    -
                  </button>
                  <p>{b.amount}</p>
                  <button
                    className="p-2 rounded-md bg-gray-300 h-[20px] w-[20px] flex items-center justify-center text-[24px]"
                    onClick={() =>
                      addAmountOfItemInBasket({ amount: 1, index: i })
                    }
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  {b.product.price * b.amount} บาท
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-[35px] h-[35px] hover:bg-gray-200 flex items-center justify-center rounded-full">
                  <TrashIcon
                    color="gray"
                    width={26}
                    height={26}
                    className="cursor-pointer"
                    onClick={() => removeItemAtIndex(i)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutProductTable;
