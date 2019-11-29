/*
 * @Author: pengweifu
 * @Date:   2017-09-22 11:17:37
 * @Last Modified by:   pengweifu
 * @Last Modified time: 2017-09-27 13:55:38
 */
define(function(require) {
  var Vue = require('vue');
  var axios = require('axios');
  var template = '<form>\
                  <mu-content-block>\
                    <mu-tabs :value="activeTab" @change="handleTabChange">\
                      <mu-tab value="login" title="Login" />\
                      <mu-tab value="register" title="Register" />\
                    </mu-tabs>\
                    <div v-if="activeTab === \'login\'">\
                      <mu-text-field fullWidth required hintText="E-mail" icon="account_circle" v-model="email" :errorText="errorEmail" @blur="handleEmail"  />\
                      <mu-text-field fullWidth required hintText="password" type="password" icon="lock" v-model="password" :errorText="errorPassword" @blur="handlePassword" />\
                      <p>\
                        <mu-checkbox label="Remember" uncheckIcon="favorite_border" checkedIcon="favorite" v-model="remember" />\
                      </p>\
                      <mu-raised-button @click="handleLogin" label="Login" fullWidth primary />\
                    </div>\
                    <div v-else>\
                      <mu-text-field fullWidth required hintText="E-mail" icon="account_circle" v-model="email" :errorText="errorEmail" @blur="handleEmail" />\
                      <mu-text-field fullWidth required hintText="password" type="password" icon="lock" v-model="password" :errorText="errorPassword" @blur="handlePassword" />\
                      <mu-text-field fullWidth required hintText="password" type="password" icon="lock" v-model="repassword" :errorText="errorRepassword" @blur="handleRepassword" />\
                      <p>\
                        <mu-checkbox label="Agree" v-model="agree" />\
                        <span @click="open()">Privacy Policy</span>\
                      </p>\
                      <mu-raised-button @click="handleRegister" :disabled="!agree" label="Register" fullWidth primary />\
                    </div>\
                  </mu-content-block>\
                  <mu-popup position="top" popupClass="demo-popup" :open="popup" @close="close()">\
                    <mu-appbar title="Privacy Policy">\
                      <mu-flat-button slot="right" label="Close" color="white" @click="close()"/>\
                    </mu-appbar>\
                    <mu-content-block>\
                      <p>\
                        Our business model is very straightforward: we sell great products. We don’t build a profile based on your email content or web browsing habits to sell to advertisers. We don’t “monetise” the information you store on your iPhone or in iCloud. And we don’t read your email or your messages to get information to market to you. Our software and services are designed to make our devices better. Plain and simple.\
                      </p>\
                      <p>\
                        Finally, I want to be absolutely clear that we have never worked with any government agency from any country to create a backdoor in any of our products or services. We have also never allowed access to our servers. And we never will.\
                      </p>\
                    </mu-content-block>\
                  </mu-popup>\
                </form>';
  var app = Vue.extend({
    template: template,
    data: function() {
      return {
        email: '',
        password: '',
        repassword: '',
        remember: true,
        activeTab: 'login',
        agree: true,
        popup: false,
        errorEmail: '',
        errorPassword: '',
        errorRepassword: '',
      }
    },
    /*props: ['tips'],
    mounted:function(){
      that.$root.showToast('Please Login');
    },*/
    beforeRouteEnter (to, from, next) {
      if (from!='/home') {
        next(vm => {
          vm.$root.showToast('Please Login');
        })
      }else{
        next();
      }
    },
    methods: {
      handleTabChange:function(val) {
        this.activeTab = val;
      },
      open:function() {
        this.popup = true;
      },
      close:function() {
        this.popup = false;
      },
      handleEmail:function(event) {
        this.errorEmail = /^[A-Za-z0-9\-_\.]+@[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)+$/.test(this.email) == false ? 'Invalid E-mail' : '';
      },
      handlePassword:function(event) {
        this.errorPassword = /^[A-Za-z0-9\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{6,20}$/.test(this.email) == false ? 'Invalid password' : '';
      },
      handleRepassword:function(event) {
        this.errorRepassword = this.password == this.repassword ? '' : 'Please confirm password';
      },
      handleLogin:function() {
        var that = this,msg='error',auth=[];
        if (this.email == '') {
          this.errorEmail = 'Invalid E-mail';
        }
        if (this.password == '') {
          this.errorPassword = 'Invalid password';
        }
        if (this.errorEmail == '' && this.errorPassword == '') {
          if (that.email=='710627107@qq.com' && that.password=='111111') {
            msg='success';
            auth={"uid":1,"email":"710627107@qq.com"};
            that.$store.dispatch('login',{auth:auth,remember:that.remember}).then(function(){
              setTimeout(function(){
                that.$router.replace('/member');
              },2000);
            });
          }
          that.$root.showToast(msg);
          return;
          axios.post('/index.php', {
              email: that.email,
              password: that.password,
            })
            .then(function(response) {
              if (response.data.errno == 0) {
                var auth=response.data.data;
                that.$store.dispatch('login',{auth:auth,remember:that.remember}).then(function(){
                  setTimeout(function(){
                    that.$router.replace('/member');
                  },2000);
                });
              }
              that.$root.showToast(response.data.msg);
            });
        }
      },
      handleRegister:function() {
        var that = this;
        if (this.email == '') {
          this.errorEmail = 'Invalid E-mail';
        }
        if (this.password == '') {
          this.errorPassword = 'Invalid password';
        }
        if (this.repassword == '') {
          this.errorRepassword = 'Please confirm password';
        }
        if (this.errorEmail == '' && this.errorPassword == '' && this.errorRepassword == '') {
          axios.post('/index.php', {
              email: that.email,
              password: that.password,
            })
            .then(function(response) {
              if (response.data.errno == 0) {
                var auth=response.data.data;
                that.$store.dispatch('login',{auth:auth}).then(function(){
                  setTimeout(function(){
                    that.$router.replace('/member');
                  },2000);
                });
              }
              that.$root.showToast(response.data.msg);
            });
        }
      },
    }
  });
  return app;
});