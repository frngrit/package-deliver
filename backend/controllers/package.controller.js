const query = require("../config/db")

const getPackages = async (req, res) => {
    const sql = `
    SELECT pg.Id, pg.TrackingNo, own.Id, own.Name, own.Room, own.PhoneNumber, pg.isRecieved, pg.CreatedAt
    FROM package_db.Packages as pg 
    JOIN package_db.Owners as own 
    ON pg.OwnerId = own.Id;
    `

    const result = await query(sql)

    res.json(result)
}

module.exports = {
    getPackages
}