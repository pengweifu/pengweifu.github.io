/*
* @Author: pengweifu
* @Date:   2017-09-22 11:17:37
* @Last Modified by:   pengweifu
* @Last Modified time: 2017-09-26 21:10:18
*/
define(function(require){
  var Vue=require('vue');
  var template='<div class="demo-menu">\
                  <div class="avatar">\
                    <mu-avatar size="200" src="assets/imgs/uicon.jpg"/>\
                    <mu-icon-button icon="settings" to="/config" />\
                  </div>\
                  <mu-menu>\
                    <mu-menu-item title="My Articles" leftIcon="assignment" rightIcon="keyboard_arrow_right" />\
                    <mu-divider />\
                    <mu-menu-item title="My Favorite" leftIcon="star" rightIcon="keyboard_arrow_right"/>\
                    <mu-divider />\
                    <mu-menu-item title="Comments" leftIcon="comment" rightIcon="keyboard_arrow_right"/>\
                    <mu-divider />\
                    <mu-menu-item title="Continuing" leftIcon="more" />\
                    <mu-divider />\
                  </mu-menu>\
                </div>';
  var app=Vue.extend({
    template: template,
  });
  return app;
});