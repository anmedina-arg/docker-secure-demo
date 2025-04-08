import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/count')
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const increment = async () => {
    const res = await fetch('http://localhost:3000/api/increment', {
      method: 'POST',
    });
    const data = await res.json();
    setCount(data.count);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Contador</h1>
      <p>Valor actual: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
