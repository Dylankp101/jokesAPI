const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: String,
	punchline: String,
},
{ timestamps: true}
);

const Jokes = mongoose.model("joke", JokesSchema);

module.exports = Jokes;