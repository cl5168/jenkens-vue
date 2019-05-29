var sqlMap = {
  getValue: 'SELECT * FROM test WHERE id = ?',
  setValue: 'UPDATE test SET name = ? WHERE id = ?',
	getUser:'SELECT * FROM users WHERE name = ?'
}
module.exports = sqlMap;