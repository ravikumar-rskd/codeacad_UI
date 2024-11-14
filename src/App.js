import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [problemStatement, setProblemStatement] = useState('Write a function to add two numbers.');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Sending code to the backend (Docker container)
      const response = await axios.post('http://localhost:8081/execute_code', { code });

      // Display the output received from the Docker container
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error compiling code:', error);
      setOutput('Error: ' + error.message);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Problem Statement Section */}
      <div style={{ width: '30%', padding: '20px', borderRight: '1px solid #ccc' }}>
        <h3>Problem Statement</h3>
        <p>{problemStatement}</p>
      </div>

      {/* Code Input & Output Section */}
      <div style={{ width: '70%', padding: '20px' }}>
        <h3>Write Your Code</h3>
        <textarea
          style={{ width: '100%', height: '150px' }}
          value={code}
          onChange={handleCodeChange}
          placeholder="Write your code here..."
        />
        <br />
        <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Compile & Run</button>

        <h3>Output</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;
