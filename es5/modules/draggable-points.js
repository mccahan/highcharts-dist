/*
 Highcharts JS v11.1.0 (2023-08-20)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/modules/draggable-points",["highcharts"],function(p){e(p);e.Highcharts=p;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function p(e,w,p,z){e.hasOwnProperty(w)||(e[w]=z.apply(null,p),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:w,module:e[w]}})))}
e=e?e._modules:{};p(e,"Extensions/DraggablePoints.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Series/Point.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,w,p,z,J,F,A){function K(a){a=a.shapeArgs||a.graphic.getBBox();var b=a.r||0,c=a.height/2;return[["M",0,b],["L",0,c-5],["A",1,1,0,0,0,0,c+5],["A",1,1,0,0,0,0,c-5],["M",0,c+5],["L",0,a.height-b]]}function L(a){return{left:"right",right:"left",
top:"bottom",bottom:"top"}[a]}function U(a){var b=["draggableX","draggableY"];x(a.dragDropProps,function(a){a.optionName&&b.push(a.optionName)});for(var c=b.length;c--;)if(a.options.dragDrop[b[c]])return!0}function V(a){var b=a.series?a.series.length:0;if(a.hasCartesianSeries&&!a.polar||a.mapView)for(;b--;)if(a.series[b].options.dragDrop&&U(a.series[b]))return!0}function W(a){var b=a.series,c=b.chart,d=b.options.dragDrop||{};a=a.options&&a.options.dragDrop;var f,l;x(b.dragDropProps,function(a){"x"===
a.axis&&a.move?f=!0:"y"===a.axis&&a.move&&(l=!0)});return(d.draggableX&&f||d.draggableY&&l)&&!(a&&!1===a.draggableX&&!1===a.draggableY)&&(b.yAxis&&b.xAxis||c.mapView)}function C(a,b){return"undefined"===typeof a.chartX||"undefined"===typeof a.chartY?b.pointer.normalize(a):a}function D(a,b,c,d){var f=b.map(function(b){return y(a,b,c,d)});return function(){f.forEach(function(a){a()})}}function X(a,b,c){var d=b.dragDropData.origin;b=d.chartX;d=d.chartY;var f=a.chartX;a=a.chartY;return Math.sqrt((f-b)*
(f-b)+(a-d)*(a-d))>c}function Y(a,b,c){var d={chartX:a.chartX,chartY:a.chartY,guideBox:c&&{x:c.attr("x"),y:c.attr("y"),width:c.attr("width"),height:c.attr("height")},points:{}};b.forEach(function(b){var c={};x(b.series.dragDropProps,function(d,f){d=b.series[d.axis+"Axis"];c[f]=b[f];c[f+"Offset"]=b.series.chart.mapView&&b.plotX&&b.plotY?"x"===f?b.plotX:b.plotY:d.toPixels(b[f])-(d.horiz?a.chartX:a.chartY)});c.point=b;d.points[b.id]=c});return d}function Z(a){var b=a.series,c=b.options.dragDrop.groupBy,
d=[];b.boosted?b.options.data.forEach(function(a,c){d.push((new b.pointClass).init(b,a));d[d.length-1].index=c}):d=b.points;return a.options[c]?d.filter(function(b){return b.options[c]===a.options[c]}):[a]}function M(a,b){var c=Z(b),d=b.series,f=d.chart,l;t(d.options.dragDrop&&d.options.dragDrop.liveRedraw,!0)||(f.dragGuideBox=l=d.getGuideBox(c),f.setGuideBoxState("default",d.options.dragDrop.guideBox).add(d.group));f.dragDropData={origin:Y(a,c,l),point:b,groupedPoints:c,isDragging:!0}}function aa(a,
b){var c=a.point,d=c.series,f=d.chart,l=v(d.options.dragDrop,c.options.dragDrop),k={},e=a.updateProp,E={};x(c.series.dragDropProps,function(a,b){if(!e||e===b&&a.resize&&(!a.optionName||!1!==l[a.optionName]))if(e||a.move&&("x"===a.axis&&l.draggableX||"y"===a.axis&&l.draggableY))f.mapView?k["x"===b?"lon":"lat"]=a:k[b]=a});(e?[c]:a.groupedPoints).forEach(function(c){E[c.id]={point:c,newValues:c.getDropValues(a.origin,b,k)}});return E}function N(a,b){var c=a.dragDropData.newPoints;b=ba(b);a.isDragDropAnimating=
!0;x(c,function(a){a.point.update(a.newValues,!1)});a.redraw(b);setTimeout(function(){delete a.isDragDropAnimating;a.hoverPoint&&!a.dragHandles&&a.hoverPoint.showDragHandles()},b.duration)}function O(a){var b=a.series&&a.series.chart,c=b&&b.dragDropData;!b||!b.dragHandles||c&&(c.isDragging&&c.draggedPastSensitivity||c.isHoveringHandle===a.id)||b.hideDragHandles()}function P(a){var b=0,c;for(c in a)Object.hasOwnProperty.call(a,c)&&b++;return b}function Q(a){for(var b in a)if(Object.hasOwnProperty.call(a,
b))return a[b]}function ca(a,b){if(!b.zoomOrPanKeyPressed(a)){var c=b.dragDropData;var d=0;if(c&&c.isDragging&&c.point.series){var f=c.point;d=f.series.options.dragDrop;a.preventDefault();c.draggedPastSensitivity||(c.draggedPastSensitivity=X(a,b,t(f.options.dragDrop&&f.options.dragDrop.dragSensitivity,d&&d.dragSensitivity,2)));c.draggedPastSensitivity&&(c.newPoints=aa(c,a),b=c.newPoints,d=P(b),b=1===d?Q(b):null,f.firePointEvent("drag",{origin:c.origin,newPoints:c.newPoints,newPoint:b&&b.newValues,
newPointId:b&&b.point.id,numNewPoints:d,chartX:a.chartX,chartY:a.chartY},function(){var b=f.series,c=b.chart,d=c.dragDropData,e=v(b.options.dragDrop,f.options.dragDrop),u=e.draggableX,g=e.draggableY;b=d.origin;var m=d.updateProp;d=a.chartX-b.chartX;var h=a.chartY-b.chartY,n=d;c.inverted&&(d=-h,h=-n);if(t(e.liveRedraw,!0))N(c,!1),f.showDragHandles();else if(m){g=d;c=h;n=f.series;m=n.chart;e=m.dragDropData;u=n.dragDropProps[e.updateProp];var p=e.newPoints[f.id].newValues,R="function"===typeof u.resizeSide?
u.resizeSide(p,f):u.resizeSide;u.beforeResize&&u.beforeResize(m.dragGuideBox,p,f);m=m.dragGuideBox;n="x"===u.axis&&n.xAxis.reversed||"y"===u.axis&&n.yAxis.reversed?L(R):R;g="x"===u.axis?g-(e.origin.prevdX||0):0;c="y"===u.axis?c-(e.origin.prevdY||0):0;switch(n){case "left":var G={x:m.attr("x")+g,width:Math.max(1,m.attr("width")-g)};break;case "right":G={width:Math.max(1,m.attr("width")+g)};break;case "top":G={y:m.attr("y")+c,height:Math.max(1,m.attr("height")-c)};break;case "bottom":G={height:Math.max(1,
m.attr("height")+c)}}m.attr(G)}else c.dragGuideBox.translate(u?d:0,g?h:0);b.prevdX=d;b.prevdY=h}))}}}function H(a,b){var c=b.dragDropData;if(c&&c.isDragging&&c.draggedPastSensitivity&&c.point.series){var d=c.point,f=c.newPoints,e=P(f),k=1===e?Q(f):null;b.dragHandles&&b.hideDragHandles();a.preventDefault();b.cancelClick=!0;d.firePointEvent("drop",{origin:c.origin,chartX:a.chartX,chartY:a.chartY,newPoints:f,numNewPoints:e,newPoint:k&&k.newValues,newPointId:k&&k.point.id},function(){N(b)})}delete b.dragDropData;
b.dragGuideBox&&(b.dragGuideBox.destroy(),delete b.dragGuideBox)}function da(a){var b=a.container,c=p.doc;V(a)&&(D(b,["mousedown","touchstart"],function(b){b=C(b,a);var c=a.hoverPoint,d=v(c&&c.series.options.dragDrop,c&&c.options.dragDrop),e=d.draggableX||!1;d=d.draggableY||!1;a.cancelClick=!1;!e&&!d||a.zoomOrPanKeyPressed(b)||a.hasDraggedAnnotation||(a.dragDropData&&a.dragDropData.isDragging?H(b,a):c&&W(c)&&(a.mouseIsDown=!1,M(b,c),c.firePointEvent("dragStart",b)))}),D(b,["mousemove","touchmove"],
function(b){ca(C(b,a),a)},{passive:!1}),y(b,"mouseleave",function(b){H(C(b,a),a)}),a.unbindDragDropMouseUp=D(c,["mouseup","touchend"],function(b){H(C(b,a),a)},{passive:!1}),a.hasAddedDragDropEvents=!0,y(a,"destroy",function(){a.unbindDragDropMouseUp&&a.unbindDragDropMouseUp()}))}var ba=e.animObject,g=F.seriesTypes,y=A.addEvent,S=A.clamp,I=A.isNumber,v=A.merge,x=A.objectEach,t=A.pick;e=J.prototype.dragDropProps={x:{axis:"x",move:!0},y:{axis:"y",move:!0}};g.flags&&(g.flags.prototype.dragDropProps=e);
var h=g.column.prototype.dragDropProps={x:{axis:"x",move:!0},y:{axis:"y",move:!1,resize:!0,beforeResize:function(a,b,c){var d=t(c.yBottom,c.series.translatedThreshold),f=a.attr("y"),e=I(c.stackY)?c.stackY-(c.y||0):c.series.options.threshold||0;b=e+b.y;(c.series.yAxis.reversed?b<e:b>=e)?(c=a.attr("height"),a.attr({height:Math.max(0,Math.round(c+(d?d-f-c:0)))})):a.attr({y:Math.round(f+(d?d-f:0))})},resizeSide:function(a,b){var c=b.series.chart.dragHandles;a=a.y>=(b.series.options.threshold||0)?"top":
"bottom";b=L(a);c&&c[b]&&(c[b].destroy(),delete c[b]);return a},handlePositioner:function(a){var b=a.shapeArgs||a.graphic&&a.graphic.getBBox()||{},c=a.series.yAxis.reversed,d=a.series.options.threshold||0;a=a.y||0;return{x:b.x||0,y:!c&&a>=d||c&&a<d?b.y||0:(b.y||0)+(b.height||0)}},handleFormatter:function(a){var b=a.shapeArgs||{};a=b.r||0;b=b.width||0;var c=b/2;return[["M",a,0],["L",c-5,0],["A",1,1,0,0,0,c+5,0],["A",1,1,0,0,0,c-5,0],["M",c+5,0],["L",b-a,0]]}}};g.bullet&&(g.bullet.prototype.dragDropProps=
{x:h.x,y:h.y,target:{optionName:"draggableTarget",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){var b=a.targetGraphic.getBBox();return{x:a.barX,y:b.y+b.height/2}},handleFormatter:h.y.handleFormatter}});g.columnrange&&(g.columnrange.prototype.dragDropProps={x:{axis:"x",move:!0},low:{optionName:"draggableLow",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){a=a.shapeArgs||a.graphic.getBBox();return{x:a.x||0,y:(a.y||0)+(a.height||0)}},handleFormatter:h.y.handleFormatter,
propValidate:function(a,b){return a<=b.high}},high:{optionName:"draggableHigh",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){a=a.shapeArgs||a.graphic.getBBox();return{x:a.x||0,y:a.y||0}},handleFormatter:h.y.handleFormatter,propValidate:function(a,b){return a>=b.low}}});g.boxplot&&(g.boxplot.prototype.dragDropProps={x:h.x,low:{optionName:"draggableLow",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return{x:a.shapeArgs.x||0,y:a.lowPlot}},handleFormatter:h.y.handleFormatter,
propValidate:function(a,b){return a<=b.q1}},q1:{optionName:"draggableQ1",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return{x:a.shapeArgs.x||0,y:a.q1Plot}},handleFormatter:h.y.handleFormatter,propValidate:function(a,b){return a<=b.median&&a>=b.low}},median:{axis:"y",move:!0},q3:{optionName:"draggableQ3",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return{x:a.shapeArgs.x||0,y:a.q3Plot}},handleFormatter:h.y.handleFormatter,propValidate:function(a,
b){return a<=b.high&&a>=b.median}},high:{optionName:"draggableHigh",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return{x:a.shapeArgs.x||0,y:a.highPlot}},handleFormatter:h.y.handleFormatter,propValidate:function(a,b){return a>=b.q3}}});g.ohlc&&(g.ohlc.prototype.dragDropProps={x:h.x,low:{optionName:"draggableLow",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return{x:a.shapeArgs.x,y:a.plotLow}},handleFormatter:h.y.handleFormatter,propValidate:function(a,
b){return a<=b.open&&a<=b.close}},high:{optionName:"draggableHigh",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return{x:a.shapeArgs.x,y:a.plotHigh}},handleFormatter:h.y.handleFormatter,propValidate:function(a,b){return a>=b.open&&a>=b.close}},open:{optionName:"draggableOpen",axis:"y",move:!0,resize:!0,resizeSide:function(a){return a.open>=a.close?"top":"bottom"},handlePositioner:function(a){return{x:a.shapeArgs.x,y:a.plotOpen}},handleFormatter:h.y.handleFormatter,propValidate:function(a,
b){return a<=b.high&&a>=b.low}},close:{optionName:"draggableClose",axis:"y",move:!0,resize:!0,resizeSide:function(a){return a.open>=a.close?"bottom":"top"},handlePositioner:function(a){return{x:a.shapeArgs.x,y:a.plotClose}},handleFormatter:h.y.handleFormatter,propValidate:function(a,b){return a<=b.high&&a>=b.low}}});g.arearange&&(e=g.columnrange.prototype.dragDropProps,F=function(a){a=a.graphic?a.graphic.getBBox().width/2+1:4;return[["M",0-a,0],["a",a,a,0,1,0,2*a,0],["a",a,a,0,1,0,-2*a,0]]},g.arearange.prototype.dragDropProps=
{x:e.x,low:{optionName:"draggableLow",axis:"y",move:!0,resize:!0,resizeSide:"bottom",handlePositioner:function(a){return(a=a.graphics&&a.graphics[0]&&a.graphics[0].getBBox())?{x:a.x+a.width/2,y:a.y+a.height/2}:{x:-999,y:-999}},handleFormatter:F,propValidate:e.low.propValidate},high:{optionName:"draggableHigh",axis:"y",move:!0,resize:!0,resizeSide:"top",handlePositioner:function(a){return(a=a.graphics&&a.graphics[1]&&a.graphics[1].getBBox())?{x:a.x+a.width/2,y:a.y+a.height/2}:{x:-999,y:-999}},handleFormatter:F,
propValidate:e.high.propValidate}});g.waterfall&&(g.waterfall.prototype.dragDropProps={x:h.x,y:v(h.y,{handleFormatter:function(a){return a.isSum||a.isIntermediateSum?null:h.y.handleFormatter(a)}})});if(g.xrange){var T=function(a,b){var c=a.series,d=c.xAxis,e=c.yAxis,g=c.chart.inverted;c=c.columnMetrics?c.columnMetrics.offset:-a.shapeArgs.height/2;b=d.toPixels(a[b],!0);a=e.toPixels(a.y,!0);g&&(b=d.len-b,a=e.len-a);return{x:Math.round(b),y:Math.round(a+c)}};e=g.xrange.prototype.dragDropProps={y:{axis:"y",
move:!0},x:{optionName:"draggableX1",axis:"x",move:!0,resize:!0,resizeSide:"left",handlePositioner:function(a){return T(a,"x")},handleFormatter:K,propValidate:function(a,b){return a<=b.x2}},x2:{optionName:"draggableX2",axis:"x",move:!0,resize:!0,resizeSide:"right",handlePositioner:function(a){return T(a,"x2")},handleFormatter:K,propValidate:function(a,b){return a>=b.x}}};g.gantt&&(g.gantt.prototype.dragDropProps={y:e.y,start:v(e.x,{optionName:"draggableStart",validateIndividualDrag:function(a){return!a.milestone}}),
end:v(e.x2,{optionName:"draggableEnd",validateIndividualDrag:function(a){return!a.milestone}})})}"gauge pie sunburst wordcloud sankey histogram pareto vector windbarb treemap bellcurve sma map mapline".split(" ").forEach(function(a){g[a]&&(g[a].prototype.dragDropProps=null)});var ea={"default":{className:"highcharts-drag-box-default",lineWidth:1,lineColor:"#888",color:"rgba(0, 0, 0, 0.1)",cursor:"move",zIndex:900}},fa={className:"highcharts-drag-handle",color:"#fff",lineColor:"rgba(0, 0, 0, 0.6)",
lineWidth:1,zIndex:901};w.prototype.setGuideBoxState=function(a,b){var c=this.dragGuideBox;b=v(ea,b);a=v(b["default"],b[a]);return c.attr({"class":a.className,stroke:a.lineColor,strokeWidth:a.lineWidth,fill:a.color,cursor:a.cursor,zIndex:a.zIndex}).css({pointerEvents:"none"})};z.prototype.getDropValues=function(a,b,c){var d=this,e=d.series,g=e.chart,k=g.mapView,h=v(e.options.dragDrop,d.options.dragDrop),E={},u=a.points[d.id],B;for(B in c)if(Object.hasOwnProperty.call(c,B)){if("undefined"!==typeof m){var m=
!1;break}m=!0}x(c,function(a,c){var f=u.point[c],n=e[a.axis+"Axis"];if(k){var l=a.axis.toUpperCase();if(k){n=t(h["dragPrecision"+l],0);var q=k.pixelsToLonLat({x:0,y:0}),r=k.pixelsToLonLat({x:g.plotBox.width,y:g.plotBox.height});q=t(h["dragMin"+l],q&&q[c],-Infinity);l=t(h["dragMax"+l],r&&r[c],Infinity);r=b[c];if("Orthographic"===k.projection.options.name)n=r;else{if("lat"===c){if(isNaN(q)||q>k.projection.maxLatitude)q=k.projection.maxLatitude;if(isNaN(l)||l<-1*k.projection.maxLatitude)l=-1*k.projection.maxLatitude;
var B=l;l=q;q=B}k.projection.hasCoordinates||(B=k.pixelsToLonLat({x:b.chartX-g.plotLeft,y:g.plotHeight-b.chartY+g.plotTop}))&&(r=B[c]);n&&(r=Math.round(r/n)*n);n=S(r,q,l)}}else n=void 0}else n=n.toValue((n.horiz?b.chartX:b.chartY)+u[c+"Offset"]),r=a.axis.toUpperCase(),q=e[r.toLowerCase()+"Axis"].categories?1:0,q=t(h["dragPrecision"+r],q),l=t(h["dragMin"+r],-Infinity),r=t(h["dragMax"+r],Infinity),q&&(n=Math.round(n/q)*q),n=S(n,l,r);!I(n)||m&&a.propValidate&&!a.propValidate(n,d)||"undefined"===typeof f||
(E[c]=n)});return E};J.prototype.getGuideBox=function(a){var b=this.chart,c=Infinity,d=-Infinity,e=Infinity,g=-Infinity,k;a.forEach(function(a){var b=a.graphic&&a.graphic.getBBox()||a.shapeArgs;if(b){var f=void 0,h=a.x2;I(h)&&(f=a.series.xAxis.translate(h,!1,!1,!1,!0));h=!(b.width||b.height||b.x||b.y);k=!0;c=Math.min(a.plotX||0,f||0,h?Infinity:b.x||0,c);d=Math.max(a.plotX||0,f||0,(b.x||0)+(b.width||0),d);e=Math.min(a.plotY||0,h?Infinity:b.y||0,e);g=Math.max((b.y||0)+(b.height||0),g)}});return k?b.renderer.rect(c,
e,d-c,g-e):b.renderer.g()};z.prototype.showDragHandles=function(){var a=this,b=a.series,c=b.chart,d=c.inverted,e=c.renderer,g=v(b.options.dragDrop,a.options.dragDrop);x(b.dragDropProps,function(f,h){var k=v(fa,f.handleOptions,g.dragHandle),l={"class":k.className,"stroke-width":k.lineWidth,fill:k.color,stroke:k.lineColor},p=k.pathFormatter||f.handleFormatter,m=f.handlePositioner,t=f.validateIndividualDrag?f.validateIndividualDrag(a):!0;f.resize&&t&&f.resizeSide&&p&&(g["draggable"+f.axis.toUpperCase()]||
g[f.optionName])&&!1!==g[f.optionName]&&(c.dragHandles||(c.dragHandles={group:e.g("drag-drop-handles").add(b.markerGroup||b.group)}),c.dragHandles.point=a.id,m=m(a),l.d=p=p(a),t=a.series.xAxis.categories?-.5:0,!p||m.x<t||0>m.y||(l.cursor=k.cursor||("x"===f.axis!==!!d?"ew-resize":"ns-resize"),(k=c.dragHandles[f.optionName])||(k=c.dragHandles[f.optionName]=e.path().add(c.dragHandles.group)),l.translateX=d?b.yAxis.len-m.y:m.x,l.translateY=d?b.xAxis.len-m.x:m.y,d&&(l.rotation=-90),k.attr(l),D(k.element,
["touchstart","mousedown"],function(b){b=C(b,c);var d=a.series.chart;d.zoomOrPanKeyPressed(b)||(d.mouseIsDown=!1,M(b,a),d.dragDropData.updateProp=b.updateProp=h,a.firePointEvent("dragStart",b),b.stopPropagation(),b.preventDefault())},{passive:!1}),y(c.dragHandles.group.element,"mouseover",function(){c.dragDropData=c.dragDropData||{};c.dragDropData.isHoveringHandle=a.id}),D(c.dragHandles.group.element,["touchend","mouseout"],function(){var b=a.series.chart;b.dragDropData&&a.id===b.dragDropData.isHoveringHandle&&
delete b.dragDropData.isHoveringHandle;b.hoverPoint||O(a)})))})};w.prototype.hideDragHandles=function(){this.dragHandles&&(x(this.dragHandles,function(a,b){"group"!==b&&a.destroy&&a.destroy()}),this.dragHandles.group&&this.dragHandles.group.destroy&&this.dragHandles.group.destroy(),delete this.dragHandles)};y(z,"mouseOver",function(){var a=this;setTimeout(function(){var b=a.series,c=b&&b.chart,d=c&&c.dragDropData,e=c&&c.is3d&&c.is3d();!c||d&&d.isDragging&&d.draggedPastSensitivity||c.isDragDropAnimating||
!b.options.dragDrop||e||(c.dragHandles&&c.hideDragHandles(),a.showDragHandles())},12)});y(z,"mouseOut",function(){var a=this;setTimeout(function(){a.series&&O(a)},10)});y(z,"remove",function(){var a=this.series.chart,b=a.dragHandles;b&&b.point===this.id&&a.hideDragHandles()});w.prototype.zoomOrPanKeyPressed=function(a){var b=this.options.chart||{};b=b.panKey&&b.panKey+"Key";return a[this.zooming.key&&this.zooming.key+"Key"]||a[b]};y(w,"render",function(){this.hasAddedDragDropEvents||da(this)});""});
p(e,"masters/modules/draggable-points.src.js",[],function(){})});//# sourceMappingURL=draggable-points.js.map