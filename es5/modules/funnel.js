/*
 Highcharts JS v11.1.0 (2023-08-20)

 Highcharts funnel module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/funnel",["highcharts"],function(t){a(t);a.Highcharts=t;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function t(a,f,Q,w){a.hasOwnProperty(f)||(a[f]=w.apply(null,Q),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:f,module:a[f]}})))}a=a?a._modules:
{};t(a,"Series/Funnel/FunnelSeries.js",[a["Core/Chart/Chart.js"],a["Core/Globals.js"],a["Extensions/BorderRadius.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,f,Q,w,l){var D=this&&this.__extends||function(){function a(d,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var k in a)Object.prototype.hasOwnProperty.call(a,k)&&(b[k]=a[k])};return a(d,b)}return function(d,b){function C(){this.constructor=d}if("function"!==
typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");a(d,b);d.prototype=null===b?Object.create(b):(C.prototype=b.prototype,new C)}}(),r=f.noop,e=w.series,I=w.seriesTypes.pie;f=l.addEvent;var M=l.extend,t=l.fireEvent,L=l.isArray,S=l.merge,T=l.pick,X=l.relativeLength;l=function(a){function d(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}D(d,a);d.prototype.alignDataLabel=function(a,C,d,k,x){var b=
a.series;k=b.options.reversed;var m=a.dlBox||a.shapeArgs,l=d.align,r=d.verticalAlign,f=((b.options||{}).dataLabels||{}).inside,H=b.center[1];b=b.getWidthAt((k?2*H-a.plotY:a.plotY)-m.height/2+C.height);b="middle"===r?(m.topWidth-m.bottomWidth)/4:(b-m.bottomWidth)/2;H=m.y;var D=m.x,u=T(C.height,C.getBBox().height);"middle"===r?H=m.y-m.height/2+u/2:"top"===r&&(H=m.y-m.height+u+d.padding);if("top"===r&&!k||"bottom"===r&&k||"middle"===r)"right"===l?D=m.x-d.padding+b:"left"===l&&(D=m.x+d.padding-b);k={x:D,
y:k?H-m.height:H,width:m.bottomWidth,height:m.height};d.verticalAlign="bottom";f&&!a.visible||e.prototype.alignDataLabel.call(this,a,C,d,k,x);f&&(!a.visible&&a.dataLabel&&(a.dataLabel.placed=!1),a.contrastColor&&C.css({color:a.contrastColor}))};d.prototype.drawDataLabels=function(){var a=this.data,d=this.options.dataLabels.distance,r,k=a.length;for(this.center[2]-=2*d;k--;){var x=a[k];var l=(r=x.half)?1:-1;var m=x.plotY;x.labelDistance=T(x.options.dataLabels&&x.options.dataLabels.distance,d);this.maxLabelDistance=
Math.max(x.labelDistance,this.maxLabelDistance||0);var e=this.getX(m,r,x);x.labelPosition={natural:{x:0,y:m},computed:{},alignment:r?"right":"left",connectorPosition:{breakAt:{x:e+(x.labelDistance-5)*l,y:m},touchingSliceAt:{x:e+x.labelDistance*l,y:m}}}}w.seriesTypes[this.options.dataLabels.inside?"column":"pie"].prototype.drawDataLabels.call(this)};d.prototype.translate=function(){function a(a){var c=Math.tan(a/2),d=Math.cos(F),g=Math.sin(F),U=W,b=U/c;a=Math.tan((Math.PI-a)/3.2104);b>G&&(b=G,U=b*
c);a*=U;return{dx:[b*d,(b-a)*d,b-a,b],dy:[b*g,(b-a)*g,b-a,b].map(function(a){return m?-a:a})}}function d(a,c){return/%$/.test(a)?c*parseInt(a,10)/100:parseInt(a,10)}var l=0,k=this,e=k.chart,f=k.options,m=f.reversed,D=f.ignoreHiddenPoint,I=Q.optionsToObject(f.borderRadius),w=e.plotWidth;e=e.plotHeight;var M=0,V=f.center,u=d(V[0],w),E=d(V[1],e),L=d(f.width,w),A,B=d(f.height,e),J=d(f.neckWidth,w),R=d(f.neckHeight,e),K=E-B/2+B-R,N=k.data,v,O,W=X(I.radius,L),P=I.scope,F,G,S="left"===f.dataLabels.position?
1:0,y,p,z,h,g,q,n;k.getWidthAt=function(a){var c=E-B/2;return a>K||B===R?J:J+(L-J)*(1-(a-c)/(B-R))};k.getX=function(a,c,b){return u+(c?-1:1)*(k.getWidthAt(m?2*E-a:a)/2+b.labelDistance)};k.center=[u,E,B];k.centerX=u;N.forEach(function(a){!a.y||!a.isValid()||D&&!1===a.visible||(l+=a.y)});N.forEach(function(b){n=null;O=l?b.y/l:0;p=E-B/2+M*B;g=p+O*B;A=k.getWidthAt(p);y=u-A/2;z=y+A;A=k.getWidthAt(g);h=u-A/2;q=h+A;p>K?(y=h=u-J/2,z=q=u+J/2):g>K&&(n=g,A=k.getWidthAt(K),h=u-A/2,q=h+A,g=K);m&&(p=2*E-p,g=2*
E-g,null!==n&&(n=2*E-n));if(!W||"point"!==P&&0!==b.index&&b.index!==N.length-1&&null===n)v=[["M",y,p],["L",z,p],["L",q,g]],null!==n&&v.push(["L",q,n],["L",h,n]),v.push(["L",h,g]);else{var c=Math.abs(g-p),d=z-q,e=q-h,f=Math.sqrt(d*d+c*c);F=Math.atan(c/d);G=f/2;null!==n&&(G=Math.min(G,Math.abs(n-g)/2));1<=e&&(G=Math.min(G,e/2));c=a(F);v="stack"===P&&0!==b.index?[["M",y,p],["L",z,p]]:[["M",y+c.dx[0],p+c.dy[0]],["C",y+c.dx[1],p+c.dy[1],y+c.dx[2],p,y+c.dx[3],p],["L",z-c.dx[3],p],["C",z-c.dx[2],p,z-c.dx[1],
p+c.dy[1],z-c.dx[0],p+c.dy[0]]];null!==n?(e=a(Math.PI/2),c=a(Math.PI/2+F),v.push(["L",q+c.dx[0],g-c.dy[0]],["C",q+c.dx[1],g-c.dy[1],q,g+c.dy[2],q,g+c.dy[3]]),"stack"===P&&b.index!==N.length-1?v.push(["L",q,n],["L",h,n]):v.push(["L",q,n-e.dy[3]],["C",q,n-e.dy[2],q-e.dx[2],n,q-e.dx[3],n],["L",h+e.dx[3],n],["C",h+e.dx[2],n,h,n-e.dy[2],h,n-e.dy[3]]),v.push(["L",h,g+c.dy[3]],["C",h,g+c.dy[2],h-c.dx[1],g-c.dy[1],h-c.dx[0],g-c.dy[0]])):1<=e?(c=a(Math.PI-F),"stack"===P&&0===b.index?v.push(["L",q,g],["L",
h,g]):v.push(["L",q+c.dx[0],g-c.dy[0]],["C",q+c.dx[1],g-c.dy[1],q-c.dx[2],g,q-c.dx[3],g],["L",h+c.dx[3],g],["C",h+c.dx[2],g,h-c.dx[1],g-c.dy[1],h-c.dx[0],g-c.dy[0]])):(c=a(Math.PI-2*F),v.push(["L",h+c.dx[0],g-c.dy[0]],["C",h+c.dx[1],g-c.dy[1],h-c.dx[1],g-c.dy[1],h-c.dx[0],g-c.dy[0]]))}v.push(["Z"]);b.shapeType="path";b.shapeArgs={d:v};b.percentage=100*O;b.plotX=u;b.plotY=(p+(n||g))/2;b.tooltipPos=[u,b.plotY];b.dlBox={x:h,y:p,topWidth:z-y,bottomWidth:q-h,height:Math.abs(T(n,g)-p),width:NaN};b.slice=
r;b.half=S;!b.isValid()||D&&!1===b.visible||(M+=O)});t(k,"afterTranslate")};d.prototype.sortByAngle=function(a){a.sort(function(a,b){return a.plotY-b.plotY})};d.defaultOptions=S(I.defaultOptions,{animation:!1,borderRadius:0,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,size:!0,dataLabels:{connectorWidth:1,verticalAlign:"middle"},states:{select:{color:"#cccccc",borderColor:"#000000"}}});return d}(I);M(l.prototype,{animate:r});f(a,"afterHideAllOverlappingLabels",
function(){this.series.forEach(function(a){var d=a.options&&a.options.dataLabels;L(d)&&(d=d[0]);a.is("pie")&&a.placeDataLabels&&d&&!d.inside&&a.placeDataLabels()})});w.registerSeriesType("funnel",l);"";return l});t(a,"Series/Pyramid/PyramidSeries.js",[a["Series/Funnel/FunnelSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,f,t){var w=this&&this.__extends||function(){function a(f,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||
function(a,e){for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(a[f]=e[f])};return a(f,e)}return function(f,e){function l(){this.constructor=f}if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");a(f,e);f.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),l=t.merge;t=function(f){function r(){var a=null!==f&&f.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}w(r,f);r.defaultOptions=
l(a.defaultOptions,{neckWidth:"0%",neckHeight:"0%",reversed:!0});return r}(a);f.registerSeriesType("pyramid",t);"";return t});t(a,"masters/modules/funnel.src.js",[],function(){})});//# sourceMappingURL=funnel.js.map