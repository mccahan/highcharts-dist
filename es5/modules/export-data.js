/*
 Highcharts JS v11.1.0 (2023-08-20)

 Exporting module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/export-data",["highcharts","highcharts/modules/exporting"],function(m){b(m);b.Highcharts=m;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function m(b,q,h,t){b.hasOwnProperty(q)||(b[q]=t.apply(null,h),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:q,
module:b[q]}})))}b=b?b._modules:{};m(b,"Extensions/ExportData/ExportDataDefaults.js",[],function(){"";return{exporting:{csv:{annotations:{itemDelimiter:"; ",join:!1},columnHeaderFormatter:null,dateFormat:"%Y-%m-%d %H:%M:%S",decimalPoint:null,itemDelimiter:null,lineDelimiter:"\n"},showTable:!1,useMultiLevelHeaders:!0,useRowspanHeaders:!0},lang:{downloadCSV:"Download CSV",downloadXLS:"Download XLS",exportData:{annotationHeader:"Annotations",categoryHeader:"Category",categoryDatetimeHeader:"DateTime"},
viewData:"View data table",hideData:"Hide data table"}}});m(b,"Extensions/DownloadURL.js",[b["Core/Globals.js"]],function(b){var q=b.isSafari,h=b.win,t=h.document,m=h.URL||h.webkitURL||h,F=b.dataURLtoBlob=function(f){if((f=f.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<f.length&&h.atob&&h.ArrayBuffer&&h.Uint8Array&&h.Blob&&m.createObjectURL){var b=h.atob(f[3]),x=new h.ArrayBuffer(b.length);x=new h.Uint8Array(x);for(var l=0;l<x.length;++l)x[l]=b.charCodeAt(l);f=new h.Blob([x],
{type:f[1]});return m.createObjectURL(f)}};b=b.downloadURL=function(b,m){var f=h.navigator,l=t.createElement("a");if("string"===typeof b||b instanceof String||!f.msSaveOrOpenBlob){b="".concat(b);f=/Edge\/\d+/.test(f.userAgent);if(q&&"string"===typeof b&&0===b.indexOf("data:application/pdf")||f||2E6<b.length)if(b=F(b)||"",!b)throw Error("Failed to convert to blob");if("undefined"!==typeof l.download)l.href=b,l.download=m,t.body.appendChild(l),l.click(),t.body.removeChild(l);else try{var Q=h.open(b,
"chart");if("undefined"===typeof Q||null===Q)throw Error("Failed to open window");}catch(R){h.location.href=b}}else f.msSaveOrOpenBlob(b,m)};return{dataURLtoBlob:F,downloadURL:b}});m(b,"Extensions/ExportData/ExportData.js",[b["Core/Renderer/HTML/AST.js"],b["Extensions/ExportData/ExportDataDefaults.js"],b["Core/Globals.js"],b["Core/Defaults.js"],b["Extensions/DownloadURL.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,m,h,t,Y,P,f){function q(){var a=this.getCSV(!0);S(T(a,
"text/csv")||"data:text/csv,\ufeff"+encodeURIComponent(a),this.getFilename()+".csv")}function x(){var a='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>'+
this.getTable(!0)+"</body></html>";S(T(a,"application/vnd.ms-excel")||"data:application/vnd.ms-excel;base64,"+n.btoa(unescape(encodeURIComponent(a))),this.getFilename()+".xls")}function l(a){var b="",g=this.getDataRows(),d=this.options.exporting.csv,B=v(d.decimalPoint,","!==d.itemDelimiter&&a?(1.1).toLocaleString()[1]:"."),f=v(d.itemDelimiter,","===B?";":","),h=d.lineDelimiter;g.forEach(function(a,d){for(var c,e=a.length;e--;)c=a[e],"string"===typeof c&&(c='"'+c+'"'),"number"===typeof c&&"."!==B&&
(c=c.toString().replace(".",B)),a[e]=c;a.length=g.length?g[0].length:0;b+=a.join(f);d<g.length-1&&(b+=h)});return b}function F(a){function b(a,b){return a.data.filter(function(a){return"undefined"!==typeof a.y&&a.name}).length&&b&&!b.categories&&!a.keyToAxis?a.pointArrayMap&&a.pointArrayMap.filter(function(a){return"x"===a}).length?(a.pointArrayMap.unshift("x"),a.pointArrayMap):["x","y"]:a.pointArrayMap||["y"]}function g(a,b,g){var y={},c={};b.forEach(function(b){var d=(a.keyToAxis&&a.keyToAxis[b]||
b)+"Axis";d=Z(g)?a.chart[d][g]:a[d];y[b]=d&&d.categories||[];c[b]=d&&d.dateTime});return{categoryMap:y,dateTimeValueAxisMap:c}}function d(b,d,g){if(h.columnHeaderFormatter){var c=h.columnHeaderFormatter(b,d,g);if(!1!==c)return c}return b?b instanceof aa?a?{columnTitle:1<g?d:b.name,topLevelColumnTitle:b.name}:b.name+(1<g?" ("+d+")":""):b.options.title&&b.options.title.text||(b.dateTime?D:w):w}var B=this.hasParallelCoordinates,f=this.time,h=this.options.exporting&&this.options.exporting.csv||{},m=this.xAxis,
e={},l=[],q=[],t=[],r=this.options.lang.exportData,w=r.categoryHeader,D=r.categoryDatetimeHeader,E=[],k,z=0;this.series.forEach(function(c){var w=c.xAxis,u=c.options.keys||b(c,w),U=u.length,r=!c.requireSorting&&{},l=m.indexOf(w),D=g(c,u),p;if(!1!==c.options.includeInDataExport&&!c.options.isInternal&&!1!==c.visible){ba(E,function(a){return a[0]===l})||E.push([l,z]);for(p=0;p<U;)k=d(c,u[p],u.length),t.push(k.columnTitle||k),a&&q.push(k.topLevelColumnTitle||k),p++;var y={chart:c.chart,autoIncrement:c.autoIncrement,
options:c.options,pointArrayMap:c.pointArrayMap,index:c.index};c.options.data.forEach(function(a,b){var d={series:y};B&&(D=g(c,u,b));c.pointClass.prototype.applyOptions.apply(d,[a]);var k=d.x;I(e[k])&&e[k].seriesIndices.includes(y.index)&&(a=Object.keys(e).filter(function(a){return e[a].seriesIndices.includes(y.index)&&k}).filter(function(a){return 0===a.indexOf(String(k))}),k=k.toString()+","+a.length);a=c.data[b]&&c.data[b].name;p=0;if(!w||"name"===c.exportKey||!B&&w&&w.hasNames&&a)k=a;r&&(r[k]&&
(k+="|"+b),r[k]=!0);e[k]||(e[k]=[],e[k].xValues=[]);e[k].x=d.x;e[k].name=a;e[k].xValues[l]=d.x;I(e[k].seriesIndices)||(e[k].seriesIndices=[]);for(e[k].seriesIndices=G(G([],e[k].seriesIndices,!0),[y.index],!1);p<U;)b=u[p],a=d[b],e[k][z+p]=v(D.categoryMap[b][a],D.dateTimeValueAxisMap[b]?f.dateFormat(h.dateFormat,a):null,a),p++});z+=p}});for(n in e)Object.hasOwnProperty.call(e,n)&&l.push(e[n]);r=a?[q,t]:[t];for(z=E.length;z--;){var u=E[z][0];var J=E[z][1];var C=m[u];l.sort(function(a,b){return a.xValues[u]-
b.xValues[u]});var n=d(C);r[0].splice(J,0,n);a&&r[1]&&r[1].splice(J,0,n);l.forEach(function(a){var b=a.name;C&&!I(b)&&(C.dateTime?(a.x instanceof Date&&(a.x=a.x.getTime()),b=f.dateFormat(h.dateFormat,a.x)):b=C.categories?v(C.names[a.x],C.categories[a.x],a.x):a.x);a.splice(J,0,b)})}r=r.concat(l);H(this,"exportData",{dataRows:r});return r}function R(a){function b(a){if(!a.tagName||"#text"===a.tagName)return a.textContent||"";var c=a.attributes,g="<".concat(a.tagName);c&&Object.keys(c).forEach(function(a){var b=
c[a];g+=" ".concat(a,'="').concat(b,'"')});g+=">";g+=a.textContent||"";(a.children||[]).forEach(function(a){g+=b(a)});return g+="</".concat(a.tagName,">")}a=this.getTableAST(a);return b(a)}function ca(a){function b(a,b,c,d){var k=v(d,"");b="highcharts-text"+(b?" "+b:"");"number"===typeof k?(k=k.toString(),","===f&&(k=k.replace(".",f)),b="highcharts-number"):d||(b="highcharts-empty");c=V({"class":b},c);return{tagName:a,attributes:c,textContent:k}}var g=0,d=[],h=this.options,f=a?(1.1).toLocaleString()[1]:
".",p=v(h.exporting.useMultiLevelHeaders,!0);a=this.getDataRows(p);var l=p?a.shift():null,e=a.shift();!1!==h.exporting.tableCaption&&d.push({tagName:"caption",attributes:{"class":"highcharts-table-caption"},textContent:v(h.exporting.tableCaption,h.title.text?h.title.text:"Chart")});for(var m=0,n=a.length;m<n;++m)a[m].length>g&&(g=a[m].length);d.push(function(a,c,d){var g=[],k=0;d=d||c&&c.length;var f=0,e;if(e=p&&a&&c){a:if(e=a.length,c.length===e){for(;e--;)if(a[e]!==c[e]){e=!1;break a}e=!0}else e=
!1;e=!e}if(e){for(e=[];k<d;++k){var l=a[k];var m=a[k+1];l===m?++f:f?(e.push(b("th","highcharts-table-topheading",{scope:"col",colspan:f+1},l)),f=0):(l===c[k]?h.exporting.useRowspanHeaders?(m=2,delete c[k]):(m=1,c[k]=""):m=1,l=b("th","highcharts-table-topheading",{scope:"col"},l),1<m&&l.attributes&&(l.attributes.valign="top",l.attributes.rowspan=m),e.push(l))}g.push({tagName:"tr",children:e})}if(c){e=[];k=0;for(d=c.length;k<d;++k)"undefined"!==typeof c[k]&&e.push(b("th",null,{scope:"col"},c[k]));g.push({tagName:"tr",
children:e})}return{tagName:"thead",children:g}}(l,e,Math.max(g,e.length)));var q=[];a.forEach(function(a){for(var c=[],d=0;d<g;d++)c.push(b(d?"td":"th",null,d?{}:{scope:"row"},a[d]));q.push({tagName:"tr",children:c})});d.push({tagName:"tbody",children:q});d={tree:{tagName:"table",id:"highcharts-data-table-".concat(this.index),children:d}};H(this,"aftergetTableAST",d);return d.tree}function da(){this.toggleDataTable(!1)}function ea(a){var c=(a=v(a,!this.isDataTableVisible))&&!this.dataTableDiv;c&&
(this.dataTableDiv=fa.createElement("div"),this.dataTableDiv.className="highcharts-data-table",this.renderTo.parentNode.insertBefore(this.dataTableDiv,this.renderTo.nextSibling));if(this.dataTableDiv){var g=this.dataTableDiv.style,d=g.display;g.display=a?"block":"none";a?(this.dataTableDiv.innerHTML=b.emptyHTML,(new b([this.getTableAST()])).addToDOM(this.dataTableDiv),H(this,"afterViewData",{element:this.dataTableDiv,wasHidden:c||d!==g.display})):H(this,"afterHideData")}this.isDataTableVisible=a;
c=this.exportDivElements;d=(g=this.options.exporting)&&g.buttons&&g.buttons.contextButton.menuItems;a=this.options.lang;g&&g.menuItemDefinitions&&a&&a.viewData&&a.hideData&&d&&c&&(c=c[d.indexOf("viewData")])&&b.setElementHTML(c,this.isDataTableVisible?a.hideData:a.viewData)}function ha(){this.toggleDataTable(!0)}function T(a,b){var c=n.navigator,d=-1<c.userAgent.indexOf("WebKit")&&0>c.userAgent.indexOf("Chrome"),f=n.URL||n.webkitURL||n;try{if(c.msSaveOrOpenBlob&&n.MSBlobBuilder){var h=new n.MSBlobBuilder;
h.append(a);return h.getBlob("image/svg+xml")}if(!d)return f.createObjectURL(new n.Blob(["\ufeff"+a],{type:b}))}catch(p){}}function ia(){function a(a,b){return function(c,d){var e=(b?c:d).children[a].textContent;c=(b?d:c).children[a].textContent;return""===e||""===c||isNaN(e)||isNaN(c)?e.toString().localeCompare(c):e-c}}var b=this,g=b.dataTableDiv;if(g&&b.options.exporting&&b.options.exporting.allowTableSorting){var d=g.querySelector("thead tr");d&&d.childNodes.forEach(function(c){var d=c.closest("table");
c.addEventListener("click",function(){var h=G([],g.querySelectorAll("tr:not(thead tr)"),!0),f=G([],c.parentNode.children,!0);h.sort(a(f.indexOf(c),b.ascendingOrderInTable=!b.ascendingOrderInTable)).forEach(function(a){d.appendChild(a)});f.forEach(function(a){["highcharts-sort-ascending","highcharts-sort-descending"].forEach(function(b){a.classList.contains(b)&&a.classList.remove(b)})});c.classList.add(b.ascendingOrderInTable?"highcharts-sort-ascending":"highcharts-sort-descending")})})}}function ja(){this.options&&
this.options.exporting&&this.options.exporting.showTable&&!this.options.chart.forExport&&this.viewData()}var G=this&&this.__spreadArray||function(a,b,f){if(f||2===arguments.length)for(var c=0,h=b.length,g;c<h;c++)!g&&c in b||(g||(g=Array.prototype.slice.call(b,0,c)),g[c]=b[c]);return a.concat(g||Array.prototype.slice.call(b))},fa=h.doc,n=h.win,ka=t.getOptions,W=t.setOptions,S=Y.downloadURL,aa=P.series;h=P.seriesTypes;var K=h.arearange,L=h.gantt,M=h.map,N=h.mapbubble,O=h.treemap,X=f.addEvent,I=f.defined,
V=f.extend,ba=f.find,H=f.fireEvent,Z=f.isNumber,v=f.pick,A=[];"";return{compose:function(a){f.pushUnique(A,a)&&(X(a,"afterViewData",ia),X(a,"render",ja),a=a.prototype,a.downloadCSV=q,a.downloadXLS=x,a.getCSV=l,a.getDataRows=F,a.getTable=R,a.getTableAST=ca,a.hideData=da,a.toggleDataTable=ea,a.viewData=ha);if(f.pushUnique(A,W)){if(a=ka().exporting)V(a.menuItemDefinitions,{downloadCSV:{textKey:"downloadCSV",onclick:function(){this.downloadCSV()}},downloadXLS:{textKey:"downloadXLS",onclick:function(){this.downloadXLS()}},
viewData:{textKey:"viewData",onclick:function(){this.toggleDataTable()}}}),a.buttons&&a.buttons.contextButton.menuItems&&a.buttons.contextButton.menuItems.push("separator","downloadCSV","downloadXLS","viewData");W(m)}K&&f.pushUnique(A,K)&&(K.prototype.keyToAxis={low:"y",high:"y"});L&&f.pushUnique(A,L)&&(L.prototype.keyToAxis={start:"x",end:"x"});M&&f.pushUnique(A,M)&&(M.prototype.exportKey="name");N&&f.pushUnique(A,N)&&(N.prototype.exportKey="name");O&&f.pushUnique(A,O)&&(O.prototype.exportKey="name")}}});
m(b,"masters/modules/export-data.src.js",[b["Core/Globals.js"],b["Extensions/ExportData/ExportData.js"]],function(b,m){m.compose(b.Chart)})});//# sourceMappingURL=export-data.js.map