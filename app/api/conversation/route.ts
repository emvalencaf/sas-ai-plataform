// next server
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// libs
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

// openai tools
import { Configuration, OpenAIApi } from "openai";
import { runLLM } from "../../langchain/llm";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(configuration);

export async function POST(
    req: Request,
) {
    try {
        
        const { userId } = auth();
        
        const body = await req.json();
        const { messages, locale, firstMsg } = body;

        console.log("messages on api: ", messages);

        if (!userId) return new NextResponse("Unauthorized", { status: 401, });

        if (!messages) return new NextResponse("Messages are required", { status: 400, });

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) return new NextResponse("Free trial has expired.", {
            status: 403,
        });

        const response = await runLLM(messages.content, locale, firstMsg);

        console.log("response: ", response);

        if (!isPro)  await increaseApiLimit();

        return NextResponse.json(response.response);

    } catch (error:any) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 })
    }
}