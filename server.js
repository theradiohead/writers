const express = require("express");
const cors = require("cors");
const connectDB = require("./app/config/db");
const app = express();

const post = require("./app/routes/api/post");

//Connect Database
connectDB();

//CORS
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Define Routes
//app.use("/api/users", require("./routes/api/users"));
app.use("/api/post", post);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
