import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const options ={
    providers: [
        GitHubProvider({
            profile(profile) {
                console.log(" Profile GitHub: ",profile)

                let userRole = "GitHub User"
            },

            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_Secret

        }),
        GoogleProvider({
            profile(profile) {
                console.log(" Profile Google: ",profile)

                let userRole = "Google User"
            },

            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_Secret

        })
    ],

}