import { TOrder } from "@/mockup/order";
import { IProduct } from "@/mockup/product";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useMemo } from "react";

export type TProductInBasket = {
  amount: number;
  product: IProduct;
};

const basketAtom = atom<TProductInBasket[]>([]);

const addProductToBasketAtom = atom<null, [TProductInBasket], void>(
  null,
  (get, set, update) => {
    const oldOrderList = get(basketAtom);
    const existingProductInBasketIndex = oldOrderList.findIndex(
      (item) => item.product.id === update.product.id
    );
    if (existingProductInBasketIndex === -1) {
      set(basketAtom, [...oldOrderList, update]);
    } else {
      oldOrderList[existingProductInBasketIndex].amount += update.amount;
      set(basketAtom, [...oldOrderList]);
    }
  }
);

const addProductToBasketAtIndexAtom = atom<
  null,
  [{ amount: number; index: number }],
  void
>(null, (get, set, updateData) => {
  const oldItems = get(basketAtom);
  oldItems[updateData.index].amount += updateData.amount;
  if (oldItems[updateData.index].amount === 0) {
    oldItems.splice(updateData.index, 1);
  }
  set(basketAtom, [...oldItems]);
});

const getCountedItemsInBasketAtom = atom((get) => {
  return get(basketAtom).reduce((pre, cur) => pre + cur.amount, 0);
});

const removeItemFromBasketAtIndexAtom = atom<null, [number], void>(
  null,
  (get, set, atIndex) => {
    const oldItems = get(basketAtom);
    oldItems.splice(atIndex, 1);
    set(basketAtom, [...oldItems]);
  }
);

const getTotalPriceAtom = atom((get) => {
  return get(basketAtom)
    .map((item) => item.amount * item.product.price)
    .reduce((pre, cur) => pre + cur, 0);
});

export function useBasket() {
  const [basket, setBasket] = useAtom(basketAtom);
  const getBasket = useAtomValue(basketAtom);
  const getCountedItemsInBasket = useAtomValue(getCountedItemsInBasketAtom);
  const getTotalPrice = useAtomValue(getTotalPriceAtom);
  const addProductToBasket = useSetAtom(addProductToBasketAtom);
  const addProductToBasketAtIndex = useSetAtom(addProductToBasketAtIndexAtom);
  const removeItemFromBasketAtIndex = useSetAtom(
    removeItemFromBasketAtIndexAtom
  );
  const removeAllItemsInBasket = useCallback(() => {
    setBasket(() => []);
  }, [setBasket]);
  // const getCountedItemsInBasket = useMemo(() => {
  //   return getBasket.reduce((pre, cur) => pre + cur.amount, 0);
  // }, [getBasket]);

  return {
    addProductToBasket,
    getBasket,
    getCountedItemsInBasket,
    addProductToBasketAtIndex,
    removeItemFromBasketAtIndex,
    getTotalPrice,
    removeAllItemsInBasket,
  };
}
