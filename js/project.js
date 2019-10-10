var projectId = getAllUrlParams().id;
var tabUri = getAllUrlParams().tab;

document.getElementById("projectTitle").innerHTML = projects[projectId].name;
document.getElementById("projectNameInput").value = projects[projectId].name;
document.getElementById("projectId").innerHTML = projectId;
document.getElementById("filesLink").href = "files.html?projectId="+projectId;
var statusTag = document.getElementById("projectStatus");
if(projects[projectId].active){
        statusTag.innerHTML = '<span class="green dc" title="Active"><i class="material-icons">&#xe86c;</i> </span><span class="green">Active</span>';
    }else{
        statusTag.innerHTML = '<span class="red dc" title="Not Active"><i class="material-icons">&#xe160;</i> </span><span class="red">Not Active</span>';
}

//Credit to:
//codepen.io/carolynvelez/pen/MawmVb
window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});
