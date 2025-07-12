import { auth } from "@/app/lib/auth";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const user = await prisma.user.findUnique({
        where:{
            id: session.user.id
        },
        include:{
            items: true,
            userBadges: true,
            swaps:true
        }
    })

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
