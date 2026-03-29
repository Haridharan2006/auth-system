const pool = require('../models/db');
exports.createGroup = async (req, res) => {
  const { name } = req.body;
  const result = await pool.query(
    'INSERT INTO groups(name) VALUES($1) RETURNING *',
    [name]
  );
  res.json(result.rows[0]);
};