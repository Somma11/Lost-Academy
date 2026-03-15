# Lost-Academy

## BookMarklet

```javascript
javascript:(async()=>{const N="__LOST_ACADEMY__";if(window[N]){alert("🐉 Lost Academy já carregado");return;}window[N]={start:Date.now()};alert("🍕 SOMMA Loader iniciando...");const B="https://raw.githubusercontent.com/Somma11/Lost-Academy/main",S=[B+"/logo.js",B+"/lostacademy.js"];async function f(){try{for(const u of S){const r=await fetch(u+"?v="+Date.now(),{cache:"no-store"});if(!r.ok)throw"";(new Function(await r.text()))()}return!0}catch{return!1}}function t(){return new Promise(o=>{let l=0;for(const u of S){const s=document.createElement("script");s.src=u+"?v="+Date.now();s.onload=()=>{l++;l===S.length&&o(!0)};s.onerror=()=>o(!1);document.documentElement.appendChild(s)}})}async function b(){try{for(const u of S){const r=await fetch(u),c=await r.text(),B=new Blob([c],{type:"text/javascript"}),U=URL.createObjectURL(B);await new Promise((o,e)=>{const s=document.createElement("script");s.src=U;s.onload=o;s.onerror=e;document.documentElement.appendChild(s)})}return!0}catch{return!1}}let ok=await f();ok||(ok=await t());ok||(ok=await b());ok?alert("🐉 Lost Academy carregado\n\nTempo: "+(Date.now()-window[N].start)+"ms"):alert("❌ Loader bloqueado pelo site");})();
```
