/*
 * @Author: pengweifu
 * @Date:   2017-09-22 11:17:18
 * @Last Modified by:   pengweifu
 * @Last Modified time: 2017-09-27 12:56:27
 */
define(function(require) {
  var Vue = require('vue');
  var template = '<mu-paper class="footer">\
                  <mu-bottom-nav :value="bottomNav" @change="handleChange">\
                    <mu-bottom-nav-item to="/home" value="home" title="Home" icon="home"/>\
                    <mu-bottom-nav-item to="/write" value="write" title="Contribute" icon="edit"/>\
                    <mu-bottom-nav-item to="/member" value="member" title="Me" icon="account_circle"/>\
                  </mu-bottom-nav>\
                </mu-paper>';
  var app = Vue.extend({
    template: template,
    data: function() {
      return {
        bottomNav: 'home'
      }
    },
    methods: {
      handleChange:function(val) {
        this.bottomNav = val
      }
    },
    watch: {
      '$route': function(route, oldRoute) {
        switch (route.path) {
          case '/write':
            this.handleChange('write');
            break;
          case '/member':
          case '/login':
          case '/config':
            this.handleChange('member');
            break;
          default:
            this.handleChange('home');
            break;
        }
      },
    },
  });
  return app;
});