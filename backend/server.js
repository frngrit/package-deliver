const express = require("express");
const app = express();
const PORT = 8081;
var cors = require('cors')
require("dotenv").config();

app.use(cors())

app.get('/test', (req, res) => res.json({'message': 'hello'}));

app.use('/api/packages', require("./routes/package.route"))
app.use('/api/owners', require("./routes/owner.route"))

app.listen(PORT, () => console.log(`app running on http://localhost:${PORT}`))