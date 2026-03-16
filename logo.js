(function(){

const DRAGON="https://raw.githubusercontent.com/Somma11/Lost-Academy/main/oneko/dragon.png";

function applyLogo(){

const link=document.querySelector('[data-testid="header-logo"]');
if(!link || link.dataset.lostApplied) return;

link.dataset.lostApplied="1";

/* limpar logo antigo */

link.innerHTML="";

/* container */

const wrap=document.createElement("div");
wrap.style.display="flex";
wrap.style.alignItems="center";
wrap.style.gap="8px";

/* dragão */

const img=new Image();
img.src=DRAGON;
img.style.height="30px";
img.style.imageRendering="pixelated";

/* texto */

const text=document.createElement("span");
text.textContent="Lost Academy";

text.style.fontSize="24px";
text.style.fontWeight="900";
text.style.fontFamily="system-ui";
text.style.color="#6a2fa3";
text.style.textShadow="0 0 6px rgba(106,47,163,.6)";

/* montar */

wrap.appendChild(img);
wrap.appendChild(text);
link.appendChild(wrap);

}

/* tentar aplicar imediatamente */

applyLogo();

/* observar só até encontrar */

const obs=new MutationObserver(()=>{
applyLogo();
});

obs.observe(document.documentElement,{
childList:true,
subtree:true
});

/* parar observer após 5s */

setTimeout(()=>obs.disconnect(),5000);

})();