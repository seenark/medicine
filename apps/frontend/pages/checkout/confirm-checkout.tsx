import BankDetailsModal from "@/components/checkout/BankDetailsModal";
import CheckoutProductTable from "@/components/checkout/CheckoutProductTable";
import ConfirmCheckoutProductTable from "@/components/checkout/ConfirmCheckoutProductTable";
import PaymentMethodCard from "@/components/checkout/PaymentMethodCard";
import Profile from "@/components/layout/Profile";
import { bankAccounts } from "@/mockup/bankAccount";
import { useBasket } from "@/stores/basket";
import { TrashIcon } from "@heroicons/react/24/solid";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type Props = {
  orderId: string;
};

const ConfirmCheckout: NextPage<Props> = ({ orderId }) => {
  const { getBasket, getCountedItemsInBasket, getTotalPrice } = useBasket();

  const router = useRouter();
  return (
    <Profile name="John" image="">
      <section className="grid grid-cols-3 gap-[70px] mb-64 mt-[8rem]">
        <h3 className="col-span-3 font-bold text-[28px]">ยืนยันการชำระเงิน</h3>
        <div className="col-span-2">
          <div className="bg-white p-4 rounded-xl">
            <h3 className="font-bold text-[24px] mb-8">
              เลขที่คำสั่งซื้อ{" "}
              <span className="bg-gray-200 px-1 font-normal">#{orderId}</span>
            </h3>
            <ConfirmCheckoutProductTable products={getBasket} />
          </div>
          <div className="mt-4 flex flex-row justify-end p-4 gap-4 font-bold">
            <button
              className="py-2 px-4 bg-orange-base rounded-xl"
              onClick={() => router.push("/purchase-history")}
            >
              ยืนยัน
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

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      orderId: "123456",
    },
  };
};

export default ConfirmCheckout;
