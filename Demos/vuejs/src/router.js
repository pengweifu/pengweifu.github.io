/*
* @Author: pengweifu
* @Date:   2017-09-20 09:10:53
* @Last Modified by:   pengweifu
* @Last Modified time: 2017-09-27 13:45:32
*/
define(function(require){
  var Vue=require('vue');
  var store=require('src/store');
  var VueRouter=require('VueRouter');
  Vue.use(VueRouter);
  var router= new VueRouter({
    // mode: 'history',
    base:'/UploadFiles/files/vuejs/',
    routes:[
      {
        path:'/home',
        component:function(reslove){
          return require(['src/pages/home'],reslove)
        }
      },
      {
        path:'/login',
        component:function(reslove){
          return require(['src/pages/login'],reslove)
        }
      },
      {
        path:'/write',
        component:function(reslove){
          return require(['src/pages/write'],reslove)
        },
      },
      {
        path:'/member',
        component:function(reslove){
          return require(['src/pages/member'],reslove)
        }
      },
      {
        path:'/config',
        component:function(reslove){
          return require(['src/pages/config'],reslove)
        }
      },
      {
        path:'*',
        redirect:"/home"
      }
    ]
  });
  router.beforeEach(function(to, from, next){
    if (to.path=='/home' || to.path=='/login' || store.getters.isLogin) {
      next();
    }else{
      next('/login');
    }
  });
  return router;
});