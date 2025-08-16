console.log("hello")
require('dotenv').config();


const express = require('express');
const riderrouter = require('./src/routes/rider');
const { query } = require('./src/db/db');

const app = express();
port = process.env.PORT;

// Create riders table if not exists
async function ensureRidersTable() {
    try {
        await query(`CREATE TABLE IF NOT EXISTS riders (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            rating FLOAT NOT NULL,
            lat FLOAT NOT NULL,
            long FLOAT NOT NULL
        );`);
        console.log('Riders table ensured.');
    } catch (error) {
        console.error('Failed to ensure riders table:', error.message);
    }
}

app.use(express.json());
app.use('/api/rider', riderrouter);

ensureRidersTable().then(() => {
    app.listen(port, () => {
        console.log('port connected ' + port);
    });
});