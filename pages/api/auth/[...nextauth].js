import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import  { error } from "console";
//import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    providers:[
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials){
                const{ email, password} = credentials;
                if (email !== "soura@gmail.com" || password !== "1234567"){
                    console.log("unauthorized");
                    throw new error ("invalid credential");
                }
                else {
                    return {
                        email: "soura@gmail.com", password:"1234567"
                    };
                };
            },
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        }),

    ]
}

export default NextAuth(authOptions);