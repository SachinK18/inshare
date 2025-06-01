require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;

// Add CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.static('public'));
app.use('/look', express.static('look'));

app.use(express.json());

const connectDB = require('./config/db');
connectDB();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.use('/api/files', require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));

// Serve the frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Root route - serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});