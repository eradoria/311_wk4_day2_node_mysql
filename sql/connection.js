const { text } = require("body-parser");
const mysql = require("mysql");

// const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: database.cilq1tqutxtq.us-east-1.rds.amazonaws.com,
        user: admin,
        password: Password2,
        database: test,
        port: 3306,
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
