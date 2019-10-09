var projectsLength = Object.keys(projects).length;
for (var i = 1; i < projectsLength+1; i++) {
    var projectId = "p0"+i;
    var myProjects = document.getElementById("myProjects");
    var statusTag = null;
    if(projects[projectId].active){
        var statusTag = '<span class="badge green">Active</span>';
    }else{
        var statusTag = '<span class="badge red">Not Active</span>';
    }
    
    myProjects.innerHTML += '<a class="page-item" href="project.html?id='+projectId+'"> <b>'+projects[projectId].name+'</b> '+statusTag+' </a>';
}