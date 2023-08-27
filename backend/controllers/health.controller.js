const getHealthStatus = (req, res) => {

    res.json({
        status: "OK"
    });
}

module.exports = {
    getHealthStatus
}