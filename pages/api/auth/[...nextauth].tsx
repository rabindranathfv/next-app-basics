import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
  // TODO: REMENBER ADAPTER IMPLEMENTATION
  // use an specific adapter for specific DB
  // database: process.env.DB_URI,
  secret: process.env.secret,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.secret,
  },
};
export default NextAuth(authOptions);
