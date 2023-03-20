import { GetServerSideProps, NextPage } from "next";
import Profile from "../components/layout/Profile";
import {
  LegacyRef,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Overall from "@/components/purchase-history/Overall";
import { order1, order2, orderHistory, TOrder } from "@/mockup/order";
import { IProduct } from "@/mockup/product";
import PurchaseStatus from "@/components/purchase-history/PurchaseStatus";
import { TPurchaseStatus } from "@/stores/order";
import OrderCard from "@/components/purchase-history/OrderCard";

type Props = {
  products: IProduct[];
  historyOrders: TOrder[];
};

const PurchaseHistory: NextPage<Props> = (props) => {
  const [currentTab, setCurrentTab] = useState<0 | 1 | 2 | 3 | 4>(0);

  const allTabRefs = useRef<(HTMLLIElement | null)[]>([]);
  type TTabPositon = {
    left: number;
    width: number;
  };
  const [currentTabPosition, setCurrentTabPosition] = useState<TTabPositon>({
    left: 32,
    width: 0,
  });

  useEffect(() => {
    function setTabPosition() {
      const currentElm = allTabRefs.current[currentTab];
      if (!currentElm) {
        return;
      }
      setCurrentTabPosition(() => ({
        left: currentElm.offsetLeft,
        width: currentElm.clientWidth,
      }));
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => {
      window.removeEventListener("resize", setTabPosition);
    };
  }, [currentTab]);

  const onClickOverall: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setCurrentTab(0);
    }, []);
  const onClickToBePay = useCallback(() => {
    setCurrentTab(1);
  }, []);
  const onClickToBeDelivery = useCallback(() => {
    setCurrentTab(2);
  }, []);
  const onClickDeliverying = useCallback(() => {
    setCurrentTab(3);
  }, []);
  const onClickCompleted = useCallback(() => {
    setCurrentTab(4);
  }, []);

  const purchaseStatusText = useMemo<TPurchaseStatus>(() => {
    if (currentTab === 1) {
      return "ToBePaid";
    } else if (currentTab === 2) {
      return "Packing";
    } else if (currentTab === 3) {
      return "Develiring";
    } else if (currentTab === 4) {
      return "Completed";
    } else {
      return "ToBePaid";
    }
  }, [currentTab]);

  return (
    <Profile name="John Doe" image="">
      <h4 className="text-[28px] font-[500] underline">ประวัติการซื้อ</h4>
      {props.products.length === 0 && (
        <div className="flex flex-col items-center p-4 bg-white rounded-xl mt-8">
          <h4 className="text-[28px] font-bold">คุณยังไม่เคยซื้อของของเรา</h4>
        </div>
      )}
      {props.products.length > 0 && (
        <div className="flex flex-col items-center pl-[48px] w-full mt-8 gap-8">
          <ul className="grid grid-cols-5 grid-rows-tab justify-between 3xl:text-[24px] 2xl:text-[20px] font-bold gap-x-[76px] py-4 px-8 bg-white rounded-xl w-full relative">
            <li
              className="flex justify-center"
              ref={(el) => (allTabRefs.current[0] = el)}
            >
              <button onClick={onClickOverall}>ทั้งหมด</button>
            </li>
            <li
              className="flex justify-center"
              ref={(el) => (allTabRefs.current[1] = el)}
            >
              <button onClick={onClickToBePay}>ที่ต้องชำระ</button>
            </li>
            <li
              className="flex justify-center"
              ref={(el) => (allTabRefs.current[2] = el)}
            >
              <button onClick={onClickToBeDelivery}>ที่ต้องจัดส่ง</button>
            </li>
            <li
              className="flex justify-center"
              ref={(el) => (allTabRefs.current[3] = el)}
            >
              <button onClick={onClickDeliverying}>กำลังจัดส่ง</button>
            </li>
            <li
              className="flex justify-center"
              ref={(el) => (allTabRefs.current[4] = el)}
            >
              <button onClick={onClickCompleted}>จัดส่งสำเร็จ</button>
            </li>
            <li className="rounded col-span-5">
              <div
                style={{
                  left: currentTabPosition.left,
                  width: currentTabPosition.width,
                }}
                className="absolute border-b-4 border-orange-base transition-all duration-300"
              ></div>
            </li>
          </ul>
          <div className="flex flex-col w-full mb-8">
            {currentTab === 0 && (
              <Overall historyOrders={props.historyOrders} />
            )}
            {currentTab > 0 && (
              <div className="flex flex-col gap-8">
                <PurchaseStatus currentStep={purchaseStatusText} />
                {currentTab === 1 && (
                  <OrderCard
                    orderStatus={"ToBePaid"}
                    orders={order1}
                    deliveryCost={60}
                  />
                )}
                {currentTab === 2 && (
                  <OrderCard
                    orderStatus={"Packing"}
                    orders={order2}
                    deliveryCost={60}
                  />
                )}
                {currentTab === 3 && (
                  <OrderCard
                    orderStatus={"Develiring"}
                    orders={order1}
                    deliveryCost={60}
                  />
                )}
                {currentTab === 4 && (
                  <OrderCard
                    orderStatus={"Completed"}
                    orders={order2}
                    deliveryCost={60}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </Profile>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  return {
    props: {
      products: [
        {
          id: "22",
          image: [
            {
              src: "/assets/tmp/product10.png",
              alt: "test",
            },
          ],
          productUrl: "#",
          name: "กระชายขาวสกัด",
          description:
            "กระชายเป็นพืชสมุนไพรพื้นบ้านที่มีการใช้เป็นอาหารและยามานาน ภูมิปัญญาพื้นบ้านใช้แก้โรคที่เกิดในปาก เช่น ปากเปื่อย ปากเป็นแผล รักษาอาการจมูกไม่ได้กลิ่น ไซนัสอักเสบ ช่วยย่อยอาหาร เพิ่มสมรรถภาพทางเพศชองเพศชาย ยาอายุวัฒนะบำรุงกำลัง แก้ปวดเมื่อย แก้ลมวิงเวียน",
          price: 240,
          isFavorited: false,
        },
        {
          id: "21",
          image: [
            {
              src: "/assets/tmp/product11.png",
              alt: "test",
            },
          ],
          productUrl: "#",
          name: "ซีเคเอ็ม ยาบรรเทาอาการท้องผูก",
          description: "สรรพคุณ ยาระบาย บรรเทาอาการท้องผูก",
          price: 120,
          isFavorited: false,
        },
      ],
      historyOrders: orderHistory,
    },
  };
};

export default PurchaseHistory;
