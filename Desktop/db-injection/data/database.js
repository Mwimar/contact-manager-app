const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "security-db",
  user: "webdon",
  password: "President@1998",
  // multipleStatements: true,
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to MySQL database!");

    // Release the connection back to the pool
    connection.release();
  } catch (error) {
    console.error("Error connecting to MySQL database:", error);
  }
}

testConnection();

module.exports = pool;
