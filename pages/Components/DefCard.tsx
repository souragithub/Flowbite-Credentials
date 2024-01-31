'use Client';

import Link from "next/link";
import Image from "next/image";
import Login from "@/pages/login"
import {
  Formdiv,
  Formleft,
  Images,
  Logo,
  Imagesrc,
  Title,
} from "../styles/Defcard.styled";
import {
  TextArea,
  TextSection,
  Heading,
  Tickicon,
  SubHeading,
} from "../styles/Defcard.styled";
import { Formright, Form, FormHeading } from "../styles/Defcard.styled";
import { SignUp, Googlebutton, Google } from "../styles/Defcard.styled";
import { Github_button, Github } from "../styles/Defcard.styled";
import { Separator, Blank1, Blank2 } from "../styles/Defcard.styled";
import { Inputs, Label, Input, } from "../styles/Defcard.styled";
import { Remember, Rememberdiv, Input1, Tag } from "../styles/Defcard.styled";
import { Forgot_Button, Login_Button } from "../styles/Defcard.styled";
import { Account, Signup, Span } from "../styles/Defcard.styled";
import { useSession, signIn, signOut } from "next-auth/react";

import tickicon from "../../public/chck.png";
import logo from "../../public/favicon.svg";
import google from "../../public/google.png";
import github from "../../public/github.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { Button } from "flowbite-react";


type Inputs = {
  email: string;
  password: string;
};

const schema: ZodType<Inputs> = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

export const DefCard = () => {

  const { data: session } = useSession();

  const SubmitData: SubmitHandler<Inputs> = async(data: Inputs) => {
    if(data.email == "soura@gmail.com" && data.password == "1234567"){
      alert("Authenticated User");
      console.log(data);
      await signIn('credentials', {
        email:data.email as string,
        password:data.password as string,
        redirect: false,
      });
    }
    else{
      alert("Unauthorised User");
      console.log(data);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  async function handleGoogleSignIn() {
    signIn('google', {callbackUrl:"http://localhost:3000/login"});
    signOut({callbackUrl:"http://localhost:3000/login"});
  }

  if(session) {
    return (
      <>
      <Login/>
      <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    )
  }else{
  
    return (

    <Formdiv>
      <Formleft>
        <Images>
          <Logo>
            <Imagesrc src={logo} alt="Flowbite logo" />
            <Title>Flowbite</Title>
          </Logo>
        </Images>
        <TextArea>
          <TextSection>
            <Heading>
              {" "}
              <Tickicon>
                <Image src={tickicon} alt="Tickicon" />
              </Tickicon>
              Get started quickly{" "}
            </Heading>
            <SubHeading>
              Integrate with developer-friendly APIs or choose low-code or
              pre-built solutions.
            </SubHeading>
          </TextSection>
          <TextSection>
            <Heading>
              {" "}
              <Tickicon>
                <Image src={tickicon} alt="Tickicon" />
              </Tickicon>
              Support any buisness model
            </Heading>
            <SubHeading>
              Host code that you don't want to share with the world in private.
            </SubHeading>
          </TextSection>
          <TextSection>
            <Heading>
              {" "}
              <Tickicon>
                <Image src={tickicon} alt="Tickicon" />
              </Tickicon>
              Join millions of buisnesses
            </Heading>
            <SubHeading>
              Flowbite is trusted by ambitious startups and enterprises of every
              size.
            </SubHeading>
          </TextSection>
        </TextArea>
      </Formleft>
      <Formright>
        
          <FormHeading>Welcome Back</FormHeading>
          <SignUp>
            <Googlebutton onClick={handleGoogleSignIn}>
              <Google>
                <Image src={google} alt="Google icon" />
              </Google>
              Sign up with Google
            </Googlebutton>
            <Github_button>
              <Github>
                <Image src={github} alt="Git icon" />
              </Github>
              Sign up with Github
            </Github_button>
          </SignUp>
          <Separator>
            <br />
            <Blank1 />
            or
            <Blank2 />
          </Separator>
          <Form onSubmit={handleSubmit(SubmitData)}>
          <Inputs>
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="name@example.com"
              {...register("email")}
            />
            {errors.email && <Span>{errors.email.message}</Span>}
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="*******"
              {...register("password")}
            />
            {errors.password && <Span> {errors.password.message} </Span>}
          </Inputs>
          <Tag>
            <Rememberdiv>
              <Input1 type="checkbox" />
              <Remember> Remember Me</Remember>
            </Rememberdiv>
            <Forgot_Button href="#">Forgot Password?</Forgot_Button>
          </Tag>
          <Login_Button >Create account</Login_Button>

          <Account>
            Don't have an account, yet ? <Signup href="#">Sign up</Signup>{" "}
          </Account>
          </Form>
      </Formright>
    </Formdiv>
  );
};
}