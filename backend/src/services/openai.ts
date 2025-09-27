import dotenv from 'dotenv';

dotenv.config();

import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    basePath: process.env.OPENAI_API_BASE,
});

const openai = new OpenAIApi(configuration);

export const notes: any[] = [];

export async function enrichNote(content: string) {
    const prompt = `You are an assistant that processes notes.

Given a note, return a JSON object with two fields:
1. summary (<= 25 words)
2. tags (1 to 5 short keywords)

Here is the note:
"${content}"

Respond ONLY with a JSON object like:
{
  "summary": "...",
  "tags": ["...", "..."]
}`;

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: prompt}],
    });

    const text = response.data.choices[0].message?.content || '';

    try {
        const parsed = JSON.parse(text);
        return {
            summary: parsed.summary || 'No summary',
            tags: parsed.tags || [],
        };
    } catch (err) {
        console.error("AI did not return valid JSON:", text);
        return {
            summary: 'No summary',
            tags: [],
        };
    }
}

export function searchNotes(tag?: string, query?: string) {
    return notes.filter(note => {
        const matchesTag = tag ? note.tags.includes(tag) : true;
        const matchesQuery = query ? note.content.includes(query) : true;
        return matchesTag && matchesQuery;
    });
}
