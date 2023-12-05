const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/testdb', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
