import { authClient } from "@/app/lib/auth-client";

export const OnGoogleLogin = async () => {
    const data = await authClient.signIn.social({
        provider: "google"
    })
    console.log(data);
}