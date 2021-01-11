const express = require("express");
const app = express();


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the jokes routes function from our jokes.routes.js file
const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));





// const express = require("express"),
//     app = express(),
//     port = 8000,
//     server = app.listen(port,() => console.log(`Listening on port ${port}`))

// app.use(express.json());
// // imports file into one line
// require('./server/config/mongoose.config') ;
// require('./server/routes/jokes.routes')(app)