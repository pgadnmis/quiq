function t(){return t=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},t.apply(this,arguments)}var o={ButtonWrapper:"Button-module_ButtonWrapper__o4uiV",Button:"Button-module_Button__opsxV",Button_Variant__contained:"Button-module_Button_Variant__contained__kZGvt",Button_Size__sm:"Button-module_Button_Size__sm__dpYgQ",Button_Size__lg:"Button-module_Button_Size__lg__J6EcY",Button_Disabled:"Button-module_Button_Disabled__wlGig"};!function(t,o){void 0===o&&(o={});var n=o.insertAt;if(t&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}('@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");.Button-module_ButtonWrapper__o4uiV{font-family:Roboto,sans-serif}.Button-module_Button__opsxV{align-items:center;background-color:transparent;border:0;border-radius:4px;color:var(--qcuicq-color-textDark);cursor:pointer;display:flex;font-size:var(--qcuicq-btn-size-md-font);height:var(--qcuicq-btn-size-md-height);outline:0;padding:var(--qcuicq-btn-size-md-padding);transition:.8s;-webkit-transition:.8s;-moz-transition:.8s;-o-transition:.8s}.Button-module_Button__opsxV:hover{background-color:var(--qcuicq-color-light);transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s}.Button-module_Button__opsxV:active{background-color:var(--qcuicq-color-primary-lighter);color:var(--qcuicq-color-textDark);transition:.4s;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s}.Button-module_Button_Variant__contained__kZGvt{background-color:var(--qcuicq-color-primary);color:#fff}.Button-module_Button_Variant__contained__kZGvt:hover{background-color:var(--qcuicq-color-primary-light);transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s}.Button-module_Button_Size__sm__dpYgQ{font-size:var(--qcuicq-btn-size-sm-font);height:var(--qcuicq-btn-size-sm-height);padding:var(--qcuicq-btn-size-sm-padding)}.Button-module_Button_Size__lg__J6EcY{font-size:var(--qcuicq-btn-size-lg-font);height:var(--qcuicq-btn-size-lg-height);padding:var(--qcuicq-btn-size-lg-padding)}.Button-module_Button_Disabled__wlGig{cursor:auto}.Button-module_Button_Disabled__wlGig,.Button-module_Button_Disabled__wlGig:hover{background-color:transparent;color:var(--qcuicq-color-textLight)}');var n,e,i=(n=function(t){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var o={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var r=typeof i;if("string"===r||"number"===r)t.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&t.push(a)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var s in i)o.call(i,s)&&i[s]&&t.push(s);else t.push(i.toString())}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n}()},n(e={exports:{}},e.exports),e.exports);i.classNames;var r=function(n){var e=n.ButtonStyles,r=n.type,a=n.name,s=n.text,u=n.size,c=n.variant,l=n.disabled,_=n.onClick;return React.createElement("div",{className:o.ButtonWrapper},React.createElement("button",t({className:i(o.Button,c&&o["Button_Variant__".concat(c)],u&&o["Button_Size__".concat(u)],l&&o.Button_Disabled,null!=e?e:""),type:null!=r?r:"button",name:a,disabled:l,onClick:_},n),s))};export{r as Button};
//# sourceMappingURL=button.js.map
