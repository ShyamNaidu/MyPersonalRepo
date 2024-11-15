
//import sqlite3 from sqlite3;
// const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydb.db'); // Creates or opens the database

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)");

  const stmt = db.prepare("INSERT INTO users (name) VALUES (?)");
  stmt.run("John");
  stmt.finalize();

  db.each("SELECT id, name FROM users", (err, row) => {
    console.log(row.id + ": " + row.name);
  });
});

db.close();