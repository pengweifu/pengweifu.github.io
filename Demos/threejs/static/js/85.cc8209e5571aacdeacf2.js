(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"3F3C":function(t,e,i){"use strict";var n=i("Womt"),s=i("RyHr"),o=function(){function t(){this.initScene(),this.initCamera(),this.initLight(),this.initObject(),this.initRenderer(),this.initControls(),this.animate()}return t.prototype.initScene=function(){this.scene=new n.Scene},t.prototype.initCamera=function(){this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera=new n.PerspectiveCamera(60,window.innerWidth/this.winHeight,.1,1e3),this.camera.position.x=20,this.camera.position.y=-200,this.camera.position.z=20,this.camera.lookAt(new n.Vector3(0,0,0))},t.prototype.initLight=function(){this.light=new n.DirectionalLight(16777215,1),this.light.position.set(-80,60,40),this.light.shadow.camera.far=500,this.light.shadow.camera.near=20,this.light.shadow.camera.left=-50,this.light.shadow.camera.right=50,this.light.shadow.camera.top=50,this.light.shadow.camera.bottom=-50,this.light.castShadow=!0,this.scene.add(this.light)},t.prototype.initObject=function(){},t.prototype.initRenderer=function(){var t=this;this.renderer=new n.WebGLRenderer,this.renderer.setSize(window.innerWidth,this.winHeight),this.renderer.shadowMap.enabled=!0,document.getElementById("app").appendChild(this.renderer.domElement);var e=new MutationObserver((function(i){for(var n=0,s=i;n<s.length;n++){var o=s[n];if("childList"==o.type&&o.removedNodes.length>0){e.disconnect(),t.unload(),t.clear();break}}}));e.observe(document.getElementById("app"),{childList:!0}),window.addEventListener("resize",this.resize.bind(this),!1)},t.prototype.initControls=function(){this.controls=new s.a(this.camera,this.renderer.domElement)},t.prototype.animate=function(){this.renderer&&(this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this)))},t.prototype.resize=function(){this.renderer&&(this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera.aspect=window.innerWidth/this.winHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,this.winHeight))},t.prototype.clear=function(){cancelAnimationFrame(this.animate.bind(this)),this.controls.dispose(),this.scene.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=null,this.scene=null,window.removeEventListener("resize",this.resize.bind(this),!1)},t.prototype.unload=function(){console.log("unload")},t}();e.a=o},mLYD:function(t,e,i){"use strict";i.r(e);var n,s=i("3F3C"),o=i("Womt"),r=i("QIYC"),a=i("5kJi"),h=i("sxfH"),c=i("iZKT"),d=undefined&&undefined.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l=function(t){function e(){return t.call(this)||this}return d(e,t),e.prototype.initObject=function(){var t=this;this.camera.position.y=20,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.canJump=!1,this.prevTime=performance.now(),this.spaceUp=!0,this.upSpeed=200,this.speed=500,this.velocity=new o.Vector3,this.direction=new o.Vector3,this.rotation=new o.Vector3,this.clock=new o.Clock,this.horizontalRaycaster=new o.Raycaster(new o.Vector3,new o.Vector3,0,10),this.downRaycaster=new o.Raycaster(new o.Vector3,new o.Vector3(0,-1,0),0,10),(new r.a).load("./static/models/city.mtl",(function(e){var i=new a.a;i.setMaterials(e),i.load("./static/models/city.obj",(function(e){t.scene.add(e)}))})),this.gui=new c.a,this.gui.add(this,"fullScreen")},e.prototype.fullScreen=function(){"none"===document.getElementById("header").style.display?document.getElementById("header").style.display="":(document.getElementById("header").style.display="none",this.ctrl.lock())},e.prototype.animate=function(){if(this.renderer){if(this.ctrl||(this.ctrl=new h.a(this.camera,document.body),this.scene.add(this.ctrl.getObject()),this.ctrl.addEventListener("lock",(function(){console.log("menu.style.display none")})),this.ctrl.addEventListener("unlock",(function(){console.log("menu.style.display block"),document.getElementById("header").style.display=""})),this.handler=this.onKeyDown.bind(this),window.addEventListener("keydown",this.handler,!1),window.addEventListener("keyup",this.handler,!1)),this.ctrl.isLocked){var t=this.clock.getDelta();this.velocity.x-=10*this.velocity.x*t,this.velocity.z-=10*this.velocity.z*t,this.velocity.y-=9.8*100*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveLeft)-Number(this.moveRight),this.direction.normalize();var e=this.ctrl.getObject();e.getWorldDirection(this.rotation);var i=new o.Matrix4;this.direction.z>0?this.direction.x>0?i.makeRotationY(Math.PI/4):this.direction.x<0?i.makeRotationY(-Math.PI/4):i.makeRotationY(0):this.direction.z<0?this.direction.x>0?i.makeRotationY(Math.PI/4*3):this.direction.x<0?i.makeRotationY(-Math.PI/4*3):i.makeRotationY(Math.PI):this.direction.x>0?i.makeRotationY(Math.PI/2):this.direction.x<0&&i.makeRotationY(-Math.PI/2),this.rotation.applyMatrix4(i),this.horizontalRaycaster.set(e.position,this.rotation),0==this.horizontalRaycaster.intersectObjects(this.scene.children,!0).length&&((this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*this.speed*t),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*this.speed*t)),this.downRaycaster.ray.origin.copy(e.position),this.downRaycaster.ray.origin.y-=10,this.downRaycaster.intersectObjects(this.scene.children,!0).length>0&&(this.velocity.y=Math.max(0,this.velocity.y),this.canJump=!0),e.translateX(this.velocity.x*t),e.translateY(this.velocity.y*t),e.translateZ(this.velocity.z*t),e.position.y<10&&(this.velocity.y=0,e.position.y=10,this.canJump=!0)}this.controls.dispose(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}},e.prototype.onKeyDown=function(t){switch(t.keyCode){case 38:case 87:this.moveForward=!0;break;case 37:case 65:this.moveLeft=!0;break;case 40:case 83:this.moveBackward=!0;break;case 39:case 68:this.moveRight=!0;break;case 32:this.canJump&&this.spaceUp&&(this.velocity.y+=this.upSpeed),this.canJump=!1,this.spaceUp=!1}},e.prototype.onKeyUp=function(t){switch(t.keyCode){case 38:case 87:this.moveForward=!1;break;case 37:case 65:this.moveLeft=!1;break;case 40:case 83:this.moveBackward=!1;break;case 39:case 68:this.moveRight=!1;break;case 32:this.spaceUp=!0}},e.prototype.unload=function(){window.removeEventListener("keydown",this.handler,!1),window.removeEventListener("keyup",this.handler,!1),this.ctrl.dispose(),this.gui&&this.gui.destroy()},e}(s.a);e["default"]=l}}]);