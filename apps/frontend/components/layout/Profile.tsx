import React, { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
};

const Profile: FC<PropsWithChildren<Props>> = ({ children, name, image }) => {
  return (
    <main className="3xl:px-[712px] 2xl:px-[412px] mx-auto flex flex-row">
      <aside className="w-[280px] flex flex-col items-center bg-white py-[39px] border-r-[1px] border-[#AAAAAA]">
        <Image
          src={
            image === "" || image === undefined
              ? "/assets/person_default.png"
              : image
          }
          alt="person"
          width={159}
          height={159}
          className="rounded-full border-8 border-[#FF8717]"
        />
        <h4 className="text-[28px] font-bold p-4">{name || "No name"}</h4>
        <hr className="border-t-[#AAAAAA] border-[1px] w-[80%]" />
        <Link
          href="/purchase-history"
          className="p-[28px] text-[28px] font-bold"
        >
          ประวัติการซื้อ
        </Link>
      </aside>
      <section className="flex flex-col pl-[48px] w-full pt-12 animate-slide-in-left overflow-hidden">
        {children}
      </section>
    </main>
  );
};

export default Profile;
