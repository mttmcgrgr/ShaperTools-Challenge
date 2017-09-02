//
// This is the main mock server file
//

var express		= require("express");				// Main server framework
var multipart	= require("connect-multiparty");	// Express middleware for parsing multipart/form-data
var path		= require("path");
var fs			= require("fs");

// Local files
var data = require("./data.js");
var uploadDirectory = path.join(__dirname, "./uploads")

// Set up the Express Application
expressApp = express();
expressApp.use(multipart({ uploadDir: uploadDirectory}));
expressApp.use("/static", express.static(path.join(__dirname, "/public"))); // serve up static resources

// Render the Community Projects page
expressApp.get("/", function (request, response) {
	response.sendFile(path.join(__dirname, "./views/communityProjects.html"));
});

// Render the New Project page
expressApp.get("/newProject", function (request, response) {
	response.sendFile(path.join(__dirname, "./views/newProject.html"));
});

expressApp.post("/newProject", function (request, response) {
	var requiredBodyParameters = ["title", "description", "instructions"]
	var requiredInstructionsParameters = ["title", "time", "instruction"];
	var requiredFiles = ["posterImage"];

	var missingFields = [];
	var instructionsMissingFields = [];

	var error = false;
	for (var i = requiredBodyParameters.length - 1; i >= 0; i--)
	{
		if (!request.body[requiredBodyParameters[i]]) {
			error = true;
			missingFields.push(requiredBodyParameters[i]);
		}
	}

	request.body.instructions = JSON.parse(request.body.instructions);
	for (var i = request.body.instructions.length - 1; i >= 0; i--)
	{
		for (var j = requiredInstructionsParameters.length - 1; j >= 0; j--)
		{
			if (!request.body.instructions[i][requiredInstructionsParameters[j]]) {
				error = true;
				instructionsMissingFields.push(requiredInstructionsParameters[j]);
			}
		}
	}

	for (var i = requiredFiles.length - 1; i >= 0; i--)
	{
		if (!request.files[requiredFiles[i]] || request.files[requiredFiles[i]].size <= 0) {
			error = true;
			missingFields.push(requiredFiles[i]);
		}
	}

	// Remove uploaded files
	var files = fs.readdirSync(uploadDirectory);
	files.forEach(function (file) {
		if (file != "README.md") {
			fs.unlinkSync(path.join(uploadDirectory, file));
		}
	});

	if (error) {
		var errorMessage = "";
		if (missingFields.length == 1) {
			errorMessage = "The project data is missing the field: " + missingFields[0] + ".";
		} else if (missingFields.length > 1) {
			errorMessage = "The project data is missing the fields: " + missingFields.join(", ") + ".";
		}
		if (instructionsMissingFields.length > 0) {
			if (errorMessage.length > 0) errorMessage += " Additionally, o";
			else errorMessage += "O";

			if (instructionsMissingFields.length == 1) {
				errorMessage += "ne or more instructions are missing the field: " + instructionsMissingFields[0] + ".";
			} else {
				errorMessage += "ne or more instructions are missing fields: " + instructionsMissingFields.join(", ") + ".";
			}
		}
		response.status(400).send(errorMessage);
	} else {
		response.sendStatus(200)
	}
});

expressApp.get("/categories", function (request, response) {
	response.send(data.categories);
});

expressApp.get("/featuredProjects", function (request, response) {
	response.send(data.featuredProjects);
});

expressApp.get("/projects", function (request, response) {
	response.send(data.getRandomNumberOfProjects());
});

expressApp.get("/projects/:category", function (request, response) {
	var lowerCategories = [];
	for (var i = data.categories.length - 1; i >= 0; i--) {
		lowerCategories.push(data.categories[i].toLowerCase());
	}

	if (lowerCategories.indexOf(request.params.category.toLowerCase()) < 0) {
		response.sendStatus(404);
	} else {
		response.send(data.getProjectsForCategory(request.params.category));
	}
});

// Start the server
var port = process.argv[2] || 8080;
expressApp.listen(port, function () {
	console.log("You can specify which port to use by running `node server.js [port #]`");
	console.log("Server running on %d", port);
});
