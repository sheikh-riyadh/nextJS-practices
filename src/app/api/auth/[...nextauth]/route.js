import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: 1,
          name: "Alif",
          email: "example@gmail.com",
        };

        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (token) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
