import e from"react";function o(e,o){if(null==e)return{};var c,i,t=function(e,o){if(null==e)return{};var c,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)c=r[i],o.indexOf(c)>=0||(t[c]=e[c]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)c=r[i],o.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(t[c]=e[c])}return t}var c={CheckboxWrapper:"Checkbox-module_CheckboxWrapper__I7zYS",Checkbox:"Checkbox-module_Checkbox__5wuxi",Checkbox_Size__sm:"Checkbox-module_Checkbox_Size__sm__PqB2-",Label_Size__sm:"Checkbox-module_Label_Size__sm__hlIr6",Checkbox_Size__md:"Checkbox-module_Checkbox_Size__md__-vk-3",Label_Size__md:"Checkbox-module_Label_Size__md__S9V0F",Checkbox_Size__lg:"Checkbox-module_Checkbox_Size__lg__1zg1w",Label_Size__lg:"Checkbox-module_Label_Size__lg__-xLaM"};!function(e,o){void 0===o&&(o={});var c=o.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===c&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");.Checkbox-module_CheckboxWrapper__I7zYS{align-items:center;display:flex;font-family:Roboto,sans-serif}.Checkbox-module_CheckboxWrapper__I7zYS .Checkbox-module_Checkbox__5wuxi{cursor:pointer}input[type=checkbox]{appearance:none;background-color:#fff;height:.75rem;outline:1px solid #c1c1c1;width:.75rem}label{color:#c1c1c1;font-size:.75rem;padding:.2rem}.Checkbox-module_Checkbox_Size__sm__PqB2-{height:var(--qcuicq-chkbx-size-sm-height);padding:var(--qcuicq-chkbx-size-sm-padding);width:var(--qcuicq-chkbx-size-sm-width)}.Checkbox-module_Label_Size__sm__hlIr6{font-size:var(--qcuicq-chkbx-size-sm-font)}.Checkbox-module_Checkbox_Size__md__-vk-3{height:var(--qcuicq-chkbx-size-md-height);padding:var(--qcuicq-chkbx-size-md-padding);width:var(--qcuicq-chkbx-size-md-width)}.Checkbox-module_Label_Size__md__S9V0F{font-size:var(--qcuicq-chkbx-size-md-font)}.Checkbox-module_Checkbox_Size__lg__1zg1w{height:var(--qcuicq-chkbx-size-lg-height);padding:var(--qcuicq-chkbx-size-lg-padding);width:var(--qcuicq-chkbx-size-lg-width)}.Checkbox-module_Label_Size__lg__-xLaM{font-size:var(--qcuicq-chkbx-size-lg-font)}input[type=checkbox]:hover,label:hover{transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s}label:hover{color:#6b6b6b;cursor:pointer}input[type=checkbox]:hover{outline:1px solid #6b6b6b}input[type=checkbox]:hover+label{color:#6b6b6b}input[type=checkbox]:checked{background-color:#294197}input[type=checkbox]:checked+label{color:#6b6b6b;font-weight:440}');var i,t,r=(i=function(e){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var o={}.hasOwnProperty;function c(){for(var e=[],i=0;i<arguments.length;i++){var t=arguments[i];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var a=c.apply(null,t);a&&e.push(a)}}else if("object"===r)if(t.toString===Object.prototype.toString)for(var l in t)o.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):window.classNames=c}()},i(t={exports:{}},t.exports),t.exports);r.classNames;var a=["name","value","color","size"],l=function(i){var t=i.name,l=i.value;i.color;var _=i.size;return o(i,a),e.createElement("div",{className:c.CheckboxWrapper},e.createElement("input",{id:"".concat(t,"_id"),type:"checkbox",name:t,value:l,className:r(c.Checkbox,_&&c["Checkbox_Size__".concat(_)])}),e.createElement("label",{for:"".concat(t,"_id"),className:r(_&&c["Label_Size__".concat(_)])}," I have a bike"))};export{l as default};