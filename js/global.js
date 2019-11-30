var projects = JSON.parse('{ "p01": { "name": "Test Project 1", "active": true, "ip": "185.199.111.153", "ftp": "p01@185.199.111.153:21" }, "p02": { "name": "Another Project", "active": true, "ip": "185.199.111.153", "ftp": "p02@185.199.111.153:21" }, "p03": { "name": "Diffrent Project 3", "active": false, "ip": "185.199.111.153", "ftp": "p03@185.199.111.153:21" } }');

function $(id) {
	return document.getElementById(id); //less typing
}

loadTheme();

// nav dropdown display //
var pfpNavDropdown = $('pfpNavDropdown');
var navDropdown = $('navDropdown');
document.addEventListener("click", function(event) {
    var isClickInside = pfpNavDropdown.contains(event.target);
    var navDropdownContent = navDropdown.contains(event.target);
    
    if($("navDropdown").style.display == "none" || navDropdownContent){
        $('navDropdown').style.display = "block";
        $('pfpNavDropdown').classList.add("active");
    }else{
        $("navDropdown").style.display = "none";
        $("pfpNavDropdown").classList.remove("active");
    }
    if (!isClickInside && !navDropdownContent) {
        //the click was outside the nav dropdown
        $("navDropdown").style.display = "none";
        $("pfpNavDropdown").classList.remove("active");
    }
});

function loadTheme() {
	try {
		var theme = localStorage.getItem('theme');
		if (theme != undefined) {
			if (theme == "custom") {
				if (localStorage.getItem('customtheme').trim() != "") {
					$('themer').href = localStorage.getItem('customtheme');
				} else {
					$('themer').href = 'css/themes/light.css';
				}
			} else {
				$('themer').href = 'css/themes/'+theme+".css";
			}
		} else {
			$('themer').href = 'css/themes/light.css';
		}
	} catch(err) {
		console.error(err);
	}
}

function getAllUrlParams(url) {
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
	var obj = {};
	if (queryString) {
		queryString = queryString.split('#')[0];
		var arr = queryString.split('&');
		for (var i = 0; i < arr.length; i++) {
			var a = arr[i].split('=');
			var paramNum = undefined;
			var paramName = a[0].replace(/\[\d*\]/, function (v) {
				paramNum = v.slice(1, -1);
				return '';
			});
			var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
			paramName = paramName;
			paramValue = paramValue;
			if (obj[paramName]) {
				if (typeof obj[paramName] === 'string') {
					obj[paramName] = [obj[paramName]];
				}
				if (typeof paramNum === 'undefined') {
					obj[paramName].push(paramValue);
				}
				else {
					obj[paramName][paramNum] = paramValue;
				}
			}
			else {
				obj[paramName] = paramValue;
			}
		}
	}
	return obj;
}