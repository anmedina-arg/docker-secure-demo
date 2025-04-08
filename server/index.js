const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let count = 0;

app.get('/api/count', (req, res) => {
  res.json({ count });
});

app.post('/api/increment', (req, res) => {
  count++;
  res.json({ count });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
