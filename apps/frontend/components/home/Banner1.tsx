import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBanner1Item } from "@/mockup/banner1";

type Props = {
  items: IBanner1Item[];
};

const Banner1: FC<Props> = ({ items }) => {
  const [scaledItemNumber, setScaledItemNumber] = useState(-1);
  useEffect(() => {
    const interval = setInterval(() => {
      setScaledItemNumber((i) => {
        if (i >= items.length - 1 || i < 0) {
          return 0;
        }
        return i + 1;
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [items.length]);

  return (
    <div className="bg-[url('/assets/banner1.svg')] h-[336px] 2xl:px-[128px] 3xl:px-[512px] bg-cover bg-center bg-no-repeat flex flex-row items-end justify-around pb-1">
      {items.map((item, i) => (
        <Link href={item.link} key={i}>
          <Image
            src={item.imgSrc}
            alt={item.alt}
            width={246}
            height={249}
            className={[
              scaledItemNumber === i
                ? "animate-scale-up-bottom"
                : "animate-scale-up-bottom-reverse",
            ].join(" ")}
          />
        </Link>
      ))}
    </div>
  );
};

export default Banner1;
