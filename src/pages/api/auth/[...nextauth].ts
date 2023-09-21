'use sever';

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {mockProviders} from "next-auth/client/__tests__/helpers/mocks";
import {PrismaClient} from "../../../../prisma/generated/client";

const prisma = new PrismaClient()

// @ts-ignore
export const authOptions = {

    providers: [
        CredentialsProvider({
            name: "Login",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                const user = { id: "1", name: "thien", email: "@example.com" , role: "admin"}

                const allUsers = await prisma.user.findUnique({
                    where: {
                        username: credentials?.username,
                    }
                })
                console.log("allUsers", allUsers)

                if (allUsers?.password === credentials?.password && allUsers?.status) {
                    return allUsers
                } else {
                    return null
                }
            }
        })
    ],

    pages: {
        signIn: '/login',
    },
    callbacks: {
        // @ts-ignore

        async jwt({ token, user }) {
        /* Step 1: update the token based on the user object */
        if (user) {
            token.role = user.role;
            token.department = user.department;
        }
        return token;
    },
        // @ts-ignore

        session({ session, token }) {
        /* Step 2: update the session.user based on the token object */
        if (token && session.user) {
            session.user.role = token.role;
            session.user.department = token.department;
        }
        return session;
    },
},

}
// @ts-ignore
export default NextAuth(authOptions);