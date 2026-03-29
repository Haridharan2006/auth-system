const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // 🔥 THIS FIXES YOUR ISSUE
app.use(express.json());

app.use('/users', require('./routes/userRoutes'));
app.use('/groups', require('./routes/groupRoutes'));
app.use('/auth', require('./routes/authRoutes'));

app.listen(5000, () => console.log("Server running on port 5000"));