/*
 Highstock JS v11.1.0 (2023-08-20)

 Money Flow Index indicator for Highcharts Stock

 (c) 2010-2021 Grzegorz Blachliski

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/mfi",["highcharts","highcharts/modules/stock"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,b,f,k){a.hasOwnProperty(b)||(a[b]=k.apply(null,f),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,
module:a[b]}})))}a=a?a._modules:{};f(a,"Stock/Indicators/MFI/MFIIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){function f(a){return a.reduce(function(a,d){return a+d})}function k(a){return(a[1]+a[2]+a[3])/3}var p=this&&this.__extends||function(){function a(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])};return a(b,d)}return function(b,
d){function c(){this.constructor=b}if("function"!==typeof d&&null!==d)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),l=a.seriesTypes.sma,v=b.extend,w=b.merge,x=b.error,y=b.isArray;b=function(a){function b(){var d=null!==a&&a.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}p(b,a);b.prototype.getValues=function(a,c){var b=c.period,d=a.xData,g=a.yData,
l=g?g.length:0,p=c.decimals,e=a.chart.get(c.volumeSeriesID),q=e&&e.yData,r=[],t=[],u=[],m=[],n=[],h=1;if(!e)x("Series "+c.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,a.chart);else if(!(d.length<=b)&&y(g[0])&&4===g[0].length&&q){for(a=k(g[h]);h<b+1;)c=a,a=k(g[h]),e=a>=c,c=a*q[h],m.push(e?c:0),n.push(e?0:c),h++;for(b=h-1;b<l;b++)b>h-1&&(m.shift(),n.shift(),c=a,a=k(g[b]),e=a>c,c=a*q[b],m.push(e?c:0),n.push(e?0:c)),c=f(n),e=f(m),c=e/c,c=parseFloat((100-100/(1+c)).toFixed(p)),r.push([d[b],
c]),t.push(d[b]),u.push(c);return{values:r,xData:t,yData:u}}};b.defaultOptions=w(l.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}});return b}(l);v(b.prototype,{nameBase:"Money Flow Index"});a.registerSeriesType("mfi",b);"";return b});f(a,"masters/indicators/mfi.src.js",[],function(){})});//# sourceMappingURL=mfi.js.map