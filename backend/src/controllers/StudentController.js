const knex = require('../database')

module.exports = {
  async index(req, res) {
    const results = await knex('students')

    return res.json(results)
  },
  async create(req, res) {
    const {
      username,
      email,
      cep,
      cpf,
      phone,
      andress
    } = req.body
    await knex('students').insert({ username, email, cep, cpf, phone, andress })

    return res.json({ message: "ok" })
  }
}