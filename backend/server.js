const express = require("express");
const app = express();
const PORT = 8081;
var cors = require("cors");
require("dotenv").config();

var morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/test", (req, res) => res.json({ message: "hello" }));

app.use("/api/packages", require("./routes/package.route"));
app.use("/api/owners", require("./routes/owner.route"));

app.use("/api/health", require("./routes/health.route"));

app.listen(PORT, () => console.log(`app running on http://localhost:${PORT}`));
