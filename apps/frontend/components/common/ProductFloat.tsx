import { FC, RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IProduct } from "@/mockup/product";
import Link from "next/link";

type Props = {
  product: IProduct;
  backgroundImage: {
    src: string;
    alt: string;
  };
};

function isElementVisibleInVertical(
  element: RefObject<HTMLDivElement>
): boolean {
  if (!element.current) {
    return false;
  }
  // const windowY = window.scrollY;
  const viewportHeight = window.innerHeight;

  const elmBound = element.current.getBoundingClientRect();
  const elementY = elmBound.y;

  if (elementY < 0 || elementY > viewportHeight) {
    return false;
  }

  return true;
}

const ProductFloat: FC<Props> = ({ product, backgroundImage }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const minYPercent = -32;
  const maxYPercent = -60;
  const [y, setY] = useState(maxYPercent);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!imageRef.current) return;
      const isVisible = isElementVisibleInVertical(imageRef);
      const viewportHeight = window.innerHeight;
      const bodyBound = document.body.getBoundingClientRect();
      const elmBound = imageRef.current.getBoundingClientRect();
      if (!isVisible) {
        return;
      }
      const maxDiff = bodyBound.height - Math.abs(bodyBound.y - elmBound.y);
      const diff = viewportHeight - elmBound.y;
      const add = ((maxYPercent - minYPercent) * diff) / maxDiff;
      setY(() => maxYPercent - add);
    });
  }, [maxYPercent, minYPercent]);
  return (
    <Link href={`/products/${product.id}`}>
      <div className="grid grid-cols-12 bg-[#FFEFDC] relative rounded-xl overflow-hidden">
        <div className="col-span-5 px-16 py-32 flex items-center justify-center">
          <p className="text-[1.6rem]">
            ตำรายาพื้นบ้าน: ใช้เถา ขับปัสสาวะ แก้บิด แก้หวัด
            ใช้เถาคั่วไฟให้หอมชงน้ำกินแก้ปวดเมื่อย แก้เส้นเอ็นพิการ
            แก้เมื่อยขบในร่างกาย แก้กระษัยเหน็บชา ต้มรับประทานถ่ายเส้น
            ถ่ายกระษัย แก้เส้นเอ็นขอด ถ่ายเสมหะ ไม่ถ่ายอุจจาระ
            เหมาะที่จะใช้ในโรคบิด ไอ หวัด ใช้ในเด็กได้ดี แก้ปวด แก้ไข้
            ทำให้เส้นเอ็นอ่อนลง ขับปัสสาวะ แก้ปัสสาวะพิการ
            บางตำรากล่าวว่าทำให้มีกำลังดีแข็งแรงสู้ไม่ถอย
            เป็นสมุนไพรที่มีการนำมาใช้ในสูตรยาอบสมุนไพรเพื่อสุขภาพโดยใช้เป็นส่วนประกอบเพิ่มเติมจากสูตรยาอบสมุนไพรหลัก
            เมื่อต้องการอบเพื่อรักษาอาการปวดเมื่อย ปวดหลัง ปวดเอวเป็นต้น
          </p>
        </div>
        <div className="col-start-7 col-end-13 flex items-center justify-center bg-[url('/assets/ingredient-bg.png')] w-full h-full bg-no-repeat bg-cover"></div>
        <div
          ref={imageRef}
          className="absolute left-[50%] top-[50%] transition-all ease-in-out duration-[0] delay-[0]"
          style={{ transform: `translate(-50%, ${y}%)` }}
        >
          <Image
            src={product.image[0].src}
            alt={product.image[0].alt}
            width={386}
            height={386}
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductFloat;
