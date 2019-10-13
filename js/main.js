var projectsLength = 0;
projectsLength = Object.keys(projects).length;
var myProjects = document.getElementById("myProjects");
if(projectsLength == 0){
    myProjects.innerHTML = '<br><center><h2>No Projects</h2></center>';
}
for (var i = 1; i < projectsLength+1; i++) {
    var projectId = "p0"+i;
    var statusTag = null;
    if(projects[projectId].active){
        var statusTag = '<span class="badge green">Active</span>';
    }else{
        var statusTag = '<span class="badge red">Not Active</span>';
    }

    myProjects.innerHTML += '<a class="page-item" href="project.html?id='+projectId+'"> <b>'+projects[projectId].name+'</b> '+statusTag+' </a>';
}