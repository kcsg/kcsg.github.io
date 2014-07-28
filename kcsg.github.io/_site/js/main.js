$(document).ready(function(){
	init();

	//Firebase references
	var root = new Firebase("https://intense-fire-7167.firebaseio.com/");


	function init(){
		initHeadroom();
		
	}

	function initHeadroom(){
		$("header").headroom({
			"tolerance": -12,
			"offset": 205,
			"classes": {
			"initial": "animated",
			"pinned": "swingInX",
			"unpinned": "swingOutX",
			"top": "headroom--top",
			"notTop": "headroom--not-top"
			}
		});
	}
});