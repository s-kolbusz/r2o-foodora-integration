import sqlite3 from "sqlite3";

const database = new sqlite3.Database("./database.db", (error) => {
  if (error) {
    console.error("Error connecting to database:", error);
  } else {
    console.log("Connected to the database.");
  }
});

export default database;
