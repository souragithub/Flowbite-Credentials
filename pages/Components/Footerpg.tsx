'use client';
import github from "../../public/github.png";
import twitter from "../../public/twitter.png";
import facebook from "../../public/facebook.png"
import dribble from "../../public/dribble.png"
import Image from "next/image";
import { Footer,Container, Text, Icon, Icons } from '../styles/Footer.styled';


export function Footerpg() {
  return (
    <Footer>
      <Container>
          <Text href="#"> 
               @ 2024 Flowbite™,LLC. All rights reserved." 
          </Text>
          <Icons>
          <Icon href="#">
                <Image src={facebook} alt="Git icon" />
            </Icon>
            <Icon href="#">
                <Image src={twitter} alt="Git icon" />
            </Icon>
            <Icon href="#">
                <Image src={github} alt="Git icon" />
            </Icon>
            <Icon href="#">
                <Image src={dribble} alt="Git icon" />
            </Icon>
          </Icons>
          </Container>
    </Footer>
  );
}
