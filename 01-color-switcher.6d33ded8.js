const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let r=null;function a(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(function(e){d.style.backgroundColor=a(),r=setInterval((()=>{d.style.backgroundColor=a()}),1e3),e.target.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(t){clearInterval(r),t.target.disabled=!0,e.disabled=!1})),t.disabled=!0;
//# sourceMappingURL=01-color-switcher.6d33ded8.js.map