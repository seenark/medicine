import BankDetailsModal from "@/components/checkout/BankDetailsModal";
import CheckoutProductTable from "@/components/checkout/CheckoutProductTable";
import PaymentMethodCard from "@/components/checkout/PaymentMethodCard";
import Profile from "@/components/layout/Profile";
import { bankAccounts } from "@/mockup/bankAccount";
import { useBasket } from "@/stores/basket";
import { TrashIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";

type Props = {};

const Checkout: NextPage<Props> = () => {
  const {
    getBasket,
    addProductToBasketAtIndex,
    removeItemFromBasketAtIndex,
    getCountedItemsInBasket,
    getTotalPrice,
    removeAllItemsInBasket,
  } = useBasket();
  const router = useRouter();

  const onClickPay = useCallback(() => {
    console.log("clicked pay");
    router.push("/checkout/confirm-checkout");
  }, [router]);

  return (
    <Profile name="John" image="">
      <section className="grid grid-cols-3 gap-[70px] mb-64 mt-[8rem]">
        <div className="col-span-2">
          <div className="bg-white p-4 rounded-xl">
            <h3 className="font-bold text-[24px] mb-8">สินค้าในถุง</h3>
            <CheckoutProductTable
              products={getBasket}
              addAmountOfItemInBasket={addProductToBasketAtIndex}
              removeItemAtIndex={removeItemFromBasketAtIndex}
            />
            <div
              className="flex flex-row  justify-end items-center mt-8 "
              onClick={removeAllItemsInBasket}
            >
              <div className="gap-4 flex flex-row cursor-pointer py-2 px-4 rounded-xl hover:bg-gray-200 hover:border-black-2">
                <TrashIcon width={26} height={26} color="gray" />
                <span>นำสินค้าทั้งหมดออกจากถุง</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-end p-4 gap-4 font-bold">
            <Link className="py-2 px-4 bg-gray-400 rounded-xl" href="/">
              เลือกซื้อสินค้าเพิ่ม
            </Link>
            <button
              className="py-2 px-4 bg-orange-base rounded-xl"
              onClick={onClickPay}
            >
              ชำระเงิน
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col bg-white rounded-xl p-4">
            <h3 className="font-bold text-[24px] text-center">
              ยอดรวมตะกร้าสินค้า
            </h3>
            <div className="flex flex-col mt-8">
              <div className="flex flex-row justify-between text-[18px]">
                <span>ยอดรวมสินค้า</span>
                <span>{getCountedItemsInBasket} ชิ้น</span>
              </div>
              <div className="flex flex-row justify-between text-[18px]">
                <span></span>
                <span>
                  <u>{getTotalPrice} บาท</u>
                </span>
              </div>
              <div className="flex flex-row justify-between text-[18px]">
                <span>ส่วนลด</span>
                <span>-</span>
              </div>
              <div className="flex flex-row justify-between text-[18px]">
                <span>ค่าจัดส่ง</span>
                <span>60 บาท</span>
              </div>
              <div className="flex flex-row justify-around text-[18px] font-bold mt-8">
                <span>รวม</span>
                <span className="text-orange-base">
                  {getTotalPrice + 60} บาท
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <PaymentMethodCard />
          </div>
        </div>
      </section>
      <BankDetailsModal bankAccounts={bankAccounts} />
    </Profile>
  );
};

export default Checkout;
