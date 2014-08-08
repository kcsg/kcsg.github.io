/*
function landingTemplate(scope, ajax){
	$scope.createUser = function(){
		var formData = {
			"name" : scope.newFormUsername,
			"email": scope.newFormEmail,
			"interests": scope.formLearn,
			"experiences": scope.formShare
		}
		ajax.post("/auth/new-user", formData)
			.success(function(data){
				scope.newFormUsername = "";
				scope.newFormEmail = "";
				scope.formLearn = "";
				scope.formShare = "";
			})
			.error(function(data){
				console.log("error: " + data);
			});
	}
}
*/

landingApp.controller("defaultLandingController", function($scope,$http){
	

	/*
	var init = landingFactory.getDefaultText();
	$scope.play = init.play;
	$scope.tagline = init.tagline;
	$scope.descriptionHeader = init.descriptionHeader;
	$scope.descriptionBody1 = init.descriptionBody1;
	$scope.descriptionBody2 = init.descriptionBody2;
	*/
	$scope.tagline = "What do you want to knokno?";
	$scope.play = ""
	$scope.quote1 = "\"I'm not sure what classes I should attend.\""
	$scope.quote2 = "\"I am hesitant to join a class that I won't enjoy later on.\""
	$scope.quote3 = "\"I don't have time for multiple courses.\""
	$scope.descriptionMain1 = "KnoKno is designed to be the ultimate platform for informal learning opportunities."
	$scope.descriptionHeader1 = "Learn by doing."
	$scope.descriptionBody101 = "Explore new interests and experiences."
	$scope.descriptionBody102 = "Trek on fields you have never experienced before."
	$scope.descriptionBody103 = "Form communities with small groups with the same passion as you."

	$scope.image1 = "img/knokno-dashboard.jpg"
	$scope.descriptionHeader2 = "Teach what you love."
	$scope.descriptionBody201 = "Easily become a teacher and pursue what you love to do with knokno"
	$scope.descriptionBody202 = "A kickstarter for meetups-- tell us your passions, we'll find you willing students."
	$scope.descriptionBody203 = "Earn a side amount of income for sharing your experiences."
	$scope.descriptionBody204 = "Focus on the content, and KnoKno will handle location and resources you need (coming soon!)"
	$scope.image2 = "img/knokno-class-creation-form.jpg"
	$scope.descriptionBody3 = "Whether you're a learner, teacher, expert, or just someone who wants to experience something new KnoKno is the place to find the right experiences and people to learn from."

	//Random Photo Chooser
	var rand = Math.random() * 5;
	var bgimgHead = "background-image: url('";
	var bgimgTail = "') !important"
	$scope.backgroundImage = bgimgHead + "./img/amazing.jpg" + bgimgTail;

	//Random image chooser
	/*
	if(rand>=4){
		$scope.backgroundImage = bgimgHead + "./img/amazing.jpg" + bgimgTail;
	}else if(rand>=3){
		$scope.backgroundImage = bgimgHead + "./img/intranets.jpg" + bgimgTail;
	}else if(rand>=2){
		$scope.backgroundImage = bgimgHead + "./img/obamasnap.jpg" + bgimgTail;
	}else if(rand>=1){
		$scope.backgroundImage = bgimgHead + "./img/flyingman.jpg" + bgimgTail;
	}else{
		$scope.backgroundImage = bgimgHead + "./img/amazing.jpg" + bgimgTail;
	}
	*/


	$scope.createUser = function(){
		console.log("form submit")
		try{
			var formData = {
				"name" : $scope.newFormUsername,
				"email": $scope.newFormEmail,
				"interests": $scope.formLearn.split(","),
				"experiences": $scope.formShare.split(",")
			}
			$http.post("/auth/new-user", formData)
				.success(function(data){
					$scope.newFormUsername = "";
					$scope.newFormEmail = "";
					$scope.formLearn = "";
					$scope.formShare = "";
					console.log(data);
				})
				.error(function(data){
					console.log("error: " + data);
				});
		} catch (err){
			console.log("Please fill out all areas of the form.")
		}
	}


});