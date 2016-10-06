$(document).ready(function() {

	$(".put-form").on("submit", function(e) {
		e.preventDefault();
 		var teamUrl = $(this).attr("action");
 		var teamData = $(this).serialize();
 		$.ajax({
 			method: "PUT",
 			url: teamUrl,
 			data: teamData
 		}).done(function(data) {
 			alert("Your team has been updated!!");
 			window.location = "/teams";
 		});
 	});

	$(".delete-link").on("click", function(e){
		e.preventDefault();
		var teamUrl = $(this).attr("href");

		$.ajax({
			method: "DELETE",
			url: teamUrl
		}).done(function(data){
			alert("Team has been deleted!");
			window.location = "/teams";
		});
	});

});
