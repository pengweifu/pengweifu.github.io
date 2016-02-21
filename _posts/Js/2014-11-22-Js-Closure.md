---
layout: post
title: 函数闭包的优势和特点
category: Js
tags: Closure,闭包
description: 函数的闭包(closure),可以让匿名函数立即被执行.
---

## 函数闭包的优势和特点
1. 减少了全局变量的个数，可以有效减少命名冲突.原因是包在里面的变量对于外面来说是不可见的，他们的作用域近局限在匿名函数的函数体内
2. 这种方式可以保存闭包外面的变量的状态，这个特点还是举个例子比较易懂：

```
    function fn() {
    	for(var i=0 ; i<2; i++) {//(function(){
            var backup= i;
            setTimeout(function() {
                alert(backup);
            },2000);//})();
        }
    }
    fn();
```

上面代码的for循环一共两次，我们本来的目的是每隔两秒钟把每一次循环的索引(也就是i)输出，我们期待它应该输出：0和1，但是实际输出结果却是两次都是1
使用了闭包之后，我们会把循环中每一次i值的状态都保存下来，如下代码所示：

```
    function fn() {
        for(var i=0 ; i<2; i++) {
        (function(){
            var backup= i;
            setTimeout(function() {
                alert(backup);
            },2000);
        })();
        }
    }
    fn();
```

这次我们得到了正确的结果:0和1