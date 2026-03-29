const pool = require('../models/db');
const bcrypt = require('bcrypt');
exports.createUser = async (req, res) => {
  const { email, password, group_id } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users(email, password, group_id) VALUES($1,$2,$3) RETURNING *',
    [email, hashed, group_id]
  );
  res.json(result.rows[0]);
};
exports.getUsers = async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
};