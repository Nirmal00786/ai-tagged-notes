# AI-Tagged Notes

A minimal AI-powered notes service that uses an LLM to automatically generate summaries and keyword tags for short-form notes. Designed for agentic workflows and AI-enhanced developer tools.

> ✅ Built with Node.js, TypeScript, React, OpenAI-compatible APIs, and MCP integration.

---

## ✨ Features

- 🧠 AI-enriched notes with auto-generated summary and tags
- 🔍 Search notes by free-text or tag
- 🏷️ Clickable tags for filtering
- 🧰 Tools exposed via MCP server (`createNote`, `searchNotes`)
- 🖥️ Optional React frontend for manual interaction
- ⚙️ In-memory note storage (no database needed)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **LLM API:** OpenAI or OpenRouter (GPT-compatible)
- **Frontend:** React + Vite (optional)
- **Dev Tools:** MCP protocol, Axios, dotenv

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Nirmal00786/ai-tagged-notes.git
cd ai-tagged-notes/backend
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Add your `.env` file

```env
OPENAI_API_KEY=your-api-key-here
OPENAI_API_BASE=https://openrouter.ai/api/v1
```

### 4. Start the backend

```bash
npm run dev
```

---

### (Optional) Run the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📡 API Endpoints

### `POST /api/notes`

Create and enrich a note.

**Body:**
```json
{ "content": "Meeting with team about AI automation." }
```

---

### `GET /api/notes?query=...&tag=...`

Search notes by keyword and/or tag.

---

### `DELETE /api/notes/by-content`

Delete a note by its content.

**Body:**
```json
{ "content": "Meeting with team about AI automation." }
```

---

## 🧠 MCP Tools (Agentic Access)

This service exposes the following tools via the MCP server (`/mcp/server.ts`):

### 📝 `createNote({ content })`
- Enriches the given note using LLM
- Stores it in memory

### 🔍 `searchNotes({ query?, tag? })`
- Searches notes based on optional keyword and/or tag

➡️ See [`AGENTS.md`](backend/AGENTS.md) for structure, parameters, and AI guidance.

---

## 🖥 Frontend Features

- Write and create notes via textarea
- Clickable tags for search filtering
- Delete notes safely (by content match)
- Mobile-responsive layout with styled UI

---

## ✅ Project Structure

```bash
ai-tagged-notes/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   └── services/
│   ├── mcp/
│   ├── AGENTS.md
│   ├── test-mcp.ts
│   └── README.md (moved to root)
├── frontend/
│   └── src/ (React UI)
└── README.md  ✅ (this file)
```

---

## 📄 Assumptions & Thought Process

- Focused on clean agentic tool design (`createNote`, `searchNotes`)
- Avoided external DBs to reduce complexity (in-memory store used)
- UI kept minimal, accessible, and styled for clarity
- Built MCP layer to easily plug into Copilot or Cline
- Instructions and tool context defined in `AGENTS.md` for AI guidance

---

## 📬 Submission

- ✅ All required files included: `README.md`, `AGENTS.md`, `mcp/server.ts`
- ✅ Tools exposed via MCP
- ✅ Tested with local agent script (`test-mcp.ts`)
- ✅ Public GitHub Repo: [https://github.com/Nirmal00786/ai-tagged-notes](https://github.com/Nirmal00786/ai-tagged-notes)

---

## ✅ You're Done

Thanks for reviewing this assignment! Feel free to explore, run, or extend it.
