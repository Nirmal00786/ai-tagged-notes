# AI-Tagged Notes

A minimal AI-powered notes service that uses an LLM to automatically generate summaries and tags for short-form notes. This project is designed for agentic workflows, exposing its tools via an MCP server.

---

## ✨ Features

- Create notes and enrich them using an AI model (summary + tags)
- Search notes by text or tag
- Tools exposed via MCP for AI agent interaction
- Clean codebase using Node.js, Express, TypeScript
- No database required (in-memory for demo purposes)
- Ready for extension with React UI or persistence layer

---

## 🛠 Tech Stack

- Node.js + Express
- TypeScript
- OpenAI-compatible API (e.g., OpenAI or OpenRouter)
- MCP Tool interface
- dotenv

---

## 📦 Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/your-username/ai-tagged-notes.git
cd ai-tagged-notes
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
```env
OPENAI_API_KEY=your-api-key
OPENAI_API_BASE=https://api.openai.com/v1   # or https://openrouter.ai/api/v1 if using OpenRouter
```

4. **Start the server**
```bash
npm run dev
```

---

## 🚀 API Endpoints

### `POST /api/notes`

Create and enrich a note.
```json
{
  "content": "Today we discussed AI workflow automation."
}
```

### `GET /api/notes?tag=ai&query=workflow`

Search notes by tag or keyword.

---

## 🧠 MCP Tools

See [`AGENTS.md`](AGENTS.md) for full MCP tool definitions.

---

## 📄 Files

| File | Purpose |
|------|---------|
| `/src/index.ts` | App entrypoint |
| `/src/routes/notes.ts` | Express routes |
| `/src/services/openai.ts` | LLM integration |
| `/mcp/server.ts` | MCP-compatible tools |
| `AGENTS.md` | Context engineering guide |
| `.env.example` | Environment variable template |

---

## ✅ Submission Checklist

- [x] AI service implemented
- [x] MCP tools defined
- [x] `AGENTS.md` created
- [x] `README.md` complete
- [x] Public GitHub repo ready for review

