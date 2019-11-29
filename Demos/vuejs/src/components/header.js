/*
* @Author: pengweifu
* @Date:   2017-09-22 11:17:18
* @Last Modified by:   pengweifu
* @Last Modified time: 2017-09-27 22:59:55
*/
define(function(require){
  var Vue=require('vue');
  var template='<div class="header">\
                  <mu-appbar title="That\'s funny">\
                    <mu-icon-button icon="arrow_back_ios" @click="back" slot="left" v-if="showBackBtn" />\
                    <mu-icon-button icon="menu" @click="toggle(true)" slot="right" />\
                  </mu-appbar>\
                  <mu-drawer :open="open" :docked="docked" right="true" @close="toggle(false)">\
                    <mu-menu @itemClick="toggle(false)">\
                      <mu-menu-item title="Home" to="/" />\
                      <mu-menu-item title="Contribute" to="/write" />\
                      <mu-menu-item title="Me" to="/member" />\
                    </mu-menu>\
                  </mu-drawer>\
                </div>';
  var app=Vue.extend({
    template: template,
    data: function() {
      return {
        showBackBtn: false,
        open: false,
        docked: false,
      }
    },
    methods: {
      handleChange:function(val) {
        this.showBackBtn = val
      },
      back:function(){
        this.$router.back();
      },
      toggle:function(flag) {
        this.open = flag;
      },
    },
    watch: {
      '$route': function(route, oldRoute) {
        if (route.path=='/home') {
          this.handleChange(false);
        }else{
          this.handleChange(true);
        }
      },
    },
  });
  return app;
});