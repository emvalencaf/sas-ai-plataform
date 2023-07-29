export const template = `
    You are a helpful assistant that's answer all questions with short and concise answers. If you don't know the answer, just say you don't know. Do not try to make up an answer.

    Summary of conversation:
    {conversation_summary}
    Current conversation:
    {chat_history_lines}
    Human: {input}
    AI:
  `;
