/*
 Highcharts JS v11.1.0 (2023-08-20)

 X-range series

 (c) 2010-2021 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/xrange",["highcharts"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,b,z,c){a.hasOwnProperty(b)||(a[b]=c.apply(null,z),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}a=a?a._modules:
{};g(a,"Series/XRange/XRangeSeriesDefaults.js",[a["Core/Utilities.js"]],function(a){var b=a.correctFloat,t=a.isNumber,c=a.isObject;"";return{colorByPoint:!0,dataLabels:{formatter:function(){var a=this.point.partialFill;c(a)&&(a=a.amount);if(t(a)&&0<a)return b(100*a)+"%"},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:'<span style="font-size: 0.8em">{point.x} - {point.x2}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.yCategory}</b><br/>'},
borderRadius:3,pointRange:0}});g(a,"Series/XRange/XRangePoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){var t=this&&this.__extends||function(){function a(c,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c])};return a(c,e)}return function(c,e){function b(){this.constructor=c}if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+
String(e)+" is not a constructor or null");a(c,e);c.prototype=null===e?Object.create(e):(b.prototype=e.prototype,new b)}}(),c=a.series.prototype.pointClass.prototype;b=b.extend;a=function(a){function b(){var e=null!==a&&a.apply(this,arguments)||this;e.options=void 0;e.series=void 0;return e}t(b,a);b.getColorByCategory=function(a,b){var e=a.options.colors||a.chart.options.colors;a=b.y%(e?e.length:a.chart.options.chart.colorCount);return{colorIndex:a,color:e&&e[a]}};b.prototype.resolveColor=function(){var a=
this.series;if(a.options.colorByPoint&&!this.options.color){var c=b.getColorByCategory(a,this);a.chart.styledMode||(this.color=c.color);this.options.colorIndex||(this.colorIndex=c.colorIndex)}else this.color||(this.color=a.color)};b.prototype.init=function(){c.init.apply(this,arguments);this.y||(this.y=0);return this};b.prototype.setState=function(){c.setState.apply(this,arguments);this.series.drawPoint(this,this.series.getAnimationVerb())};b.prototype.getLabelConfig=function(){var a=c.getLabelConfig.call(this),
b=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=this.yCategory=b&&b[this.y];return a};b.prototype.isValid=function(){return"number"===typeof this.x&&"number"===typeof this.x2};return b}(a.seriesTypes.column.prototype.pointClass);b(a.prototype,{ttBelow:!1,tooltipDateKeys:["x","x2"]});"";return a});g(a,"Series/XRange/XRangeSeries.js",[a["Core/Globals.js"],a["Core/Color/Color.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Series/XRange/XRangeSeriesDefaults.js"],a["Series/XRange/XRangePoint.js"]],
function(a,b,g,c,H,I){function e(){if(this.isXAxis){var a=v(this.dataMax,-Number.MAX_VALUE);for(var b=0,d=this.series;b<d.length;b++){var l=d[b];if(l.x2Data){var A=0;for(l=l.x2Data;A<l.length;A++){var c=l[A];if(c&&c>a){a=c;var J=!0}}}}J&&(this.dataMax=a)}}var t=this&&this.__extends||function(){function a(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,a){d.__proto__=a}||function(d,a){for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(d[l]=a[l])};return a(b,d)}return function(b,
d){function l(){this.constructor=b}if("function"!==typeof d&&null!==d)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");a(b,d);b.prototype=null===d?Object.create(d):(l.prototype=d.prototype,new l)}}();a=a.noop;var D=b.parse,E=g.series.prototype,F=g.seriesTypes.column,z=c.addEvent,w=c.clamp,K=c.defined;b=c.extend;var G=c.find,y=c.isNumber,B=c.isObject,u=c.merge,v=c.pick,L=c.relativeLength,M=[],C=function(a){function b(){var d=null!==a&&a.apply(this,arguments)||this;
d.data=void 0;d.options=void 0;d.points=void 0;return d}t(b,a);b.compose=function(a){c.pushUnique(M,a)&&z(a,"afterGetSeriesExtremes",e)};b.prototype.init=function(){a.prototype.init.apply(this,arguments);this.options.stacking=void 0};b.prototype.getColumnMetrics=function(){function d(){for(var a=0,d=b.chart.series;a<d.length;a++){var l=d[a],c=l.xAxis;l.xAxis=l.yAxis;l.yAxis=c}}var b=this;d();var c=a.prototype.getColumnMetrics.call(this);d();return c};b.prototype.cropData=function(a,b,c,e){b=E.cropData.call(this,
this.x2Data,b,c,e);b.xData=a.slice(b.start,b.end);return b};b.prototype.findPointIndex=function(a){var d=this.cropStart,b=this.points,c=a.id;if(c)var e=(e=G(b,function(a){return a.id===c}))?e.index:void 0;"undefined"===typeof e&&(e=(e=G(b,function(d){return d.x===a.x&&d.x2===a.x2&&!d.touched}))?e.index:void 0);this.cropped&&y(e)&&y(d)&&e>=d&&(e-=d);return e};b.prototype.alignDataLabel=function(d){var b=d.plotX;d.plotX=v(d.dlBox&&d.dlBox.centerX,d.plotX);a.prototype.alignDataLabel.apply(this,arguments);
d.plotX=b};b.prototype.translatePoint=function(a){var b=this.xAxis,d=this.yAxis,c=this.columnMetrics,e=this.options,g=e.minPointLength||0,k=(a.shapeArgs&&a.shapeArgs.width||0)/2,n=this.pointXOffset=c.offset,m=v(a.x2,a.x+(a.len||0)),h=e.borderRadius,p=a.plotX,f=b.translate(m,0,0,0,1);m=Math.abs(f-p);var q=this.chart.inverted,r=v(e.borderWidth,1)%2/2,t=c.offset,x=Math.round(c.width);g&&(g-=m,0>g&&(g=0),p-=g/2,f+=g/2);p=Math.max(p,-10);f=w(f,-10,b.len+10);K(a.options.pointWidth)&&(t-=(Math.ceil(a.options.pointWidth)-
x)/2,x=Math.ceil(a.options.pointWidth));e.pointPlacement&&y(a.plotY)&&d.categories&&(a.plotY=d.translate(a.y,0,1,0,1,e.pointPlacement));e=Math.floor(Math.min(p,f))+r;f=Math.floor(Math.max(p,f))+r-e;h=Math.min(L("object"===typeof h?h.radius:h||0,x),Math.min(f,x)/2);h={x:e,y:Math.floor(a.plotY+t)+r,width:f,height:x,r:h};a.shapeArgs=h;q?a.tooltipPos[1]+=n+k:a.tooltipPos[0]-=k+n-h.width/2;k=h.x;n=k+h.width;0>k||n>b.len?(k=w(k,0,b.len),n=w(n,0,b.len),r=n-k,a.dlBox=u(h,{x:k,width:n-k,centerX:r?r/2:null})):
a.dlBox=null;k=a.tooltipPos;n=q?1:0;r=q?0:1;c=this.columnMetrics?this.columnMetrics.offset:-c.width/2;k[n]=q?k[n]+h.width/2:w(k[n]+(b.reversed?-1:0)*h.width,0,b.len-1);k[r]=w(k[r]+(q?-1:1)*c,0,d.len-1);if(d=a.partialFill)B(d)&&(d=d.amount),y(d)||(d=0),a.partShapeArgs=u(h),p=Math.max(Math.round(m*d+a.plotX-p),0),a.clipRectArgs={x:b.reversed?h.x+m-p:h.x,y:h.y,width:p,height:h.height}};b.prototype.translate=function(){a.prototype.translate.apply(this,arguments);for(var b=0,c=this.points;b<c.length;b++)this.translatePoint(c[b])};
b.prototype.drawPoint=function(a,b){var d=this.options,c=this.chart.renderer,e=a.shapeType,l=a.shapeArgs,k=a.partShapeArgs,g=a.clipRectArgs,m=a.state,h=d.states[m||"normal"]||{},p="undefined"===typeof m?"attr":b;m=this.pointAttribs(a,m);h=v(this.chart.options.chart.animation,h.animation);var f=a.graphic,q=a.partialFill;if(a.isNull||!1===a.visible)f&&(a.graphic=f.destroy());else{if(f)f.rect[b](l);else a.graphic=f=c.g("point").addClass(a.getClassName()).add(a.group||this.group),f.rect=c[e](u(l)).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(f);
k&&(f.partRect?(f.partRect[b](u(k)),f.partialClipRect[b](u(g))):(f.partialClipRect=c.clipRect(g.x,g.y,g.width,g.height),f.partRect=c[e](k).addClass("highcharts-partfill-overlay").add(f).clip(f.partialClipRect)));this.chart.styledMode||(f.rect[b](m,h).shadow(d.shadow),k&&(B(q)||(q={}),B(d.partialFill)&&(q=u(d.partialFill,q)),a=q.fill||D(m.fill).brighten(-.3).get()||D(a.color||this.color).brighten(-.3).get(),m.fill=a,f.partRect[p](m,h).shadow(d.shadow)))}};b.prototype.drawPoints=function(){for(var a=
this.getAnimationVerb(),b=0,c=this.points;b<c.length;b++)this.drawPoint(c[b],a)};b.prototype.getAnimationVerb=function(){return this.chart.pointCount<(this.options.animationLimit||250)?"animate":"attr"};b.prototype.isPointInside=function(b){var c=b.shapeArgs,d=b.plotX,e=b.plotY;return c?"undefined"!==typeof d&&"undefined"!==typeof e&&0<=e&&e<=this.yAxis.len&&0<=(c.x||0)+(c.width||0)&&d<=this.xAxis.len:a.prototype.isPointInside.apply(this,arguments)};b.defaultOptions=u(F.defaultOptions,H);return b}(F);
b(C.prototype,{pointClass:I,cropShoulder:1,getExtremesFromAll:!0,parallelArrays:["x","x2","y"],requireSorting:!1,type:"xrange",animate:E.animate,autoIncrement:a,buildKDTree:a});g.registerSeriesType("xrange",C);return C});g(a,"masters/modules/xrange.src.js",[a["Core/Globals.js"],a["Series/XRange/XRangeSeries.js"]],function(a,b){b.compose(a.Axis)})});//# sourceMappingURL=xrange.js.map