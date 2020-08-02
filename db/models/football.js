const db = require("../connection.js")

const footballModels = {
    getTeams: () => {
        return db.query(
            `SELECT home_team, away_team FROM football_games`
        ).then(res => res.rows)
    },
    getVictories: ({team}) => {
        return db.query(
            `SELECT home_team, away_team, result FROM football_games where home_team = $1 or away_team = $1`, [team]
        ).then(res => res.rows)
    }
}

module.exports = footballModels