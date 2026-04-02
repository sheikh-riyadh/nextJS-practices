import { dbConnect } from "./dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const collection = await dbConnect("user");
        const user = await collection.findOne({ email: credentials.email });
        if (user && user.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        session.user.name = token?.name;
        session.user.role = token?.role;
      }

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.name = user?.name;
        token.role = user?.role;
      }
      return token;
    },
  },
};