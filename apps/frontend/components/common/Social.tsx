import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

type Props = {
  socialBrand: "facebook" | "line" | "instagram" | "phone" | "email";
  name: string;
  link: string;
};

const Social: FC<Props> = ({ socialBrand, name, link }) => {
  let hrefLink = link;
  let image: ReactNode = (
    <Image
      src="/assets/icons/facebookIcon.svg"
      alt="facebook"
      width={40}
      height={40}
    />
  );
  if (socialBrand === "facebook") {
    image = (
      <Image
        src="/assets/icons/facebookIcon.svg"
        alt={`${name} icon`}
        width={40}
        height={40}
      />
    );
  } else if (socialBrand === "line") {
    image = (
      <Image
        src="/assets/icons/lineIcon.svg"
        alt={`${name} icon`}
        width={40}
        height={40}
      />
    );
  } else if (socialBrand === "instagram") {
    image = (
      <Image
        src="/assets/icons/instagramIcon.svg"
        alt={`${name} icon`}
        width={40}
        height={40}
      />
    );
  } else if (socialBrand === "phone") {
    hrefLink = `tel:${link}`;
    image = (
      <div className="w-[40px] h-[40px] flex items-center justify-center">
        <PhoneIcon className="w-[30px] h-[30px]" />
      </div>
    );
  } else if (socialBrand === "email") {
    hrefLink = `mailto:${link}`;
    image = (
      <div className="w-[40px] h-[40px] flex items-center justify-center">
        <EnvelopeIcon className="w-[30px] h-[30px]" />
      </div>
    );
  }
  return (
    <Link
      href={hrefLink}
      target="_blank"
      className="flex flex-row items-center gap-[14px]"
    >
      <div className="rounded-full overflow-hidden">{image}</div>
      <span className="text-[18px] font-bold">{name}</span>
    </Link>
  );
};

export default Social;
