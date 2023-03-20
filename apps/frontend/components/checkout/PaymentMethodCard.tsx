import { FC } from "react";
import Image from "next/image";
import { useBankDetailModal } from "@/stores/bankDetails";

type Props = {};

const PaymentMethodCard: FC<Props> = (props) => {
  const { setIsShow } = useBankDetailModal();
  return (
    <div className="bg-white rounded-xl w-full p-4 flex justify-center">
      <div className="">
        <h5 className="text-center mb-4">ช่องทางการชำระเงิน</h5>
        <div className="grid grid-cols-3 justify-items-center items-center gap-[23px]">
          <Image
            src="/assets/payments/Promptpay.png"
            alt="prompt pay logo"
            width={52}
            height={52}
            onClick={() => setIsShow(true)}
          />
          <Image
            src="/assets/payments/Mobile_Banking.png"
            alt="prompt pay logo"
            width={52}
            height={52}
            onClick={() => setIsShow(true)}
          />
          <Image
            src="/assets/payments/MasterCard.png"
            alt="prompt pay logo"
            width={52}
            height={52}
          />
          <Image
            src="/assets/payments/Visa.png"
            alt="prompt pay logo"
            width={52}
            height={52}
          />
          <Image
            src="/assets/payments/123Service.png"
            alt="prompt pay logo"
            width={52}
            height={52}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
