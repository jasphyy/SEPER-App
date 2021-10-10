const express = require("express"); // imports express
const cors = require("cors");
const connectDB = require("./config/db");
const bodyparser = require("body-parser");

const articles = require("./routes/api/articles");

require("dotenv").config();

const app = express(); // creates express app object
const port = process.env.PORT || 3000;

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//use Routes
app.use("/api/articles", articles);

app.use(cors());
app.use(express.json);
app.use(express.static('frontend/build'));

const path = require("path");



if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
    
  
}

    


app.listen(port, () => console.log(`Server running on port ${port}`));
