const fs = require("fs")
const path = require('path');
const neatCsv = require('neat-csv');
const db = require("../connection.js");
require("dotenv").config()


const filePath = path.join(__dirname, 'games.csv');

fs.readFile(filePath, (error, data) => {
  if (error) {
    return console.log(error);
  }
  neatCsv(data)
    .then((parsedData) => {
        const query = parsedData.map(game => {
            return `INSERT INTO football_games(home_team, away_team, result) VALUES('${game.HomeTeam}', '${game.AwayTeam}', '${game.FTR}')`
        }).join("; \n")
        // console.log(query)
        db.query(query)
    })
});