import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import ShoppingBag from "ui/ShoppingBag";
import Searchbar from "ui/searchbar";
import Social from "../common/Social";
import { useBasket } from "@/stores/basket";

type Props = {};

type IMenu = {
  name: string;
  link: string;
};
const menus: IMenu[] = [
  {
    name: "หน้าหลัก",
    link: "/",
  },
  {
    name: "สินค้าถูกใจ",
    link: "#",
  },
  {
    name: "บทความ",
    link: "#",
  },
  {
    name: "ติดต่อ",
    link: "/contact-us",
  },
  {
    name: "โปรไฟล์",
    link: "/profile",
  },
];

const Layout: FC<PropsWithChildren<Props>> = (props) => {
  const { getCountedItemsInBasket } = useBasket();
  return (
    <>
      <header className="h-[101px] bg-gradient-to-r to-[#292A28] from-[#656863] text-white flex items-center justify-center w-full">
        <div className="container flex flex-row justify-between items-center">
          <Link href={"/"}>
            <Image src="/assets/Logo.png" alt="Logo" width={168} height={69} />
          </Link>
          <div className="flex flex-row gap-[78px]">
            <ul className="flex flex-row gap-[42px] items-center">
              <li>
                <Searchbar />
              </li>
              {menus.map((m, i) => (
                <li key={i}>
                  <Link href={m.link}>{m.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-row items-center">
              <li>
                <Link href="/checkout">
                  <ShoppingBag itemCount={getCountedItemsInBasket} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {props.children}
      <footer className="h-[69px] bg-gradient-to-r to-[#292A28] from-[#656863] text-white flex flex-row items-center justify-between px-8 ">
        <div className="flex flex-row items-center text-[#98A2B3] gap-8">
          <Link href="/">©Saphan Ohsoth 2023</Link>
          <Link href="/">Privacy policy</Link>
          <Link href="/">Cookies</Link>
          <Link href="/">Terms of service</Link>
        </div>
        <div className="flex flex-row items-center gap-8">
          <Social
            socialBrand={"facebook"}
            name={"Saphan Osoth"}
            link={"www.facebook.com"}
          />
          <Social
            socialBrand={"line"}
            name={"Saphan Osoth"}
            link={"www.facebook.com"}
          />
          <Social
            socialBrand={"instagram"}
            name={"Saphan Osoth"}
            link={"www.facebook.com"}
          />
          <Social
            socialBrand={"phone"}
            name={"Saphan Osoth"}
            link={"0912883920"}
          />
        </div>
      </footer>
    </>
  );
};

export default Layout;
