/*
* @Author: pengweifu
* @Date:   2017-09-20 09:10:53
* @Last Modified by:   pengweifu
* @Last Modified time: 2017-09-27 12:58:57
*/
define(['vue','Vuex'],function(Vue,Vuex){
  Vue.use(Vuex);
  var store=new Vuex.Store({
    state: {
      auth:[],
    },
    getters: {
      isLogin:function(state){
        var session;
        if (state.auth.length > 0) {
          return true;
        }
        session=sessionStorage.getItem('auth');
        session=JSON.parse(session);
        if (!!session){
          return true;
        }
        session=localStorage.getItem('auth');
        session=JSON.parse(session);
        if (!!session){
          return true;
        }
        return false;
      },
    },
    mutations: {
      setAuth:function(state,payload){
        state.auth=payload.auth;
      }
    },
    actions:{
      login:function(context,opt){
        return new Promise(function(resolve, reject){
          context.commit('setAuth',{auth:opt.auth});
          sessionStorage.setItem('auth',JSON.stringify(opt.auth));
          if (opt.remember) {
            localStorage.setItem('auth',JSON.stringify(opt.auth));
          }
          resolve();
        });
      },
      logout:function(context){
        return new Promise(function(resolve, reject){
          context.commit('setAuth',{auth:[]});
          sessionStorage.removeItem('auth');
          localStorage.removeItem('auth');
          resolve();
        });
      },
    }
  });
  return store;
});