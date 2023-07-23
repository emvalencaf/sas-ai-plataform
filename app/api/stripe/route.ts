// clerk
import { auth, currentUser } from "@clerk/nextjs";

// nextjs server
import { NextResponse } from "next/server";

// prisma tool
import prismadb from "@/lib/prismadb";

// stripe tool
import { stripe } from "@/lib/stripe";

// utils
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl('/settings');

export async function GET() {
    try {
        
        const { userId } = auth();

        const user = await currentUser();

        if (!userId || !user) return new NextResponse("Unauthorized", { status: 401, });

        const userSubscription = await prismadb.userSubscrition.findUnique({
            where: {
                userId,
            },
        });

        // to manager an existing subscription
        if (userSubscription && userSubscription.stripeCustomerId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: settingsUrl,
            });

            return new NextResponse(JSON.stringify({ url: stripeSession.url }));
        }

        // create a new subscription
        const stripeSession = await stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: ["card"],
            mode: "subscription",
            billing_address_collection: "auto",
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
                {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: "Genie Pro",
                            description: "Unlimited AI Generations"
                        },
                        unit_amount: 2000,
                        recurring: {
                            interval: "month",
                        },
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                userId,
            },
        });

        return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    } catch (error: any) {
        console.log("[STRIPE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500, })
    }
}