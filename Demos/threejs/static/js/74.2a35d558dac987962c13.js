(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"3F3C":function(t,e,i){"use strict";var n=i("Womt"),o=i("RyHr"),r=function(){function t(){this.initScene(),this.initCamera(),this.initLight(),this.initObject(),this.initRenderer(),this.initControls(),this.animate()}return t.prototype.initScene=function(){this.scene=new n.Scene},t.prototype.initCamera=function(){this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera=new n.PerspectiveCamera(60,window.innerWidth/this.winHeight,.1,1e3),this.camera.position.x=20,this.camera.position.y=-200,this.camera.position.z=20,this.camera.lookAt(new n.Vector3(0,0,0))},t.prototype.initLight=function(){this.light=new n.DirectionalLight(16777215,1),this.light.position.set(-80,60,40),this.light.shadow.camera.far=500,this.light.shadow.camera.near=20,this.light.shadow.camera.left=-50,this.light.shadow.camera.right=50,this.light.shadow.camera.top=50,this.light.shadow.camera.bottom=-50,this.light.castShadow=!0,this.scene.add(this.light)},t.prototype.initObject=function(){},t.prototype.initRenderer=function(){var t=this;this.renderer=new n.WebGLRenderer,this.renderer.setSize(window.innerWidth,this.winHeight),this.renderer.shadowMap.enabled=!0,document.getElementById("app").appendChild(this.renderer.domElement);var e=new MutationObserver((function(i){for(var n=0,o=i;n<o.length;n++){var r=o[n];if("childList"==r.type&&r.removedNodes.length>0){e.disconnect(),t.unload(),t.clear();break}}}));e.observe(document.getElementById("app"),{childList:!0}),window.addEventListener("resize",this.resize.bind(this),!1)},t.prototype.initControls=function(){this.controls=new o.a(this.camera,this.renderer.domElement)},t.prototype.animate=function(){this.renderer&&(this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this)))},t.prototype.resize=function(){this.renderer&&(this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera.aspect=window.innerWidth/this.winHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,this.winHeight))},t.prototype.clear=function(){cancelAnimationFrame(this.animate.bind(this)),this.controls.dispose(),this.scene.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=null,this.scene=null,window.removeEventListener("resize",this.resize.bind(this),!1)},t.prototype.unload=function(){console.log("unload")},t}();e.a=r},Itec:function(t,e,i){"use strict";i.r(e);var n,o=i("3F3C"),r=i("Womt"),s=i("hxDe"),a=i("iZKT"),h=undefined&&undefined.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c=function(t){function e(){return t.call(this)||this}return h(e,t),e.prototype.initObject=function(){var t=this;this.camera.position.x=-20,this.camera.position.y=30,this.camera.position.z=50,this.gui=new a.a,this.clock=new r.Clock,this.scene.background=new r.Color(10526880),this.scene.fog=new r.Fog(10526880,5,100);var e=new r.Mesh(new r.PlaneGeometry(200,200),new r.MeshPhongMaterial({color:16777215}));e.rotation.x=-.5*Math.PI,e.receiveShadow=!0,this.scene.add(e);var i=new r.GridHelper(200,20,0,0),n=i.material;n.transparent=!0,n.opacity=.5,this.scene.add(i),(new s.a).load("./static/models/Naruto.fbx",(function(e){e.traverse((function(t){t instanceof r.Mesh&&(t.castShadow=!0,t.receiveShadow=!0)})),t.mixer=new r.AnimationMixer(e);var i=e.animations;e.position.y+=22,e.scale.set(.2,.2,.2),t.scene.add(e);for(var n=[],o=t.gui.addFolder("Animations"),s={},a=function(e){n[e]=t.mixer.clipAction(i[e]),s["act"+e]=function(){for(var t=0;t<n.length;t++)t===e?n[t].play():n[t].stop()},o.add(s,"act"+e)},h=0;h<i.length;h++)a(h);s.stop=function(){for(var t=0;t<n.length;t++)n[t].stop()},t.gui.add(s,"stop"),n[2].play()}))},e.prototype.animate=function(){if(this.renderer){var t=this.clock.getDelta();this.mixer&&this.mixer.update(t),this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}},e.prototype.unload=function(){this.gui.destroy()},e}(o.a);e["default"]=c}}]);