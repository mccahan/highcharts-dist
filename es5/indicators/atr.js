/*
 Highstock JS v11.1.0 (2023-08-20)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Sebastian Bochan

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/atr",["highcharts","highcharts/modules/stock"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,f,d,h){a.hasOwnProperty(f)||(a[f]=h.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:f,
module:a[f]}})))}a=a?a._modules:{};d(a,"Stock/Indicators/ATR/ATRIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,f){function d(a,c){return Math.max(a[1]-a[2],"undefined"===typeof c?0:Math.abs(a[1]-c[3]),"undefined"===typeof c?0:Math.abs(a[2]-c[3]))}var h=this&&this.__extends||function(){function a(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=
b[c])};return a(c,b)}return function(c,b){function d(){this.constructor=c}if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");a(c,b);c.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)}}(),k=a.seriesTypes.sma,t=f.isArray,m=f.merge;f=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.points=void 0;b.options=void 0;return b}h(c,a);c.prototype.getValues=function(a,c){c=c.period;
var b=a.xData,f=(a=a.yData)?a.length:0,h=[[b[0],a[0]]],n=[],p=[],q=[],e,l=0,r=1,k=0;if(!(b.length<=c)&&t(a[0])&&4===a[0].length){for(e=1;e<=f;e++)if(h.push([b[e],a[e]]),c<r){var g=c;var m=b[e-1],u=d(a[e-1],a[e-2]);g=[m,(l*(g-1)+u)/g];l=g[1];n.push(g);p.push(g[0]);q.push(g[1])}else c===r?(l=k/(e-1),n.push([b[e-1],l]),p.push(b[e-1]),q.push(l)):k+=d(a[e-1],a[e-2]),r++;return{values:n,xData:p,yData:q}}};c.defaultOptions=m(k.defaultOptions,{params:{index:void 0}});return c}(k);a.registerSeriesType("atr",
f);"";return f});d(a,"masters/indicators/atr.src.js",[],function(){})});//# sourceMappingURL=atr.js.map