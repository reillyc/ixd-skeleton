'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");

	});

	//from lab 2
	$("a.thumbnail").click(projectClick);
	
/*function projectClick(e) {
	console.log("Project clicked");
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
}	

function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
}
*/
function projectClick(e) {
	e. preventDefault();
	var containingProject = $(this).closest(".project");
	//containingProject.append("<div class='project-description'<p>Description of the project.</p></div>");
    var description = $(containingProject).find(".project-description");

    if (description.length == 0) {
	   $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	$(".project-description").fadeOut();
	//description.html("<p>Stop clicking on me! You just did it at" + (new Date()) + "</p>");
}
  

}



//$('#myelement').click(changeText);
//function changeText(event) {
//	$(this).text("Changed text");
//}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}