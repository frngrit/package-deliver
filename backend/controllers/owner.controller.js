const { query } = require("../config/db")

const getOwners = async (req, res) => {
    const sql = `SELECT * FROM package_db.Owners;`

    const result = await query(sql)

    res.json(result)
}

module.exports = {
    getOwners
}