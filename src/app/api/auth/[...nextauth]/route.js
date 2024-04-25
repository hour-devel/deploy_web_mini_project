import { loginService } from "@/service/auth.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      async authorize(loginInfo) {
        const newloginInfo = {
          email: loginInfo?.email,
          password: loginInfo?.password,
        };
        const login = await loginService(newloginInfo);
        if (login.status !== 400) {
          return login;
        } else {
          throw new Error(login.detail);
        }
      },
    }),
  ],
  // use to set token to cookie
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
