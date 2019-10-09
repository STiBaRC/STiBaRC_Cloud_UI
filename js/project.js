var projectId = getAllUrlParams().id;

document.getElementById("projectTitle").innerHTML = projects[projectId].name;
document.getElementById("projectId").innerHTML = projectId;
document.getElementById("filesLink").href = "files.html?projectId="+projectId;
var activeTag = document.getElementById("projectStatus");
if(projects[projectId].active){
        activeTag.innerHTML = '<span class="green">Active</span>';
    }else{
        activeTag.innerHTML = '<span class="red">Not Active</span>';
}