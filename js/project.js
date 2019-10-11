var projectId = getAllUrlParams().id;
var tabUri = getAllUrlParams().tab;

document.getElementById("projectTitle").innerHTML = projects[projectId].name;
document.getElementById("projectNameInput").value = projects[projectId].name;
document.getElementById("projectId").innerHTML = projectId;
document.getElementById("projectIpAddress").innerHTML = projects[projectId].ip;
document.getElementById("projectFtpAddress").value = projects[projectId].ftp;
document.getElementById("filesLink").href = "files.html?id="+projectId;
var statusTag = document.getElementById("projectStatus");
if(projects[projectId].active){
        statusTag.innerHTML = '<span class="green dc" title="Active"><i class="material-icons">&#xe86c;</i> </span><span class="green">Active</span>';
    }else{
        statusTag.innerHTML = '<span class="red dc" title="Not Active"><i class="material-icons">&#xe160;</i> </span><span class="red">Not Active</span>';
}

tabLinks = document.querySelectorAll('a[id^="tabLink-"]');
for (i = 1; i < tabLinks.length+1; i++) {
    document.getElementById("tabLink-"+i).href = 'project.html?id='+projectId+'&tab='+i;
}
if(tabUri != undefined && tabUri != ""){
    tabContainers = document.querySelectorAll('div[id^="tab-"]');
    for (i = 1; i < tabContainers.length+1; i++) {
        document.getElementById("tab-"+i).style.display = "none";
    }
    document.getElementById("tab-"+tabUri).style.display = "block";
    
    for (i = 1; i < tabLinks.length+1; i++) {
        document.getElementById("tabLi-"+i).classList.remove('active');
    }
    document.getElementById("tabLi-"+tabUri).classList.add('active');
}
