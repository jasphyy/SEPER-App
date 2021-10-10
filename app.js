const express = require("express"); // imports express
const cors = require("cors");
const connectDB = require("./config/db");
const bodyparser = require("body-parser");
const path = require('path');

const articles = require("./routes/api/articles");

require("dotenv").config();

const app = express(); // creates express app object


connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json()); 

//use Routes
app.use("/api/articles", articles);

app.use(express.static(path.resolve(__dirname, "./frontend/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json);


app.listen(port, () => console.log(`Server running on port ${port}`));
