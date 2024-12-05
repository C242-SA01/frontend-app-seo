import { signIn } from "@/lib/firestore/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string };
        const user: any = await signIn({ email });
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      console.log("JWT Callback - Token before modification:", token); // Log token sebelum dimodifikasi
      if (account?.provider === "credentials" || account?.provider === "google") {
        token.email = user.email;
        token.name = user.name;
        token.role = user.role || "user";
        token.sub = user.id; // Menambahkan id user ke token
      }
      console.log("JWT Callback - Token after modification:", token); // Log token setelah dimodifikasi
      return token;
    },
    async session({ session, token }: any) {
      console.log("Session Callback - Token:", token); // Log token untuk melihat data dalam token
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.role = token.role;
      session.user.id = token.sub; // Menyimpan id user di session
      console.log("Session Callback - Session:", session); // Log session untuk melihat data dalam session
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
export default NextAuth(authOptions);
