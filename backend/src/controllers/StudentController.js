const knex = require('../database')

module.exports = {
  async index(req, res) {
    const results = await knex('students')

    return res.json(results)
  }
}