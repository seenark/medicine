import { atom, useAtom } from "jotai";

const isShowBankDetailAtom = atom(false);

export function useBankDetailModal() {
  const [isShow, setIsShow] = useAtom(isShowBankDetailAtom);

  return {
    isShow,
    setIsShow,
  };
}
