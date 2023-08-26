const query = require("../config/db")

const getPackages = async (req, res) => {
    const sql = `SELECT * FROM package_db.Packages;`

    const result = await query(sql)

    res.json(result)
}

module.exports = {
    getPackages
}