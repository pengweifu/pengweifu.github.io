---
layout: post
title: DOM 元素节点
category: Js
tags: DOM
description: DOM 元素节点
---

## DOM 元素节点
1. 元素节点的nodeName返回什么？
返回标签名, 比如

    <div id="myDiv">..</div>
    document.getElementById("myDiv").nodeName == "div"

2. 属性节点的nodeName返回什么?
返回属性名,  比如: 

    <div id="myDiv" attr1="value1">..</div>
    document.getElementById("myDiv").attributes.item("attr1").nodeName == "attr1"

3. 文本节点的nodeName返回什么？
文本节点的 nodeName 返回 #text 比如 

    <div id="myDiv">文字文字</div>
    document.getElementById("myDiv").firstChild.nodeName == "#text"

4. 元素节点的nodeValue返回什么？
返回 null

5. 属性节点的nodeValue返回什么?
返回 属性值 比如: 

    <div id="myDiv" attr1="value1">..</div>
    document.getElementById("myDiv").attributes.item("attr1").nodeValue == "value1"

6. 文本节点的nodeValue返回什么？
返回文本内容 比如: 

    <div id="myDiv">我是文字!</div>
    document.getElementById("myDiv").firstChild.nodeValue == "我是文字!"

7. 某节点的下一个节点（即nextSibling） 一定是和 该节点是 同一类型(nodeType)  的节点吗？ 
比如说：元素节点的下一个节点必须是元素节点？还是可以是任何一类节点？
可以是任何一类节点 比如 

    <div id="d1"></div>我是文字
    d1.nextSibling 等于 内容为:"我是文字" 的文本节点

8. 某节点的下一个节点（nextNode）和 该节点 必须是 在DOM树 的同一级吗？ 还是可以跨级？
打个比方：
a节点包括a1,a2,a3节点。
b节点包括b1,b2,b3节点。
a,b节点在DOM树的同一级。
那么，a3的下一个节点(nextNode)是b1 还是为空？ 
是必须同级, 同父
a3.nextSiblling == null;

9. 某节点的子节点childNotes 返回 固定的某类节点还是  三种节点都返回？
返回 某节点 所有直接孩子 比如 

    <div id="div1">文字<span></span><div><span></span></div></div>
    div1.childNodes  包括       "文字",       "<span></span>",       "<div><span></span></div>"  这三个孩子 

10. 某节点的子节点childNotes 返回 里面全部的节点，还是只返回里面的一级节点？
返回的的节点列表包括 直接孩子,  不直接引用到孙子或更下一级后代 但,能够 间接 访问到所有后代 比如: theNode.childNodes[0].childNodes[5].childNodes[3].nodeValue 可以发现  childNodes  可以逐级 向下深入访问 

11. 麻烦再教教我级别是怎么规定的好吗？就是说怎么样算是同一级，怎么样不是？
dom 就像一棵树
html
│
├—head
│  ├—link
│  ├—meta
│  ├—script
│  ├—style
│  └—title
│  
└—body
   ├—footer
   ├—main
   │  ├—left
   │  ├—nav
   │  └—right
   └—top
html 是根,也是所有节点的老祖宗 
head  body 就是 html 的孩子
link,meta,script,style,title   就是 html 的孙子了
head,link,meta,script,style,title,body,footer,main,left,nav,right,top
上面的这些都是  html 的后代
head  和 body   的父节点,都是  html   ,即是同父 可以称为兄弟节点
link meta script style title  <<<<  这些是 head 的孩子， 这5个同父， 也就都是兄弟节点
footer main top         <<< 这些是 body 的孩子， 这3个同父， 也互成为兄弟节点
link     是  head 的儿子,  是哥哥的儿子
main     是  body 的儿子, 是弟弟的儿子
所以，它们不同父，不能称为兄弟节点 是“堂兄弟”来的，呵呵
但 link, main 都是 html 的孙子，它们有相同的“辈份”， 有相同“辈份”的就是 同级啦
===============================================
2.属性节点 和 文本节点  都属于 元素节点  的子节点吗？
比如  

    <a href="xxx.asp" onclick="appear()">你好</a>
    <ul>
        <li>哈哈</li>
    </ul>
那么，onclick 这个属性节点属于a标记的子节点吗？  我看你的答案的意思，“你好”应该是a标签的子节点，你又说，一个节点的nextSibling 必须和该节点同级同父，那，经过我测试，a 标签的下一个节点为什么会是“你好”呢？ 他们是父子关系啊！！冲突了吧！！  <a>标签的 nextSibling 究竟是哪个？
----------
属性不能称为元素的子节点
像 "你好" 是  A  的子节点,
href, onclick  不是 A 的子节点,  就只是 A 的属性
A 的下一节点不会是  "你好"
A 的下一节点是 "ul"

    <a id="link" href="xxx.asp" onclick="appear()">你好</a><ul><li>哈哈</li></ul>
    <script>alert(link.nextSibling.tagName)</script>

这样的 html 运行,会看到  link.nextSibling.tagName == "UL"