import { IProduct, products } from "@/mockup/product";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useCallback, useState } from "react";
import { TProductInBasket, useBasket } from "@/stores/basket";
import { PhotoIcon } from "@heroicons/react/24/outline";

type Props = {
  product: IProduct;
};

const ProductId: NextPage<Props> = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const { addProductToBasket } = useBasket();

  const addToBasket = useCallback(() => {
    const item: TProductInBasket = {
      amount: amount,
      product: product,
    };
    addProductToBasket(item);
  }, [addProductToBasket, amount, product]);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-16 px-16 items-center pb-64">
        <div className="flex justify-center">
          <div className="w-[750px] h-[auto] mt-8 border-2 border-gray-300 rounded-box">
            <div className="carousel carousel-center p-4 max-w-16 space-x-4 bg-base-gray rounded-box">
              {product.image.map((img, i) => (
                <div className="carousel-item">
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    width={550}
                    height={422}
                    className="rounded-box"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col py-8 mr-32">
          <h4 className="text-[32px] font-bold">{product.name}</h4>
          <div>
            <h5 className="text-[24px] font-bold">รายละเอียดสินค้า</h5>
            <p className="p-16 bg-white rounded-md text-[18px]">
              {product.description}
            </p>
          </div>
          <div className="my-8 flex flex-col gap-6">
            <div className="px-4 py-2 bg-[#FFC885] rounded-lg font-bold text-[24px] flex justify-center items-center">
              ราคา {product.price} บาท
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <span className="text-[18px] font-bold">จำนวน</span>
              <button
                className="p-2 rounded-md bg-gray-300 h-[20px] w-[20px] flex items-center justify-center text-[24px]"
                onClick={() => setAmount((old) => (old -= 1))}
              >
                -
              </button>
              <p>{amount}</p>
              <button
                className="p-2 rounded-md bg-gray-300 h-[20px] w-[20px] flex items-center justify-center text-[24px]"
                onClick={() => setAmount((old) => (old += 1))}
              >
                +
              </button>
              <div className="rounded-lg bg-orange-base text-black px-4 py-2 font-bold">
                <button onClick={addToBasket}>ใส่ลงในถุง</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-32">
        <h3 className="text-[30px] font-bold">รีวิวสินค้า</h3>
        <div className="flex flex-col gap-8">
          <div className="bg-white p-4 rounded-xl flex flex-col gap-6">
            <textarea
              className="textarea border-1 border-gray-400 w-full text-[18px]"
              placeholder="เขียนรีวิวสินค้า"
            ></textarea>
            <div className="rating rating-md">
              <input type="radio" name="rating-2" className="rating-hidden" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="flex flex-row justify-between">
              <button>
                <Image
                  src="/assets/icons/add-photo.png"
                  alt="add photo"
                  width={45}
                  height={45}
                />
              </button>
              <button className="px-4 py-2 rounded-xl bg-orange-base text-white font-bold">
                โพสต์
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4 bg-white rounded-xl p-4">
            <div className="flex flex-row gap-4">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <Image
                    src="/assets/person_default.png"
                    alt="person"
                    width={47}
                    height={47}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-center">
                <strong className="text-[28px]">John***</strong>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    disabled
                    className="rating-hidden"
                  />
                  <input
                    type="radio"
                    disabled
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-10">
              <div>2022-10-29 08:30 | สินค้า ฟหดฟ่วหาด่ฟวหาด่วฟห่าวดฟา</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  if (!ctx.params) {
    return {
      notFound: true,
    };
  }
  const id = ctx.params.id;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const product = products.find((p) => p.id === id);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths = products.map((p) => {
    return {
      params: { id: p.id },
    };
  });
  return {
    paths: [...allPaths],
    fallback: false,
  };
};

export default ProductId;
