/*
* @Author: pengweifu
* @Date:   2017-09-22 11:17:37
* @Last Modified by:   pengweifu
* @Last Modified time: 2017-09-26 13:56:25
*/
define(function(require){
  var Vue=require('vue');
  var Mock=require('Mock');
  var axios=require('axios');
  var template='<div class="demo-list">\
                  <mu-card v-for="item in list">\
                    <mu-card-title :title="item.title" :subTitle="item.subtitle"/>\
                    <mu-card-text>{{ item.content }}</mu-card-text>\
                    <mu-card-header :title="item.author" :subTitle="item.date">\
                      <mu-avatar :src="item.img" slot="avatar"/>\
                    </mu-card-header>\
                  </mu-card>\
                  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>\
                </div>';
  var app=Vue.extend({
    template: template,
    data:function(){
      var list = [];
      return {
        list,
        num: 0,
        loading: false,
        scroller: null
      }
    },
    beforeMount:function(){
      this.loadMore();
    },
    mounted:function () {
      this.scroller = document.querySelector('.demo-list');
    },
    methods: {
      loadMore:function () {
        var page=this.num/3;
        var self=this;
        if (page<5) {
          this.loading = true;

          Mock.mock('list.json', {
            'list|3': [{
              'id|+1': 1,
              'title': '@title',
              'subtitle': '@title',
              'content': '@paragraph',
              'img':'@image',
              'author':'@name',
              'date':'@date'
            }]
          });

          axios.get('list.json')
          .then(function (response) {
            response.data.list.map(function(data){
              self.list.push(data);
            });
            self.num += response.data.list.length;
            self.loading = false;
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }
    }
  });
  return app;
});