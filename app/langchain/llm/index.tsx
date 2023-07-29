// langchain openai
import { ChatOpenAI } from "langchain/chat_models/openai";

// langchain chains
import { ConversationChain, LLMChain } from "langchain/chains";

// langchain template prompts
import { PromptTemplate } from "langchain/prompts";

// langchain memory
import { BufferMemory, CombinedMemory, ConversationSummaryMemory } from "langchain/memory";

// custom prompts
import { template } from "./prompts";
import { OpenAI } from "langchain/llms/openai";

// setting chatbot model
let model;

// setting chatbot memory
let memory: CombinedMemory;

// setting prompt
let prompt: PromptTemplate;

// setting chatbot chain
let chain: ConversationChain;

const initLLM = () => {

    // it will initialize chatbot memory
    initMemory();

    // it will create a prompt template
    prompt = new PromptTemplate({
        inputVariables: ["input", "conversation_summary", "chat_history_lines",],
        template,
    });

    // it will instance a model
    model = new OpenAI({
        temperature: 0.8, // 0 no creativity, 1 very creative
        verbose: true,
    });

    // it will create a chain
    chain = new ConversationChain({
        llm: model,
        memory,
        prompt,
    });
};

const initMemory = () => {
    // buffer memory
    const bufferMemory = new BufferMemory({
        memoryKey: "chat_history_lines",
        inputKey: "input",
    });

    // summary memory
    const summaryMemory = new ConversationSummaryMemory({
        llm: new ChatOpenAI({ modelName: "gpt-3.5-turbo", temperature: 0, }),
        inputKey: "input",
        memoryKey: "conversation_summary",
    });

    // combined summary memory and buffer memory
    memory = new CombinedMemory({
        memories: [bufferMemory, summaryMemory,]
    });
};

export const runLLM = async (input: string, lng: string = "english", firstMsg: boolean) => {

    if (firstMsg) initLLM();

    const res = await chain.call({
        input,
    });

    console.log("res: ", res);

    return res;
};