import { FC } from "react";
import Image from "next/image";
import Social from "../common/Social";
type Props = {};

const Brand: FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-2 align-middle justify-center px-4 py-[128px] bg-white overflow-hidden 2xl:px-[128px] 3xl:px-[512px]">
      <section className="my-auto">
        <h4 className="text-[32px] font-bold animate-slide-from-left">
          อาหารเสริมจากสมุนไพร ได้มาตรฐาน อย.
        </h4>
        <div className="mt-[84px] ">
          <h4 className="text-[32px] font-bold animate-slide-in-bottom-left">
            <u className="text-[42px] text-dark-orange">ร้านสะพานโอสถ</u>{" "}
            ยินดีให้บริการ
            <br />
            และพร้อมให้คำแนะนำสำหรับลูกค้าทุกๆท่าน
          </h4>
        </div>
        {/* logo */}
        <div className="mt-[31px] animate-slide-in-bottom">
          <ul className="flex flex-col gap-[18px]">
            <li>
              <Social
                socialBrand={"facebook"}
                name={"Saphan Osoth"}
                link={"www.facebook.com"}
              />
            </li>
            <li>
              <Social
                socialBrand={"line"}
                name={"Saphan Osoth"}
                link={"www.facebook.com"}
              />
            </li>
            <li>
              <Social
                socialBrand={"instagram"}
                name={"Saphan Osoth"}
                link={"www.facebook.com"}
              />
            </li>
            <li>
              <Social
                socialBrand={"phone"}
                name={"Saphan Osoth"}
                link={"0912883920"}
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="h-[500px] flex flex-row items-center justify-center">
        <div className="relative">
          <Image
            src="/assets/brand.png"
            alt="brand"
            width={580}
            height={504}
            className="relative z-20 animate-image-focus-in"
          />
          <div className="absolute right-[-50px] top-[-15px] animate-slide-from-top z-10 w-[389px] h-[389px] bg-gradient-to-b from-[#F88800] to-[#FFD39D] rounded-full"></div>
          <div className="absolute left-[-50px] bottom-[-15px] animate-slide-from-bottom z-10 w-[389px] h-[389px] bg-gradient-to-t from-[#F88800] to-[#FFD39D] rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
