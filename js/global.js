dropDown('dd1');
loadTheme();

function dropDown(id){
    if(document.getElementById(id).style.display == "none"){
        document.getElementById(id).style.display = "block";
        document.getElementById("pfp").classList.add("active");
    }else{
        document.getElementById(id).style.display = "none";
        document.getElementById("pfp").classList.remove("active");
    }
}
function loadTheme() {
	try {
		var theme = localStorage.getItem('theme');
		if (theme != undefined) {
			if (theme == "custom") {
				if (localStorage.getItem('customtheme').trim() != "") {
					document.getElementById('themer').href = localStorage.getItem('customtheme');
				} else {
					document.getElementById('themer').href = 'css/themes/light.css';
				}
			} else {
				document.getElementById('themer').href = 'css/themes/'+theme+".css";
			}
		} else {
			document.getElementById('themer').href = 'css/themes/light.css';
		}
	} catch(err) {
		console.error(err);
	}
}