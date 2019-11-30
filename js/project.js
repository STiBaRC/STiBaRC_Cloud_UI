var projectId = getAllUrlParams().id;
var tabUri = getAllUrlParams().tab;

$("projectTitle").innerHTML = projects[projectId].name;
$("projectNameInput").value = projects[projectId].name;
$("projectId").innerHTML = projectId;
$("projectIpAddress").innerHTML = projects[projectId].ip;
$("projectFtpAddress").value = projects[projectId].ftp;
$("filesLink").href = "files.html?id="+projectId;
var statusTag = $("projectStatus");
if(projects[projectId].active){
        statusTag.innerHTML = '<span class="green dc" title="Active"><i class="material-icons">&#xe86c;</i> </span><span class="green">Active</span>';
    }else{
        statusTag.innerHTML = '<span class="red dc" title="Not Active"><i class="material-icons">&#xe160;</i> </span><span class="red">Not Active</span>';
}

tabLinks = document.querySelectorAll('a[id^="tabLink-"]');
for (i = 1; i < tabLinks.length+1; i++) {
    $("tabLink-"+i).href = 'project.html?id='+projectId+'&tab='+i;
}
if(tabUri != undefined && tabUri != ""){
    tabContainers = document.querySelectorAll('div[id^="tab-"]');
    for (i = 1; i < tabContainers.length+1; i++) {
        $("tab-"+i).style.display = "none";
    }
    $("tab-"+tabUri).style.display = "block";
    
    for (i = 1; i < tabLinks.length+1; i++) {
        $("tabLi-"+i).classList.remove('active');
    }
    $("tabLi-"+tabUri).classList.add('active');
}
