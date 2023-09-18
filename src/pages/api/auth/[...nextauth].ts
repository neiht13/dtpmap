import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {mockProviders} from "next-auth/client/__tests__/helpers/mocks";

export default NextAuth({
    providers: [
        CredentialsProvider({
            id: "",
            type: "credentials",
            name: "Login",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: "1", name: "thien", email: "@example.com" }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],

    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        async redirect({url, baseUrl}) {
            return baseUrl
        },
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            return session
        }
    }
})