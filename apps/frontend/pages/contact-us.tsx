import Social from "@/components/common/Social";
import Profile from "@/components/layout/Profile";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

type Props = {};

const ContactUs: NextPage<Props> = (props) => {
  return (
    <Profile name="John" image="">
      <div className="grid grid-cols-2 mb-32">
        <div className="flex flex-col gap-16">
          <h3 className="text-[32px] font-bold">ปรึกษาเรา</h3>
          <div className="flex flex-col justify-start gap-4">
            <Social socialBrand={"email"} name={"a@a.com"} link={"a@a.com"} />
            <Social
              socialBrand={"facebook"}
              name={"Saphan"}
              link={"facebook.com"}
            />
            <Social
              socialBrand={"line"}
              name={"Saphan"}
              link={"store.line.me"}
            />
            <Social
              socialBrand={"instagram"}
              name={"Saphan"}
              link={"instagram.com/saphan"}
            />
            <Social socialBrand={"phone"} name={"Saphan"} link={"0947589485"} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-8">
          <h3 className="text-center text-[24px]">หรือส่งข้อความตรงนี้</h3>
          <form className="mt-4 flex flex-col gap-2">
            <input
              placeholder="ชื่อ"
              className="w-full bg-gray-200 text-black rounded-lg p-4"
            />
            <input
              placeholder="email"
              className="w-full bg-gray-200 text-black rounded-lg p-4"
            />
            <input
              placeholder="หัวข้อ"
              className="w-full bg-gray-200 text-black rounded-lg p-4"
            />
            <textarea
              rows={5}
              placeholder="ข้อความ"
              className="w-full bg-gray-200 text-black rounded-lg p-4"
            />
            <div className="flex justify-center">
              <button className="py-2 px-4 font-bold rounded-xl bg-orange-base">
                ส่งข้อความ
              </button>
            </div>
          </form>
        </div>
      </div>
    </Profile>
  );
};

export default ContactUs;
