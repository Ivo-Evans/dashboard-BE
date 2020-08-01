const db = require("../connection");

const warmerModels = {
  getWarmers: ({ users_id }) => {
    return db
      .query("SELECT warmer FROM warmers where users_id = $1", [users_id])
      .then((res) => res.rows);
  },
};

module.exports = warmerModels;
