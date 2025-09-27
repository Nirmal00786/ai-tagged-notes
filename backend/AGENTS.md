# AGENTS.md

## Overview

This service provides agent-accessible tools for creating and searching AI-enriched notes. Each note is automatically processed using an LLM to generate a short summary and relevant tags.

The tools are exposed via an MCP server for integration with agentic workflows.

---

## Tools

### 📝 createNote

**Purpose:** Add a new note and enrich it using an LLM.

**Input:**
```json
{
  "content": "string"
}
```

**Output:**
```json
{
  "content": "string",
  "summary": "string",
  "tags": ["string", "..."]
}
```

**Notes:**
- Always use this tool to store new information.
- Summaries are limited to 25 words; tags include 1–5 keywords.

---

### 🔍 searchNotes

**Purpose:** Retrieve notes by tag or keyword.

**Input:**
```json
{
  "tag": "string (optional)",
  "query": "string (optional)"
}
```

**Output:**
```json
[
  {
    "content": "string",
    "summary": "string",
    "tags": ["string", "..."]
  }
]
```

**Notes:**
- Both parameters are optional but at least one is recommended.
- Returns notes matching the tag, query, or both.

---

## Instructions for AI Agents

- Use `createNote` to store user or system-generated observations.
- Use `searchNotes` to reference existing knowledge.
- Prefer short, domain-relevant content (e.g., meetings, findings, insights).

