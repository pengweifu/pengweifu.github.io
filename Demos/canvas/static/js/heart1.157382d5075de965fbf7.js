(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7W2i":function(t,e,i){var n=i("SksO");t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},AWpU:function(t,e){t.exports='<div class="pure-g heart1"> <div class="pure-u-1"> <canvas id="canvas"></canvas> </div> </div>'},Nsbk:function(t,e){function i(e){return t.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(e)}t.exports=i},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},SksO:function(t,e){function i(e,n){return t.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(e,n)}t.exports=i},TuO5:function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return x});var n=i("lwsE"),a=i.n(n),s=i("W8MJ"),r=i.n(s),c=i("7W2i"),u=i.n(c),o=i("a1gu"),l=i.n(o),h=i("Nsbk"),p=i.n(h),f=i("ihrq"),d=i("oFb0"),m=i("AWpU"),v=i.n(m);i("ZvbU");function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var i,n=p()(t);if(e){var a=p()(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return l()(this,i)}}var x=function(t){u()(i,t);var e=y(i);function i(){return a()(this,i),e.apply(this,arguments)}return r()(i,[{key:"load",value:function(){var t=document.createElement("div"),e=document.createElement("div");t.classList.add("header"),e.classList.add("main"),new f.a(t),e.innerHTML=v.a,this.container.innerHTML="",this.container.appendChild(t),this.container.appendChild(e),this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.width=parseInt(document.defaultView.getComputedStyle(this.canvas,null).width,10),this.height=parseInt(document.defaultView.getComputedStyle(this.canvas,null).height,10),this.canvas.width=this.width,this.canvas.height=this.height,this.center=[this.width/2,this.height/2],this.progress=.1,this.radius=15,this.factor=8,this.piece=this.radius*this.factor,this.angle=1/this.piece*Math.PI*2,this.rect=[9999,9999,0,0],this.draw()}},{key:"draw",value:function(){var t=this;this.ctx.clearRect(0,0,this.width,this.height),this.grayHeart(),this.text(),this.progress=this.progress>100?.1:this.progress+.5,this.animation=window.requestAnimationFrame(function(){t.draw()})}},{key:"grayHeart",value:function(){this.ctx.save(),this.ctx.beginPath(),this.ctx.translate(this.center[0],this.center[1]),this.ctx.rotate(this.rotate);for(var t=0;t<this.piece;t+=1){var e=this.angle*t,i=this.radius*(16*Math.pow(Math.sin(e),3)),n=-this.radius*(13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e));i<this.rect[0]&&(this.rect[0]=i),n<this.rect[1]&&(this.rect[1]=n),n>this.rect[3]&&(this.rect[3]=n),i>this.rect[2]&&(this.rect[2]=i),this.ctx.lineTo(i,n)}this.ctx.fillStyle="gray",this.ctx.closePath(),this.ctx.fill(),this.ctx.globalCompositeOperation="source-atop";var a=parseInt((this.rect[3]-this.rect[1])*this.progress/100,10);this.ctx.fillStyle="red",this.ctx.beginPath(),this.ctx.rect(this.rect[0],this.rect[3]-a,this.rect[2]-this.rect[0],a),this.ctx.closePath(),this.ctx.fill(),this.ctx.restore()}},{key:"text",value:function(){this.ctx.save(),this.ctx.fillStyle="#F47C7C",this.ctx.font="40px Arial",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText("".concat(this.progress.toFixed(0),"%"),this.center[0],this.center[1]),this.ctx.restore()}},{key:"unload",value:function(){this.animation&&window.cancelAnimationFrame(this.animation)}}]),i}(d.a)},U7TL:function(t,e,i){},ZvbU:function(t,e,i){},a1gu:function(t,e,i){var n=i("cDf5"),a=i("PJYZ");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?a(t):e}},cDf5:function(t,e){function i(e){"@babel/helpers - typeof";return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=i=function(t){return typeof t}:t.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(e)}t.exports=i},cSxR:function(t,e){t.exports='<div class="pure-menu pure-menu-horizontal header-menu"> <a class="pure-menu-heading pure-menu-link" data-link="/"> <img class="pure-img" src="/static/images/logo.jpg"> </a> <ul class="pure-menu-list"> <li class="pure-menu-item"><a class="pure-menu-link" data-link="/">Home</a></li> <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover"> <a class="pure-menu-link">Demos</a> <ul class="pure-menu-children"> <li class="pure-menu-item"><a data-link="/loading" class="pure-menu-link">Loading</a></li> <li class="pure-menu-item"><a data-link="/hack" class="pure-menu-link">Hacker</a></li> <li class="pure-menu-item"><a data-link="/heart" class="pure-menu-link">Heart</a></li> <li class="pure-menu-item"><a data-link="/heart1" class="pure-menu-link">Heart Loading</a></li> <li class="pure-menu-item"><a data-link="/mouse" class="pure-menu-link">Mouse</a></li> <li class="pure-menu-item"><a data-link="/particle" class="pure-menu-link">Particle</a></li> <li class="pure-menu-item"><a data-link="/tree" class="pure-menu-link">Tree</a></li> <li class="pure-menu-item"><a data-link="/random" class="pure-menu-link">Wheel</a></li> <li class="pure-menu-item"><a data-link="/elements" class="pure-menu-link">Element</a></li> <li class="pure-menu-item"><a data-link="/gravity" class="pure-menu-link">Gravity</a></li> <li class="pure-menu-item"><a data-link="/forest" class="pure-menu-link">Forest</a></li> <li class="pure-menu-item"><a data-link="/galaxy" class="pure-menu-link">Galaxy</a></li> <li class="pure-menu-item"><a data-link="/waver" class="pure-menu-link">Waver</a></li> </ul> </li> </ul> </div>'},ihrq:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("lwsE"),a=i.n(n),s=i("W8MJ"),r=i.n(s),c=i("cSxR"),u=i.n(c),o=(i("U7TL"),function(){function t(e){var i=this;a()(this,t),this.container=e,this.load(),this.container.addEventListener("onbeforeunload",function(){i.unload()})}return r()(t,[{key:"load",value:function(){this.container.innerHTML=u.a}},{key:"unload",value:function(){}}]),t}())},oFb0:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var n=i("lwsE"),a=i.n(n),s=i("W8MJ"),r=i.n(s),c=function(){function t(e){var i=this;a()(this,t),this.container=e,this.load(),this.container.addEventListener("onbeforeunload",function(){i.unload()})}return r()(t,[{key:"load",value:function(){}},{key:"unload",value:function(){}}]),t}()}}]);