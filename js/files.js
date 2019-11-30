var projectId = getAllUrlParams().id;

$("files-select-btn").onclick = function(evt) {
    var selectProjectId = $("files-select").value;
    console.log(selectProjectId);
    window.location.href = "files.html?id="+selectProjectId;
}
if(projectId != undefined){//show files for project
    $("projectSelect").style.display = "none";
    $("file-manager").style.display = "";
    // fm
    $("projectName").innerHTML = " - "+projects[projectId].name;
    $("fm-projectId").innerHTML = projectId;
    
    
}else{//show select
    $("projectName").style.display = "none";
    $("file-manager").style.display = "none";
     
    var select = $("files-select");
    var projectsLength = Object.keys(projects).length;
    for (var i = 1; i < projectsLength+1; i++) {
        var projectId = "p0"+i;
        //create options for select
        opt = document.createElement("option");
        opt.value = projectId;
        if(projects[projectId].active){
            opt.textContent = projects[projectId].name;
        }else{
            opt.textContent = "[Not Active] "+projects[projectId].name;
        }
        select.appendChild(opt);
    }
}