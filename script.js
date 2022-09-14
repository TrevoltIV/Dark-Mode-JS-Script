


function screenMode(){
	const el = document.querySelector("link");
	const isDark = el.getAttribute("href");
	const ifLight = isDark === "styles/index.css";
	ifLight ? el.href = "styles/index-darkmode.css" : el.href = "styles/index.css";
}


