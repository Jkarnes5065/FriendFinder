var path = require("path");

app.post("/api/new", function(req, res) {
	newUser = req.body;
	console.log(newUser);
	friends.push(newUser);
	res.json(newUser);
});

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.post("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/api/", function(req, res) {
	res.json(newUser)
});