import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            name: "fresh cart",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const res = await fetch(
                    "https://ecommerce.routemisr.com/api/v1/auth/signin",
                    {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" },
                    }
                );

                const finalResponse = await res.json();

                if (finalResponse.message === "success") {
                    return {
                        ...finalResponse.user,
                        realTokenFromBackEnd : finalResponse.token
                    };
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60,
    },
    // callbacks: {
    //     jwt({ token, user }) {
    //         if (user) {
    //             token.realTokenFromBackEnd = user.realTokenFromBackEnd;
    //             token.role = user.role;
    //         }
    //         return token;
    //     },
    //     session({ session, token }) {
    //         if (session.user) {
    //             session.user.realTokenFromBackEnd = token.realTokenFromBackEnd;
    //             session.user.role = token.role;
    //         }
    //         return session;
    //     }
    // },
    pages: {
        signIn: "/login"
    }
};