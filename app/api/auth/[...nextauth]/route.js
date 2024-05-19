import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import User from "@/models/User"
// import Payment from "@/models/Payment"
// import Username from "@/app/[username]/page"
import connectDB from "@/db/connectDb"

// import AppleProvider from "next-auth/providers/apple"
// import FacebookProvider from "next-auth/providers/facebook"
// import GoogleProvider from "next-auth/providers/google"
// import EmailProvider from "next-auth/providers/email"

export const authoptions = NextAuth({
    // Configure one or more authentication providers
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if(account.provider == "github"){
          await connectDB()

          const currentUser = await User.findOne({email: email})
          if(!currentUser){
            const newUser = await User.create({
              email: user.email,
              username: user.email.split('@')[0],
            })
          }
          return true
        }
       
      },
      async session({ session, user, token }) {
        const dbUser = await User.findOne({email: session.user.email})
        console.log(dbUser)
        session.user.name = dbUser.username
        return session
      },
    }
   
  })
export { authoptions as GET, authoptions as POST }  