/*
 Highstock JS v11.1.0 (2023-08-20)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/ppo",["highcharts","highcharts/modules/stock"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,b,d,f){a.hasOwnProperty(b)||(a[b]=f.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,
module:a[b]}})))}a=a?a._modules:{};d(a,"Stock/Indicators/PPO/PPOIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){var d=this&&this.__extends||function(){function a(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)Object.prototype.hasOwnProperty.call(c,b)&&(a[b]=c[b])};return a(b,c)}return function(b,c){function d(){this.constructor=b}if("function"!==typeof c&&null!==c)throw new TypeError("Class extends value "+
String(c)+" is not a constructor or null");a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),f=a.seriesTypes.ema,l=b.correctFloat,g=b.extend,m=b.merge,n=b.error;b=function(a){function b(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}d(b,a);b.prototype.getValues=function(c,b){var d=b.periods,e=b.index;b=[];var f=[],h=[];if(2!==d.length||d[1]<=d[0])n('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');
else{var k=a.prototype.getValues.call(this,c,{index:e,period:d[0]});c=a.prototype.getValues.call(this,c,{index:e,period:d[1]});if(k&&c){var g=d[1]-d[0];for(e=0;e<c.yData.length;e++)d=l((k.yData[e+g]-c.yData[e])/c.yData[e]*100),b.push([c.xData[e],d]),f.push(c.xData[e]),h.push(d);return{values:b,xData:f,yData:h}}}};b.defaultOptions=m(f.defaultOptions,{params:{period:void 0,periods:[12,26]}});return b}(f);g(b.prototype,{nameBase:"PPO",nameComponents:["periods"]});a.registerSeriesType("ppo",b);"";return b});
d(a,"masters/indicators/ppo.src.js",[],function(){})});//# sourceMappingURL=ppo.js.map