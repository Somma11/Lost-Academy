(function(){

function replaceLogo(){

const logo = document.querySelector('[data-testid="header-logo"]');
if(!logo) return;

const container = document.createElement("div");
container.style.display = "flex";
container.style.alignItems = "center";
container.style.gap = "10px";

/* Ícone do dragão */

const img = document.createElement("img");
img.src = "https://raw.githubusercontent.com/Somma11/Lost-Academy/main/oneko/dragon.png";
img.style.height = "34px";
img.style.imageRendering = "pixelated";

/* Texto */

const h1 = document.createElement("h1");
h1.textContent = "LostAcademy";
h1.style.margin = "0";
h1.style.fontSize = "28px";
h1.style.fontWeight = "900";
h1.style.fontFamily = "system-ui, sans-serif";
h1.style.color = "#6a2fa3";
h1.style.textShadow = "0 0 8px rgba(106,47,163,0.6)";
h1.style.letterSpacing = "1px";

/* montar */

container.appendChild(img);
container.appendChild(h1);

logo.replaceWith(container);

}

replaceLogo();

new MutationObserver(replaceLogo).observe(document.body,{
childList:true,
subtree:true
});

})();
