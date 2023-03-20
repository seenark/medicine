import { TrashIcon } from "@heroicons/react/24/solid";
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  HandThumbUpIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";
import Image from "next/image";
import defaultTheme from "tailwindcss/defaultTheme";
import PurchaseHistory from "@/pages/purchase-history";
import { TPurchaseStatus } from "@/stores/order";

type Props = {
  currentStep: TPurchaseStatus;
};

const PurchaseStatus: FC<Props> = ({ currentStep }) => {
  const gray500 = "#64748b";
  const orangeBase = "#ff8717";

  return (
    <div>
      <div>
        <div>
          <h2 className="sr-only">Steps</h2>
          <div>
            <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-400 text-sm text-gray-500 sm:grid-cols-4">
              <li
                className={[
                  "flex items-center justify-center gap-2 p-4",
                  currentStep === "ToBePaid" ? "bg-white" : "",
                ].join(" ")}
              >
                <CurrencyDollarIcon
                  width={50}
                  height={50}
                  color={currentStep === "ToBePaid" ? orangeBase : gray500}
                />
                <p
                  className={[
                    "leading-none",
                    currentStep === "ToBePaid"
                      ? "text-orange-base"
                      : "text-gray-500",
                  ].join(" ")}
                >
                  <strong className="block font-medium">
                    กำลังรอการชำระเงิน
                  </strong>
                  <small className="mt-1">waiting your payment</small>
                </p>
              </li>

              <li
                className={[
                  "relative flex items-center justify-center gap-2 p-4",
                  currentStep === "Packing"
                    ? "text-orange-base bg-white"
                    : "text-gray-500",
                ].join(" ")}
              >
                {currentStep === "ToBePaid" && (
                  <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"></span>
                )}
                {currentStep === "Packing" && (
                  <>
                    <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-base-gray sm:block"></span>
                    <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-gray-50 sm:block"></span>
                  </>
                )}

                <Image
                  alt="cardboard box"
                  width={50}
                  height={50}
                  src={
                    currentStep === "Packing"
                      ? "/assets/icons/cardboard-box-96-orange-base.png"
                      : "/assets/icons/cardboard-box-96-gray-500.png"
                  }
                />

                <p className="leading-none">
                  <strong className="block font-medium">
                    กำลังเตรียมการจัดส่ง
                  </strong>
                  <small className="mt-1">We are packing your parcel</small>
                </p>
              </li>

              <li
                className={[
                  "relative flex items-center justify-center gap-2 p-4",
                  currentStep === "Develiring"
                    ? "text-orange-base bg-white"
                    : "text-gray-500",
                ].join(" ")}
              >
                {currentStep === "Packing" && (
                  <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"></span>
                )}
                {currentStep === "Develiring" && (
                  <>
                    <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-base-gray sm:block"></span>
                    <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-gray-50 sm:block"></span>
                  </>
                )}
                <TruckIcon
                  width={50}
                  height={50}
                  color={currentStep === "Develiring" ? orangeBase : gray500}
                />

                <p className="leading-none">
                  <strong className="block font-medium">
                    อยู่ในระหว่างขนส่งไปที่บ้านคุณ
                  </strong>
                  <small className="mt-1">Deliverying</small>
                </p>
              </li>
              <li
                className={[
                  "relative flex items-center justify-center gap-2 p-4",
                  currentStep === "Completed"
                    ? "text-orange-base bg-white"
                    : "text-gray-500",
                ].join(" ")}
              >
                {currentStep === "Develiring" && (
                  <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"></span>
                )}
                {currentStep === "Completed" && (
                  <>
                    <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-base-gray sm:block"></span>
                    <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-gray-50 sm:block"></span>
                  </>
                )}
                <HandThumbUpIcon
                  width={50}
                  height={50}
                  color={currentStep === "Completed" ? orangeBase : gray500}
                />

                <p className="leading-none">
                  <strong className="block font-medium">จัดส่งสำเร็จ</strong>
                  <small className="mt-1">Completed</small>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseStatus;
