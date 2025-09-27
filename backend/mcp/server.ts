import { notes, enrichNote, searchNotes } from "../src/services/openai";

// Tool: createNote
export async function createNote({ content }: { content: string }) {
  const enriched = await enrichNote(content);
  const newNote = { content, ...enriched };
  notes.push(newNote);
  return newNote;
}

// Tool: searchNotes
export function searchNotesTool({ tag, query }: { tag?: string; query?: string }) {
  return searchNotes(tag, query);
}

// Exported tools for MCP usage
export const tools = {
  createNote,
  searchNotes: searchNotesTool,
};
