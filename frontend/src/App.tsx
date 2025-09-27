import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Note {
  content: string;
  summary: string;
  tags: string[];
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState('');
  const [query, setQuery] = useState('');

  const fetchNotes = async () => {
    const res = await axios.get('/api/notes', { params: { query } });
    setNotes(res.data);
  };

  const createNote = async () => {
    if (!content.trim()) return;
    await axios.post('/api/notes', { content });
    setContent('');
    fetchNotes();
  };
  const deleteNote = async (noteContent: string) => {
    await axios.delete('/api/notes/by-content', { data: { content: noteContent } });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>📝 AI-Tagged Notes</h1>

        <div style={styles.formBox}>
          <textarea
            rows={4}
            placeholder="Write a note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
          />
          <button style={styles.button} onClick={createNote}>Create Note</button>
        </div>

        <input
          type="text"
          placeholder="Search notes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchNotes()}
          style={styles.searchInput}
        />

        <div style={{ marginTop: 20 }}>
          {notes.map((note: Note, i: number) => (
            <div key={i} style={styles.card}>
              <div style={styles.deleteWrapper}>
                <button style={styles.deleteButton} onClick={() => deleteNote(note.content)}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
              <div style={styles.summary}><strong>Summary:</strong> {note.summary}</div>
              <div style={styles.content}>{note.content}</div>
              <div style={styles.tags}>
                {note.tags.map((tag: string, j: number) => (
                  <span key={j} style={styles.tag}>#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    backgroundColor: '#f2f4f7',
    minHeight: '100vh',
    padding: '40px 10px',
  },
  container: {
    fontFamily: 'Inter, sans-serif',
    maxWidth: 720,
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    color: '#222',
    marginBottom: 30,
    fontSize: 28,
  },
  formBox: {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
    marginBottom: 20,
  },
  textarea: {
    width: '100%',
    boxSizing: 'border-box',
    padding: 12,
    fontSize: 15,
    borderRadius: 6,
    border: '1px solid #ccc',
    marginBottom: 10,
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '10px 18px',
    fontSize: 14,
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
  searchInput: {
    width: '100%',
    boxSizing: 'border-box',
    padding: 10,
    fontSize: 15,
    borderRadius: 6,
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 15,
    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    position: 'relative',
  },
  deleteWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  deleteButton: {
    background: 'transparent',
    border: 'none',
    color: '#999',
    cursor: 'pointer',
    fontSize: 16,
  },
  summary: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 6,
    color: '#1f2937',
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
    color: '#4b5563',
    fontStyle: 'italic',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: '#eef2f7',
    color: '#374151',
    padding: '4px 10px',
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 500,
  },
};
