var projectId = getAllUrlParams().projectId;

document.getElementById("files-select-btn").onclick = function(evt) {
    var selectProjectId = document.getElementById("files-select").value;
    console.log(selectProjectId);
    window.location.href = "files.html?projectId="+selectProjectId;
}
if(projectId != undefined){//show files for project
    document.getElementById("projectSelect").style.display = "none";
    document.getElementById("projectName").innerHTML = " - "+projects[projectId].name;
    
    
    
}else{//show select
    document.getElementById("projectName").style.display = "none";
     
    var select = document.getElementById("files-select");
    var projectsLength = Object.keys(projects).length;
    for (var i = 1; i < projectsLength+1; i++) {
        var projectId = "p0"+i;
        //create options for select
        opt = document.createElement("option");
        opt.value = projectId;
        opt.textContent = projects[projectId].name;
        select.appendChild(opt);
    }
}