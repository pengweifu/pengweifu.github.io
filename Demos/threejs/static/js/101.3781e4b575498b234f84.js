(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"3F3C":function(e,t,i){"use strict";var n=i("Womt"),r=i("RyHr"),s=function(){function e(){this.initScene(),this.initCamera(),this.initLight(),this.initObject(),this.initRenderer(),this.initControls(),this.animate()}return e.prototype.initScene=function(){this.scene=new n.Scene},e.prototype.initCamera=function(){this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera=new n.PerspectiveCamera(60,window.innerWidth/this.winHeight,.1,1e3),this.camera.position.x=20,this.camera.position.y=-200,this.camera.position.z=20,this.camera.lookAt(new n.Vector3(0,0,0))},e.prototype.initLight=function(){this.light=new n.DirectionalLight(16777215,1),this.light.position.set(-80,60,40),this.light.shadow.camera.far=500,this.light.shadow.camera.near=20,this.light.shadow.camera.left=-50,this.light.shadow.camera.right=50,this.light.shadow.camera.top=50,this.light.shadow.camera.bottom=-50,this.light.castShadow=!0,this.scene.add(this.light)},e.prototype.initObject=function(){},e.prototype.initRenderer=function(){var e=this;this.renderer=new n.WebGLRenderer,this.renderer.setSize(window.innerWidth,this.winHeight),this.renderer.shadowMap.enabled=!0,document.getElementById("app").appendChild(this.renderer.domElement);var t=new MutationObserver((function(i){for(var n=0,r=i;n<r.length;n++){var s=r[n];if("childList"==s.type&&s.removedNodes.length>0){t.disconnect(),e.unload(),e.clear();break}}}));t.observe(document.getElementById("app"),{childList:!0}),window.addEventListener("resize",this.resize.bind(this),!1)},e.prototype.initControls=function(){this.controls=new r.a(this.camera,this.renderer.domElement)},e.prototype.animate=function(){this.renderer&&(this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this)))},e.prototype.resize=function(){this.renderer&&(this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera.aspect=window.innerWidth/this.winHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,this.winHeight))},e.prototype.clear=function(){cancelAnimationFrame(this.animate.bind(this)),this.controls.dispose(),this.scene.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=null,this.scene=null,window.removeEventListener("resize",this.resize.bind(this),!1)},e.prototype.unload=function(){console.log("unload")},e}();t.a=s},akVr:function(e,t,i){"use strict";i.r(t);var n,r=i("3F3C"),s=i("Womt"),a=i("iZKT"),o=undefined&&undefined.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),h=function(e){function t(){return e.call(this)||this}return o(t,e),t.prototype.initObject=function(){this.loader=new s.CubeTextureLoader,this.loader.setPath("./static/images/env4/");var e=this.loader.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);e.flipY=!1,this.scene.background=e,this.gui=new a.a,this.gui.add(this,"changeBg"),this.camera.position.x=0,this.camera.position.y=5,this.camera.position.z=15,this.light.shadow.camera.left=-100,this.light.shadow.camera.right=100,this.light.shadow.camera.top=100,this.light.shadow.camera.bottom=-100,this.light.position.set(0,50,-50),this.scene.add(new s.AmbientLight(15921906));var t=(new s.TextureLoader).load("./static/images/matcap-porcelain-white.jpg"),i=new s.Mesh(new s.SphereGeometry(1,64,64),new s.MeshPhongMaterial({map:t}));i.position.x=-10,this.scene.add(i),this.camera1=new s.CubeCamera(1,1e3,256),this.scene.add(this.camera1);var n=new s.SphereBufferGeometry(5,100,50),r=new s.MeshLambertMaterial({envMap:this.camera1.renderTarget.texture});this.obj=new s.Mesh(n,r),this.scene.add(this.obj)},t.prototype.changeBg=function(){var e;"./static/images/env4/"===this.loader.path?(this.loader.setPath("./static/images/env3/"),e=this.loader.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"])):(this.loader.setPath("./static/images/env4/"),e=this.loader.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"])),this.scene.background=e,this.obj.material.envMap=this.camera1.renderTarget.texture},t.prototype.animate=function(){this.renderer&&(this.controls.autoRotate=!0,this.controls.update(),this.camera1.update(this.renderer,this.scene),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this)))},t.prototype.unload=function(){this.gui.destroy()},t}(r.a);t["default"]=h}}]);