const query = require("../config/db")

const getPackages = async () => {
    const sql = `
    SELECT pg.Id, pg.TrackingNo, own.Id, own.Name as OwnerId, own.Room as RoomId, own.PhoneNumber, pg.isRecieved, pg.CreatedAt
    FROM package_db.Packages as pg 
    JOIN package_db.Owners as own 
    ON pg.OwnerId = own.Id;
    `

    const record = await query(sql)

    return record;
}

module.exports = {
    getPackages
}