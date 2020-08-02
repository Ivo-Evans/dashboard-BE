const fs = require("fs");
const path = require("path");
const db = require("../connection.js");
require("dotenv").config();
const schema = fs
  .readFileSync(path.join(__dirname, "..", "schema.sql"))
  .toString();

db.query(schema)