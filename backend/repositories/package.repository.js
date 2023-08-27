const { query, insert } = require("../config/db")

const getPackages = async () => {
    const sql = `
    SELECT pg.Id, pg.TrackingNo, own.Name as OwnerId, own.Room as RoomId, own.PhoneNumber, pg.isRecieved, pg.CreatedAt
    FROM Packages as pg 
    JOIN Owners as own 
    ON pg.OwnerId = own.Id;
    `

    const record = await query(sql)

    return record;
}

const createPackages = async (packages) => {
    const sql = `INSERT INTO Packages (TrackingNo, OwnerId) VALUES ?`
    const values = [
        packages.map(v => [v.TrackingNo, v.OwnerId])
    ]

    return await insert(sql, values)
}

module.exports = {
    getPackages,
    createPackages
}