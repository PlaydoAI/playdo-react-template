import React, { useState } from 'react';  
import axios from 'axios';  
import './App.css';  

function App() {  
  const [query, setQuery] = useState('');  
  const [response, setResponse] = useState('');  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    setLoading(true);  
    setError('');  
    setResponse('');  

    try {  
      const res = await axios.post(  
        'https://api.openai.com/v1/completions',  
        {  
          model: 'text-davinci-003',  
          prompt: query,  
          max_tokens: 100,  
        },  
        {  
          headers: {  
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,  
          },  
        }  
      );  
      setResponse(res.data.choices[0].text.trim());  
    } catch (err) {  
      setError('An error occurred. Please try again.');  
    } finally {  
      setLoading(false);  
    }  
  };  

  return (  
    <div className="App">  
      <h1>AI Code Helper</h1>  
      <form onSubmit={handleSubmit}>  
        <textarea  
          placeholder="Describe your coding requirement..."  
          value={query}  
          onChange={(e) => setQuery(e.target.value)}  
        ></textarea>  
        <button type="submit">Generate Code</button>  
      </form>  
      {loading && <p>Loading...</p>}  
      {error && <p className="error">{error}</p>}  
      {response && (  
        <div className="response">  
          <h2>Generated Code:</h2>  
          <pre>{response}</pre>  
        </div>  
      )}  
    </div>  
  );  
}  

export default App;