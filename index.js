const { urlencoded, json } = require("express");
const express = require("express");
const alumniRouter = require("./src/routes/alumniRoutes");
const studentRouter = require("./src/routes/studentRoutes");
require("./src/db/connection");
const app = express();
const cors = require("cors");
const port = 9000;

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/student", studentRouter);
app.use("/alumni", alumniRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
