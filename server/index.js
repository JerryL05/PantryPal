// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB (local or Atlas)
mongoose.connect('mongodb://localhost:27017/test');

app.get('/', (req, res) => {
  res.send('Hello from MERN server!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
