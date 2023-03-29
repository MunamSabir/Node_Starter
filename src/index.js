const express = require("express");
var cors = require("cors");
const app = express();
const routes = require("./routers/routes");
// app.use(express.json({ urlencoded: true }));

app.use(cors());

app.use(express.json({ limit: "150mb" }));
app.use(express.urlencoded({ limit: "150mb" }));

const PORT = process.env.PORT || 3800;

/***Route binding*/
app.use("/", routes);
app.get("/", (req, res) => {
  res.send("Hello from Server");
});
/*******MongoDB Connectivity */
const connectDB = require("./config/database");
connectDB();

app.listen(PORT, () => {
  console.log(`The project is running on PORT ${PORT}`);
});
