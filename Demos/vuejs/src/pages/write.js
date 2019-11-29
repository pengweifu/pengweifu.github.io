/*
* @Author: pengweifu
* @Date:   2017-09-22 11:17:37
* @Last Modified by:   pengweifu
* @Last Modified time: 2017-09-26 19:17:11
*/
define(function(require){
  var Vue=require('vue');
  var template='<form>\
                  <mu-content-block>\
                    <mu-text-field fullWidth hintText="Title" v-model="title" />\
                    <mu-text-field fullWidth hintText="Message" v-model="content" multiLine :rows="6" />\
                    <mu-raised-button label="Submit" fullWidth primary />\
                  </mu-content-block>\
                </form>';
  var app=Vue.extend({
    template: template,
    data:function(){
      return {
        title:'',
        content:''
      };
    },
  });
  return app;
});