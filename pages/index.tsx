import Image from "next/image";
import { NavbarMenu } from "./Components/NavbarMenu";
import { DefCard } from "./Components/DefCard";
import { Footerpg } from "./Components/Footerpg";

export default function Home() {
  return (
    <>
    <NavbarMenu />
    <DefCard /> 
    <Footerpg />
    </>
  );
}
