const query = require("../config/db")

const getOwners = async () => {
    const sql = `SELECT * FROM package_db.Owners;`

    const record = await query(sql)

    return record;
}

module.exports = {
    getOwners
}