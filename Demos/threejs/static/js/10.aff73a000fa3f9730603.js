(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2RDN":function(t,i,e){var n,o,r,s=function(t,i){return function(){return t.apply(i,arguments)}},h=[].slice,a={}.hasOwnProperty,l=e("Womt");r=function(t,i){return i(),t},o=function(){function t(t,i){this.timeout=t,this.progress=i,this.doTask=s(this.doTask,this),this.finish=s(this.finish,this),this.start=s(this.start,this),this.check=s(this.check,this)}return t.prototype.check=function(){var t,i;if(null!=this.started)return r(t=Date.now()-this.started,(i=this,function(){var e,n,o;if(null!=(e=t>=i.timeout)?e:Infinity)throw new Error("Timeout reached: "+t+"/"+i.timeout+", "+(null!=(n=i.tasks)?n:0)+" tasks unfinished "+(null!=(o=i.done)?o:0)+" finished.")}))},t.prototype.start=function(){return null==this.started&&(this.started=Date.now()),null==this.tasks&&(this.tasks=0),null==this.total&&(this.total=0),this.total+=1,this.tasks+=1,this.check()},t.prototype.finish=function(){if(null!=this.tasks&&this.tasks<1)throw new Error("Finished more tasks than started");if(this.tasks-=1,this.check(),null==this.done&&(this.done=0),this.done+=1,null!=this.progress&&this.progress(this.done,this.total),0===this.tasks)return this.done,this.timeout,this.started=this.done=this.total=void 0},t.prototype.doTask=function(t){var i;return this.start(),i=t(),this.finish(),i},t}(),function(){function c(t,i,e){var n,r,h,a,c;this.matrix=i,this.options=null!=e?e:{},this.intersect=s(this.intersect,this),this.union=s(this.union,this),this.subtract=s(this.subtract,this),this.toGeometry=s(this.toGeometry,this),this.toMesh=s(this.toMesh,this),this.toTree=s(this.toTree,this),this.withTimer=s(this.withTimer,this),null==this.matrix||this.matrix instanceof l.Matrix4||(this.options=this.matrix,this.matrix=void 0),null==this.options&&(this.options={}),null==this.matrix&&(this.matrix=new l.Matrix4),null==(n=this.options).timer&&(n.timer=new o(null!=(r=null!=(h=this.options.timer)?h.timeout:void 0)?r:this.options.timeout,null!=(a=null!=(c=this.options.timer)?c.progress:void 0)?a:this.options.progress)),this.tree=this.toTree(t)}c.prototype.withTimer=function(t,i){var e;e=this.options.timer;try{return this.options.timer=t,i()}finally{this.options.timer=e}},c.prototype.toTree=function(t){var i,e,n,o,r,s,h,a;if(t instanceof c.Node)return t;for(n=[],h=(i=t instanceof l.Geometry?t:t instanceof l.Mesh?(t.updateMatrix(),this.matrix=t.matrix.clone(),t.geometry):void 0).faces,a=this,o=function(t,e){var o,r,s,h,u,p,d,f,v;for(null==(o=null!=(f=i.faceVertexUvs)?f[0][e]:void 0)&&(o=[new l.Vector2,new l.Vector2,new l.Vector2,new l.Vector2]),s=new c.Polygon,h=p=0,d=(v=["a","b","c","d"]).length;p<d;h=++p)null!=(r=t[v[h]])&&(u=i.vertices[r],(u=new c.Vertex(u.x,u.y,u.z,t.vertexNormals[0],new l.Vector2(o[h].x,o[h].y))).applyMatrix4(a.matrix),s.vertices.push(u));return n.push(s.calculateProperties())},e=r=0,s=h.length;r<s;e=++r)o(h[e],e);return new c.Node(n,this.options)},c.prototype.toMesh=function(t){return null==t&&(t=new l.MeshNormalMaterial),this.options.timer.doTask((i=this,function(){var e,n;return e=i.toGeometry(),r(n=new l.Mesh(e,t),(function(){return n.position.setFromMatrixPosition(i.matrix),n.setRotationFromMatrix(i.matrix)}))}));var i},c.prototype.toGeometry=function(){return this.options.timer.doTask((t=this,function(){var i,e;return e=(new l.Matrix4).getInverse(t.matrix),r(i=new l.Geometry,(function(){var n,o,r,s,a;for(a=[],o=0,r=(s=t.tree.allPolygons()).length;o<r;o++)n=s[o],a.push(t.options.timer.doTask((function(){var t,o,r,s,a,c,u,p,d;for(r=function(){var t,i,o,r;for(r=[],t=0,i=(o=n.vertices).length;t<i;t++)s=o[t],r.push(s.clone().applyMatrix4(e));return r}(),d=[],o=u=2,p=r.length;2<=p?u<p:u>p;o=2<=p?++u:--u)c=[r[0],r[o-1],r[o]],a=function(){var t,i,e,n,o;for(o=[],t=0,i=c.length;t<i;t++)s=c[t],o.push(new l.Vector2(null!=(e=s.uv)?e.x:void 0,null!=(n=s.uv)?n.y:void 0));return o}(),t=function(t,i,e){e.prototype=t.prototype;var n=new e,o=t.apply(n,i);return Object(o)===o?o:n}(l.Face3,h.call(function(){var t,e,n;for(n=[],t=0,e=c.length;t<e;t++)s=c[t],n.push(i.vertices.push(s)-1);return n}()).concat([n.normal.clone()]),(function(){})),i.faces.push(t),d.push(i.faceVertexUvs[0].push(a));return d})));return a}))}));var t},c.prototype.subtract=function(t){return this.options.timer.doTask((i=this,function(){return t.withTimer(i.options.timer,(function(){var e,n,o;return e=(o=[i.tree.clone(),t.tree.clone()])[1],(n=o[0]).invert().clipTo(e),e.clipTo(n).invert().clipTo(n).invert(),new c(n.build(e.allPolygons()).invert(),i.matrix,i.options)}))}));var i},c.prototype.union=function(t){return this.options.timer.doTask((i=this,function(){return t.withTimer(i.options.timer,(function(){var e,n,o;return e=(o=[i.tree.clone(),t.tree.clone()])[1],(n=o[0]).clipTo(e),e.clipTo(n).invert().clipTo(n).invert(),new c(n.build(e.allPolygons()),i.matrix,i.options)}))}));var i},c.prototype.intersect=function(t){return this.options.timer.doTask((i=this,function(){return t.withTimer(i.options.timer,(function(){var e,n,o;return n=(o=[i.tree.clone(),t.tree.clone()])[0],(e=o[1]).clipTo(n.invert()).invert().clipTo(n.clipTo(e)),new c(n.build(e.allPolygons()).invert(),i.matrix,i.options)}))}));var i},c.Vertex=function(t){function i(t,e,n,o,r){this.normal=null!=o?o:new l.Vector3,this.uv=null!=r?r:new l.Vector2,this.interpolate=s(this.interpolate,this),this.lerp=s(this.lerp,this),i.__super__.constructor.call(this,t,e,n)}return function(t,i){for(var e in i)a.call(i,e)&&(t[e]=i[e]);function n(){this.constructor=t}n.prototype=i.prototype,t.prototype=new n,t.__super__=i.prototype}(i,t),i.prototype.clone=function(){return new c.Vertex(this.x,this.y,this.z,this.normal.clone(),this.uv.clone())},i.prototype.lerp=function(t,e){return r(i.__super__.lerp.apply(this,arguments),(n=this,function(){return n.uv.add(t.uv.clone().sub(n.uv).multiplyScalar(e)),n.normal.lerp(t,e)}));var n},i.prototype.interpolate=function(){var t,i;return t=1<=arguments.length?h.call(arguments,0):[],(i=this.clone()).lerp.apply(i,t)},i}(l.Vector3),c.Polygon=function(){function t(t,i,e){this.vertices=null!=t?t:[],this.normal=i,this.w=e,this.subdivide=s(this.subdivide,this),this.tessellate=s(this.tessellate,this),this.classifySide=s(this.classifySide,this),this.classifyVertex=s(this.classifyVertex,this),this.invert=s(this.invert,this),this.clone=s(this.clone,this),this.calculateProperties=s(this.calculateProperties,this),this.vertices.length&&this.calculateProperties()}return t.prototype.calculateProperties=function(){return r(this,(t=this,function(){var i,e,n,o;return i=(o=t.vertices)[0],e=o[1],n=o[2],t.normal=e.clone().sub(i).cross(n.clone().sub(i)).normalize(),t.w=t.normal.clone().dot(i)}));var t},t.prototype.clone=function(){var t;return new c.Polygon(function(){var i,e,n,o;for(o=[],i=0,e=(n=this.vertices).length;i<e;i++)t=n[i],o.push(t.clone());return o}.call(this),this.normal.clone(),this.w)},t.prototype.invert=function(){return r(this,(t=this,function(){return t.normal.multiplyScalar(-1),t.w*=-1,t.vertices.reverse()}));var t},t.prototype.classifyVertex=function(t){var i;switch(i=this.normal.dot(t)-this.w,!1){case!(i<-1e-5):return 2;case!(i>1e-5):return 1;default:return 0}},t.prototype.classifySide=function(t){var i,e,n,o,r,s,h,a;for(e=(s=[0,0])[0],i=s[1],a=this,n=function(t){switch(a.classifyVertex(t)){case 1:return e+=1;case 2:return i+=1}},o=0,r=(h=t.vertices).length;o<r;o++)n(h[o]);return e>0&&0===i?1:0===e&&i>0?2:e===i&&0===i?0:3},t.prototype.tessellate=function(t){var i,e,n,o,s,h,a,l,u,p,d,f,v,m,y,w;if(m={f:[],b:[],count:t.vertices.length},n=m.f,i=m.b,e=m.count,3!==this.classifySide(t))return[t];for(o=f=0,v=(y=t.vertices).length;f<v;o=++f)p=y[o],d=t.vertices[(o+1)%e],a=(w=function(){var t,i,e,n;for(n=[],t=0,i=(e=[p,d]).length;t<i;t++)u=e[t],n.push(this.classifyVertex(u));return n}.call(this))[0],l=w[1],2!==a&&n.push(p),1!==a&&i.push(p),3==(a|l)&&(h=(this.w-this.normal.dot(p))/this.normal.dot(d.clone().sub(p)),u=p.interpolate(d,h),n.push(u),i.push(u));return r(s=[],(function(){if(n.length>=3&&s.push(new c.Polygon(n)),i.length>=3)return s.push(new c.Polygon(i))}))},t.prototype.subdivide=function(t,i,e,n,o){var r,s,h,a,l,c;for(c=[],h=0,a=(l=this.tessellate(t)).length;h<a;h++)switch(r=l[h],s=this.classifySide(r)){case 1:c.push(n.push(r));break;case 2:c.push(o.push(r));break;case 0:this.normal.dot(r.normal)>0?c.push(i.push(r)):c.push(e.push(r));break;default:throw new Error("BUG: Polygon of classification "+s+" in subdivision")}return c},t}(),c.Node=function(){function t(t,i){var e;this.options=null!=i?i:{},this.clipTo=s(this.clipTo,this),this.clipPolygons=s(this.clipPolygons,this),this.invert=s(this.invert,this),this.allPolygons=s(this.allPolygons,this),this.isConvex=s(this.isConvex,this),this.build=s(this.build,this),this.clone=s(this.clone,this),null==t||t instanceof Array||(this.options=t,t=void 0),this.polygons=[],this.options.timer.doTask((e=this,function(){if(null!=t&&t.length)return e.build(t)}))}return t.prototype.clone=function(){var t,i;return r(t=new c.Node(this.options),(i=this,function(){var e;return t.divider=null!=(e=i.divider)?e.clone():void 0,t.polygons=i.options.timer.doTask((function(){var t,e,n,o,r;for(r=[],e=0,n=(o=i.polygons).length;e<n;e++)t=o[e],r.push(t.clone());return r})),t.front=i.options.timer.doTask((function(){var t;return null!=(t=i.front)?t.clone():void 0})),t.back=i.options.timer.doTask((function(){var t;return null!=(t=i.back)?t.clone():void 0}))}))},t.prototype.build=function(t){return r(this,(i=this,function(){var e,n,o,r;for(n in o={front:[],back:[]},null==i.divider&&(i.divider=t[0].clone()),i.options.timer.doTask((function(){var e,n,r,s;for(s=[],n=0,r=t.length;n<r;n++)e=t[n],s.push(i.options.timer.doTask((function(){return i.divider.subdivide(e,i.polygons,i.polygons,o.front,o.back)})));return s})),r=[],o)a.call(o,n)&&((e=o[n]).length?(null==i[n]&&(i[n]=new c.Node(i.options)),r.push(i[n].build(e))):r.push(void 0));return r}));var i},t.prototype.isConvex=function(t){var i,e,n,o,r,s;for(n=0,r=t.length;n<r;n++)for(i=t[n],o=0,s=t.length;o<s;o++)if(i!==(e=t[o])&&2!==e.classifySide(i))return!1;return!0},t.prototype.allPolygons=function(){return this.options.timer.doTask((t=this,function(){var i,e;return t.polygons.slice().concat((null!=(e=t.front)?e.allPolygons():void 0)||[]).concat((null!=(i=t.back)?i.allPolygons():void 0)||[])}));var t},t.prototype.invert=function(){return r(this,(t=this,function(){return t.options.timer.doTask((function(){var i,e,n,o,r,s,h,a,l;for(n=0,r=(h=t.polygons).length;n<r;n++)e=h[n],t.options.timer.doTask((function(){return e.invert()}));for(o=0,s=(a=[t.divider,t.front,t.back]).length;o<s;o++)i=a[o],t.options.timer.doTask((function(){return null!=i?i.invert():void 0}));return l=[t.back,t.front],t.front=l[0],t.back=l[1],l}))}));var t},t.prototype.clipPolygons=function(t){return this.options.timer.doTask((i=this,function(){var e,n,o,r,s;if(!i.divider)return t.slice();for(n=[],e=[],r=0,s=t.length;r<s;r++)o=t[r],i.options.timer.doTask((function(){return i.divider.subdivide(o,n,e,n,e)}));return i.front&&(n=i.front.clipPolygons(n)),i.back&&(e=i.back.clipPolygons(e)),i.back?n.concat(e):n}));var i},t.prototype.clipTo=function(t){return r(this,(i=this,function(){return i.options.timer.doTask((function(){var e,n;return i.polygons=t.clipPolygons(i.polygons),null!=(e=i.front)&&e.clipTo(t),null!=(n=i.back)?n.clipTo(t):void 0}))}));var i},t}(),t.exports?t.exports=c:(n=function(){return c}.call(i,e,i,t))===undefined||(t.exports=n)}()},"3F3C":function(t,i,e){"use strict";var n=e("Womt"),o=e("RyHr"),r=function(){function t(){this.initScene(),this.initCamera(),this.initLight(),this.initObject(),this.initRenderer(),this.initControls(),this.animate()}return t.prototype.initScene=function(){this.scene=new n.Scene},t.prototype.initCamera=function(){this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera=new n.PerspectiveCamera(60,window.innerWidth/this.winHeight,.1,1e3),this.camera.position.x=20,this.camera.position.y=-200,this.camera.position.z=20,this.camera.lookAt(new n.Vector3(0,0,0))},t.prototype.initLight=function(){this.light=new n.DirectionalLight(16777215,1),this.light.position.set(-80,60,40),this.light.shadow.camera.far=500,this.light.shadow.camera.near=20,this.light.shadow.camera.left=-50,this.light.shadow.camera.right=50,this.light.shadow.camera.top=50,this.light.shadow.camera.bottom=-50,this.light.castShadow=!0,this.scene.add(this.light)},t.prototype.initObject=function(){},t.prototype.initRenderer=function(){var t=this;this.renderer=new n.WebGLRenderer,this.renderer.setSize(window.innerWidth,this.winHeight),this.renderer.shadowMap.enabled=!0,document.getElementById("app").appendChild(this.renderer.domElement);var i=new MutationObserver((function(e){for(var n=0,o=e;n<o.length;n++){var r=o[n];if("childList"==r.type&&r.removedNodes.length>0){i.disconnect(),t.unload(),t.clear();break}}}));i.observe(document.getElementById("app"),{childList:!0}),window.addEventListener("resize",this.resize.bind(this),!1)},t.prototype.initControls=function(){this.controls=new o.a(this.camera,this.renderer.domElement)},t.prototype.animate=function(){this.renderer&&(this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this)))},t.prototype.resize=function(){this.renderer&&(this.winHeight=window.innerHeight-document.getElementById("app").getBoundingClientRect().top,this.camera.aspect=window.innerWidth/this.winHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,this.winHeight))},t.prototype.clear=function(){cancelAnimationFrame(this.animate.bind(this)),this.controls.dispose(),this.scene.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=null,this.scene=null,window.removeEventListener("resize",this.resize.bind(this),!1)},t.prototype.unload=function(){console.log("unload")},t}();i.a=r},mKVp:function(t,i,e){"use strict";e.r(i);var n,o=e("3F3C"),r=e("Womt"),s=e("2RDN"),h=e.n(s),a=undefined&&undefined.__extends||(n=function(t,i){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)},function(t,i){function e(){this.constructor=t}n(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}),l=function(t){function i(){return t.call(this)||this}return a(i,t),i.prototype.createMesh=function(t){var i=new r.MeshBasicMaterial({opacity:.5,wireframeLinewidth:.5,wireframe:!0});return new r.Mesh(t,i)},i.prototype.initObject=function(){var t=new r.SphereGeometry(50,20,20),i=this.createMesh(t),e=new r.BoxGeometry(30,30,30),n=this.createMesh(e);n.position.x=-50;var o=new h.a(i),s=new h.a(n),a=o.intersect(s).toMesh();a.geometry.computeFaceNormals(),a.geometry.computeVertexNormals();var l=new r.MeshPhongMaterial({color:65535});a.material=l,this.scene.add(i),this.scene.add(n),this.scene.add(a)},i}(o.a);i["default"]=l}}]);