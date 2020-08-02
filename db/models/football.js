const db = require("../connection.js")

const footballModels = {
    getTeams: () => {
        return db.query(
            `SELECT home_team, away_team FROM football_games`
        ).then(res => res.rows)
    },
    getVictories: ({team_name}) => {
        return db.query(
            `SELECT home_team, away_team, result FROM football_teams where home_team = $1 or away_team = $1`
        )
    }
}

module.exports = footballModels