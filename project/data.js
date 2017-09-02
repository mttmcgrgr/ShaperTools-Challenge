//
// This contains all of the mock data
//


module.exports = {}

module.exports.categories = ["Furniture", "Artwork", "Jewelry", "Cabinetry", "Joinery", "Inlay"];

module.exports.featuredProjects = [{
									title: "Pebble Cutting Board",
									description: "Use any hardwood to build your own custom engraved cutting board. Cutting and finishing take roughly 45 minutes. Have fun!",
									posterImage: "/static/images/pebbleCuttingBoard.jpg",
									likes: 25
								}, {
									title: "Soapbox Derby Car",
									description: "Make your own soapbox derby car! The project requires a kit for the wheels and hardware. Cutting and assembly takes roughly 6 hours. Stay safe and have fun!",
									posterImage: "/static/images/soapboxDerbyCar.jpg",
									likes: 38
								}, {
									title: "Skateboard",
									description: "Have fun cruising on your custom skateboard. We recommend using maple ply. Cutting time takes approximately 30 minutes.",
									posterImage: "/static/images/skateboard.jpg",
									likes: 42
								}];

var projects = [{
				title: "Walnut Radio",
				posterImage: "/static/images/walnutRadio.jpg",
				likes: 29
			}, {
				title: "Tilt Chair",
				posterImage: "/static/images/tiltChair.jpg",
				likes: 41
			}, {
				title: "Carbon Fiber Drone",
				posterImage: "/static/images/carbonFiberDrone.jpg",
				likes: 22
			}, {
				title: "Mona Lisa Engraving",
				posterImage: "/static/images/monaLisaEngraving.jpg",
				likes: 17
			}, {
				title: "Ring Bowl",
				posterImage: "/static/images/ringBowl.jpg",
				likes: 23
			}, {
				title: "Brass Pendant",
				posterImage: "/static/images/brassPendant.jpg",
				likes: 74
			}, {
				title: "Pour Over Coffee Stand",
				posterImage: "/static/images/pourOverCoffeeStand.jpg",
				likes: 28
			}, {
				title: "Rocking Horse",
				posterImage: "/static/images/rockingHorse.jpg",
				likes: 24
			}, {
				title: "Apple Box",
				posterImage: "/static/images/appleBox.jpg",
				likes: 18
			}, {
				title: "Handplane",
				posterImage: "/static/images/handplane.jpg",
				likes: 33
			}, {
				title: "Cardboard Box Car",
				posterImage: "/static/images/cardboardBoxCar.jpg",
				likes: 46
			}, {
				title: "Copper Bracelets",
				posterImage: "/static/images/copperBracelets.jpg",
				likes: 12
			}, {
				title: "Opendesk Studio Desk",
				posterImage: "/static/images/opendeskStudioDesk.jpg",
				likes: 19
			}, {
				title: "Ukulele",
				posterImage: "/static/images/ukulele.jpg",
				likes: 19
			}, {
				title: "Brass Dog Tag",
				posterImage: "/static/images/brassDogTag.jpg",
				likes: 11
			}, {
				title: "Opendesk Edie Stool",
				posterImage: "/static/images/opendeskEdieStool.jpg",
				likes: 23
			}, {
				title: "Elm Coffee Table",
				posterImage: "/static/images/elmCoffeeTable.jpg",
				likes: 26
			}, {
				title: "Linoleum Block",
				posterImage: "/static/images/linoleumBlock.jpg",
				likes: 21
			}, {
				title: "Screwdriver Cleat Project",
				posterImage: "/static/images/screwdriverCleatProject.jpg",
				likes: 32
			}, {
				title: "Cleat Light",
				posterImage: "/static/images/cleatLight.jpg",
				likes: 25
			}]

function randomIntIncludeUpper(low, high) {
	return Math.ceil(Math.random() * (high - low) + low);
}

module.exports.getRandomNumberOfProjects = function () {
	return projects.slice(0, randomIntIncludeUpper(6, projects.length));
};

module.exports.getProjectsForCategory = function () {
	var tempProjects = projects.slice(0, randomIntIncludeUpper(6, projects.length));
	var tempValue;
	var index = tempProjects.length - 1;
	while (index > 0) {
		var indexToSwap = Math.floor(Math.random() * index);
		tempValue = tempProjects[index];
		tempProjects[index] = tempProjects[indexToSwap];
		tempProjects[indexToSwap] = tempValue;
		index--;
	}

	return tempProjects;
};
