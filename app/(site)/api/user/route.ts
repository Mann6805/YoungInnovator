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
    
    const swappedCount = await prisma.item.count({
    where: {
      uploader_id: session.user.id,
      status: 'swapped',
    },
  })

  const purchasedItems = await prisma.swap.findMany({
    where:{
      requester_id: session.user.id,
      offered_item_id: null
    }
  })

    return NextResponse.json({ user: { ...user, stats:{
      itemsListed: user?.items.length,
      itemsSold: swappedCount,
      itemsPurchased: purchasedItems.length,
    }, purchases : purchasedItems }});


  } catch (error) {
    console.error("Failed to fetch user info:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
