(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"3F3C":function(e,t,i){"use strict";var n=i("Womt"),r=i("RyHr"),o=function(){function e(){this.initScene(),this.initCamera(),this.initLight(),this.initObject(),this.initRenderer(),this.initControls(),this.animate()}return e.prototype.initScene=function(){this.scene=new n.Scene},e.prototype.initCamera=function(){this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera=new n.PerspectiveCamera(60,window.innerWidth/this.winHeight,.1,1e3),this.camera.position.x=20,this.camera.position.y=-200,this.camera.position.z=20,this.camera.lookAt(new n.Vector3(0,0,0))},e.prototype.initLight=function(){this.light=new n.DirectionalLight(16777215,1),this.light.position.set(-80,60,40),this.light.shadow.camera.far=500,this.light.shadow.camera.near=20,this.light.shadow.camera.left=-50,this.light.shadow.camera.right=50,this.light.shadow.camera.top=50,this.light.shadow.camera.bottom=-50,this.light.castShadow=!0,this.scene.add(this.light)},e.prototype.initObject=function(){},e.prototype.initRenderer=function(){var e=this;this.renderer=new n.WebGLRenderer,this.renderer.setSize(window.innerWidth,this.winHeight),this.renderer.shadowMap.enabled=!0,document.getElementById("app").appendChild(this.renderer.domElement);var t=new MutationObserver((function(i){for(var n=0,r=i;n<r.length;n++){var o=r[n];if("childList"==o.type&&o.removedNodes.length>0){t.disconnect(),e.unload(),e.clear();break}}}));t.observe(document.getElementById("app"),{childList:!0}),window.addEventListener("resize",this.resize.bind(this),!1)},e.prototype.initControls=function(){this.controls=new r.a(this.camera,this.renderer.domElement)},e.prototype.animate=function(){this.renderer&&(this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this)))},e.prototype.resize=function(){this.renderer&&(this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera.aspect=window.innerWidth/this.winHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,this.winHeight))},e.prototype.clear=function(){cancelAnimationFrame(this.animate.bind(this)),this.controls.dispose(),this.scene.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=null,this.scene=null,window.removeEventListener("resize",this.resize.bind(this),!1)},e.prototype.unload=function(){console.log("unload")},e}();t.a=o},ayuo:function(e,t,i){"use strict";i.r(t);var n,r=i("Womt"),o=i("3F3C"),s=undefined&&undefined.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),h=function(e){function t(){return e.call(this)||this}return s(t,e),t.prototype.initObject=function(){var e=new r.Geometry,t=[],i=new r.SphereGeometry(10,64,64),n=new r.MeshPhongMaterial({color:16711680}),o=new r.Mesh(i,n);o.position.set(10,0,0),o.updateMatrix();var s=new r.SphereBufferGeometry(10,64,64),h=new r.MeshPhongMaterial({color:65280}),a=new r.Mesh(s,h);a.position.set(-10,0,0),a.updateMatrix(),e.merge(i,o.matrix,0),t.push(o.material),e.merge((new r.Geometry).fromBufferGeometry(s),a.matrix,1),e.center(),t.push(a.material),this.obj=new r.Mesh(e,t),this.scene.add(this.obj),this.scene.add(new r.AmbientLight(16777215,.5))},t.prototype.animate=function(){this.renderer&&(this.obj.rotation.y+=.3,this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this)))},t}(o.a);t["default"]=h}}]);