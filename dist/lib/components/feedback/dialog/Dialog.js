import e,{useRef as o,useEffect as a}from"react";var t="Dialog-module_DialogWrapperHide__KD5oT",i="Dialog-module_DialogWrapper__j3FVa",l="Dialog-module_DialogBox__MltJr";!function(e,o){void 0===o&&(o={});var a=o.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===a&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");.Dialog-module_DialogWrapperHide__KD5oT{display:none}.Dialog-module_DialogWrapper__j3FVa{align-items:center;background-color:#000;background-color:rgba(0,0,0,.3);display:flex;font-family:Roboto,sans-serif;height:100%;left:0;position:fixed;top:0;transition:all .5s ease-out;-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out;width:100%;z-index:1}.Dialog-module_DialogWrapper__j3FVa .Dialog-module_DialogBox__MltJr{background-color:#fff;border-radius:6px;box-shadow:0 0 10px var(--qcuicq-color-light);height:auto;margin:auto;min-height:11em;padding:.5em;width:22em}');var r=function(r){var n=r.open,s=r.onClose,d=o();return a((function(){window.onclick=function(e){e.target.className==i&&s()}}),[d]),e.createElement("div",{className:n?i:t,ref:d},e.createElement("div",{className:l},r.children))};export{r as default};