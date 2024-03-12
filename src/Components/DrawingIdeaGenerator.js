import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DrawingIdeaGenerator = () => {
  const [prompt, setPrompt] = useState('');
  
  useEffect(() => {
    generateDrawingPrompt();
  }, []);

  const generateDrawingPrompt = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: 'Generate a random drawing.',
          max_tokens: 50,
          temperature: 0.7 // Adjust as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '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'
          }
        }
      );
      const generatedPrompt = response.data.choices[0].text;
      setPrompt(generatedPrompt);
    } catch (error) {
      console.error('Error generating prompt:', error);
    }
  };

  return (
    <div>
      <h1>Generated Prompt</h1>
      <p>{prompt}</p>
    </div>
  );
};

export default DrawingIdeaGenerator;
