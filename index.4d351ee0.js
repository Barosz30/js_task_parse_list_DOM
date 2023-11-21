// write code here
var e=Array.from(document.querySelectorAll("ul > li"));e.sort(function(e,r){var t=parseInt(e.getAttribute("data-salary").replace("$","").replace(",",""),10);return parseInt(r.getAttribute("data-salary").replace("$","").replace(",",""),10)-t}),document.querySelector("ul").innerHTML="",e.forEach(function(e){document.querySelector("ul").appendChild(e)});// I'd do it by class, but we were insctucted not to use that
//# sourceMappingURL=index.4d351ee0.js.map

//# sourceMappingURL=index.4d351ee0.js.map
