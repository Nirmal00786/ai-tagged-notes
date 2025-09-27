import express from 'express';
import { enrichNote, notes, searchNotes } from '../services/openai';

const router = express.Router();

router.post('/', async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: 'Note content is required' });

  try {
    const enriched = await enrichNote(content);
    notes.push({ content, ...enriched });
    res.json({ content, ...enriched });
  } catch (error) {
    console.error('Error enriching note:', error);
    res.status(500).json({ error: 'Failed to enrich note' });
  }
});

router.get('/', (req, res) => {
  const { tag, query } = req.query;
  const results = searchNotes(tag as string, query as string);
  res.json(results);
});
router.delete('/by-content', (req, res) => {
  const { content } = req.body;
  const index = notes.findIndex(note => note.content === content);
  if (index !== -1) {
    notes.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

export default router;
