var projectsLength = Object.keys(projects).length;
for (var i = 1; i < projectsLength+1; i++) {
    var projectId = "p0"+i;
    var myProjects = document.getElementById("myProjects");
    var activeTag = null;
    if(projects[projectId].active){
        var activeTag = '<span class="badge green">Active</span>';
    }else{
        var activeTag = '<span class="badge red">Not Active</span>';
    }
    
    myProjects.innerHTML += '<a class="page-item" href="#"> <b>'+projects[projectId].name+'</b> '+activeTag+' </a>';
}