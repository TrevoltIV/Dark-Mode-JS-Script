

//When using multiple link tags in document, either change the el variable or make sure the stylesheet link tag is at the top

function screenMode(){
	const el = document.querySelector("link");
	const styleSheet = el.getAttribute("href");
	const ifLight = styleSheet === "styles/index.css";
	ifLight ? el.href = "styles/index-darkmode.css" : el.href = "styles/index.css";
}

const button = document.getElementById("screenModeBtn");
button.addEventListener("click", screenMode);


