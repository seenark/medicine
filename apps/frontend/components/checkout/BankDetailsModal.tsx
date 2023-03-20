import { FC } from "react";
import Image from "next/image";
import { TBankAccount } from "@/mockup/bankAccount";
import InfoModal from "../common/InfoModal";
import { useBankDetailModal } from "@/stores/bankDetails";

type Props = {
  bankAccounts: TBankAccount[];
};

const BankDetailsModal: FC<Props> = ({ bankAccounts }) => {
  const { isShow, setIsShow } = useBankDetailModal();
  return (
    <div>
      <InfoModal show={isShow} onClose={() => setIsShow(false)}>
        <div className="bg-white rounded-xl ">
          {bankAccounts.map((b, i) => (
            <div
              key={i}
              className="grid grid-cols-2 items-center border-b-2 border-base-gray"
            >
              <Image
                src={b.bankLogoUrl}
                alt="Kasikorn Bank"
                width={313}
                height={103}
              />
              <div className="grid grid-cols-2 gap-x-4 justify-center items-center w-full p-8 whitespace-nowrap">
                <div className="text-right">ชื่อบัญชี: </div>
                <div>{b.accName}</div>
                <div className="text-right">สาขา: </div>
                <div>{b.branchName}</div>
                <div className="text-right">เลขบัญชี: </div>
                <div>{b.accNumber}</div>
                <div className="text-right">ธนาคาร: </div>
                <div>{b.bankName}</div>
              </div>
            </div>
          ))}
        </div>
      </InfoModal>
    </div>
  );
};

export default BankDetailsModal;
