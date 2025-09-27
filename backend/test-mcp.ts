import { tools } from "./mcp/server";

async function run() {
  console.log("➡️ Creating a new note...");
  const newNote = await tools.createNote({
    content: "Explored how AI can support developers by generating documentation automatically."
  });
  console.log("✅ New Note Created:", newNote);

  console.log("\n➡️ Searching for notes with tag 'AI' and query 'developers'...");
  const results = tools.searchNotes({
    tag: "AI",
    query: "developers"
  });
  console.log("🔍 Search Results:", results);
}

run();
