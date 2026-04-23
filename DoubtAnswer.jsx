import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DoubtAnswer({ query }) {
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setAnswer('');
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:5000/api/doubts?q=${encodeURIComponent(query)}`)
      .then((response) => {
        setAnswer(response.data.answer);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch answer');
        setLoading(false);
      });
  }, [query]);

  if (!query) return null;
  if (loading) return <p>Loading answer...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '5px' }}>
      <strong>Answer:</strong> {answer}
    </div>
  );
}

export default DoubtAnswer;
