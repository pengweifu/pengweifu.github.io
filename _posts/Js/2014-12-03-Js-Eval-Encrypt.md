---
layout: post
title: eval解密/加密
category: Js
tags: eval,encrypt
description: eval解密/加密
---

## eval解密/加密

```
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>eval解密/加密在线工具</title>
    <script> 
    a=62; 
    function encode() { 
     var code = document.getElementById('code').value; 
     code = code.replace(/[\r\n]+/g, ''); 
     code = code.replace(/'/g, "\\'"); 
     var tmp = code.match(/\b(\w+)\b/g); 
     tmp.sort(); 
     var dict = []; 
     var i, t = ''; 
     for(var i=0; i<tmp.length; i++) { 
       if(tmp[i] != t) dict.push(t = tmp[i]); 
     } 
     var len = dict.length; 
     var ch; 
     for(i=0; i<len; i++) { 
       ch = num(i); 
       code = code.replace(new RegExp('\\b'+dict[i]+'\\b','g'), ch); 
       if(ch == dict[i]) dict[i] = ''; 
     } 
     document.getElementById('code').value = "eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}(" 
       + "'"+code+"',"+a+","+len+",'"+ dict.join('|')+"'.split('|'),0,{}))"; 
    } 
    function num(c) { 
     return(c<a?'':num(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36)); 
    } 
    function run() { 
     eval(document.getElementById('code').value); 
    } 
    function decode() { 
     var code = document.getElementById('code').value; 
     code = code.replace(/^eval/, ''); 
     document.getElementById('code').value = eval(code); 
    } 
    </script>
    </head>
    <body>
    <textarea id=code cols=80 rows=20> 
    </textarea><br> 
    <input type=button onclick=encode() value=加密> 
    <input type=button onclick=decode() value=解密>
    </body>
    </html>
```