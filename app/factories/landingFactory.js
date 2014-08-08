landingApp.factory("landingFactory", function(){

	var factory = {}
	
	var defaultText = {
		play: "Intranets suck.",
		tagline: "What do you want to KnoKno?",
		descriptionHeader: "Learning should be easy.",
		descriptionBody1: "Kno Kno empowers you to explore and share new interests anytime and anywhere of your choice. We match learners with teachers to help you focus more of your time on the experiences you make.",
		descriptionBody2: "Learn anything from photographing the New York City Skyline to scuba diving in Thailand with knokno."
	}
	factory.getDefaultText = function(){
		return defaultText;
	}

	return factory;
})