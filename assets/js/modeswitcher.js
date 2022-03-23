/* 
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/
let themes = ['light', 'dusk', 'dark'];
const defaultTheme = 'dark';

let currentTheme;
if (localStorage.getItem('theme') != null && themes.includes(localStorage.getItem('theme'))){
	currentTheme = localStorage.getItem('theme');
} else if (window.matchMedia) {
	currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
} else {
	currentTheme = defaultTheme;	
}


function changeIconImgSrc(src) {
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

function modeSwitcher(desiredTheme = null) {
	if (desiredTheme == null || !themes.includes(desiredTheme)){
		desiredThemeIndex = (themes.indexOf(currentTheme)+1) % themes.length;
		desiredTheme = themes[desiredThemeIndex];
	}
	
	switch(desiredTheme){
		case 'light':
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
			changeIconImgSrc("{{site.url}}/assets/img/dusk.svg");
			break;
		case 'dusk':
			document.documentElement.setAttribute('data-theme', 'dusk');
			localStorage.setItem('theme', 'dusk');
			changeIconImgSrc("{{site.url}}/assets/img/moon.svg");
			break;
		case 'dark':
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
			changeIconImgSrc("{{site.url}}/assets/img/sun.svg");
			break;
	}
	currentTheme = desiredTheme;
	localStorage.setItem('theme', desiredTheme);
}

modeSwitcher(currentTheme);
