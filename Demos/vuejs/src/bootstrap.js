/*
* @Author: pengweifu
* @Date:   2017-09-20 09:10:53
* @Last Modified by:   pengweifu
* @Last Modified time: 2017-09-27 13:45:20
*/
require.config({
  baseUrl: '/UploadFiles/files/vuejs/',
  map: {
        '*': {
            'css': 'assets/js/requirecss.min'
        }
    },
    paths: {
        'vue': 'assets/js/vue.min',
        'VueRouter': 'assets/js/vue-router.min',
        'axios': 'assets/js/axios.min',
        'Vuex': 'assets/js/vuex.min',
        'MuseUI': 'assets/js/muse-ui.min',
        'Mock': 'assets/js/mock.min',
    },
    shim: {
      MuseUI:{
        deps:['vue','css!assets/css/normalize.min.css','css!assets/css/muse-ui.min.css','css!assets/css/material-icons.css','css!src/style.css'],
        exports:'MuseUI'
      }
    }
});

require(['vue','MuseUI','src/router','src/store','src/components/header','src/components/footer'],function(Vue,MuseUI,router,store,headerComponent,footerComponent){
  Vue.use(MuseUI);
  var app=new Vue({
    el:'#app',
    router:router,
    store:store,
    data:{
      toast: false,
      tips:'',
    },
    created:function(){
      if (this.$store.getters.isLogin && !this.$store.state.auth) {
        var auth=localStorage.getItem('auth');
        this.$store.dispatch('login',{auth:JSON.parse(auth)})
      }
    },
    methods:{
      showToast:function(message) {
        var that = this;
        this.tips=message;
        this.toast = true;
        if (this.toastTimer) {
          clearTimeout(this.toastTimer);
        }
        this.toastTimer = setTimeout(function() { 
          that.toast = false;
        }, 2000);
      },
      hideToast:function() {
        this.toast = false;
        this.tips='';
        if (this.toastTimer) {
          clearTimeout(this.toastTimer);
        }
      },
    },
    components:{
      'header-component':headerComponent,
      'footer-component':footerComponent,
    },
    template:'<div id="app">\
                <header-component></header-component>\
                <router-view></router-view>\
                <footer-component></footer-component>\
                <mu-toast v-if="toast" :message="tips" @close="hideToast" />\
              </div>',
  });
});