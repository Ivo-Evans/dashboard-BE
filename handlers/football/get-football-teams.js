const footballModels = require("../../db/models/football")


function getFootballTeams(req, res, next) {
    footballModels.getTeams()
    .then(result => {
        const teamsHash = {}
        for(let i = 0; i < result.length; i++) {
            teamsHash[result[i].home_team] = null;
            teamsHash[result[i].away_team] = null;
        }

        const teamsList = Object.keys(teamsHash)
        res.send(teamsList)
    })
    .catch(next)
}

module.exports = getFootballTeams