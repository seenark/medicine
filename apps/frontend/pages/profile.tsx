import Profile from "@/components/layout/Profile";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
};

const ProfilePage: NextPage<Props> = ({ name, image }) => {
  return <Profile name={name} image={image}></Profile>;
};

export default ProfilePage;
