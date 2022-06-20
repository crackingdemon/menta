import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
const clientId = process.env.GOOGLE_CLIENT_ID;
console.log(clientId);


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ]
})
