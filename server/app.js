require('dotenv').config();

const express = require('express');
const app = express();
const usersRoutes = require('./routes/usersRoutes');
const relationshipsRoutes = require('./routes/relationshipsRoutes');

app.use(express.json()); // For parsing application/json

// Use routes
app.use('/users', usersRoutes);
app.use('/users', relationshipsRoutes);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// ... [previous code]

const sampleRoute = require('./routes/sampleRoute');

// Middlewares
app.use(express.json());

// Routes
app.use('/api', sampleRoute);

// ... [rest of the server setup]

