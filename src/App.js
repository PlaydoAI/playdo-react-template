import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePromptChange = (e) => setPrompt(e.target.value);

  const fetchCodeHelper = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt,
          max_tokens: 150
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          }
        }
      );
      setResponse(result.data.choices[0].text.trim());
    } catch (err) {
      setError('Unable to fetch response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>AI Code Helper</h1>
      <textarea
        placeholder="Enter your programming prompt..."
        value={prompt}
        onChange={handlePromptChange}
      ></textarea>
      <button onClick={fetchCodeHelper} disabled={loading || !prompt}>
        {loading ? 'Loading...' : 'Get AI Response'}
      </button>
      {error && <p className="error">{error}</p>}
      {response && (
        <div className="response">
          <h3>AI Response:</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}

export default App;