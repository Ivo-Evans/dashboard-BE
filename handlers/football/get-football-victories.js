const footballModels = require("../../db/models/football")


function getFootballVictories(req, res, next) {
    const team = req.params.team
    footballModels.getVictories({team})
        .then(result => {
            const winningGames = result.filter(game => (
                    game.home_team === team && game.result === "H"
                    ||
                    game.away_team === team && game.result === "A"
                )
            )
            res.status(200).send(winningGames)
        }).catch(next)
}

module.exports = getFootballVictories