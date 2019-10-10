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

tabLinks = document.querySelectorAll('a[id^="tab-"]');
for (i = 1; i < tabLinks.length+1; i++) {
    document.getElementById("tab-"+i).href = 'project.html?id='+projectId+'&tab='+i;
}