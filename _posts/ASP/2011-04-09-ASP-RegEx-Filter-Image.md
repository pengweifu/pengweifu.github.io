---
layout: post
title: 正则表达式检索图片地址
category: ASP
tags: regex
description: 正则表达式检索图片地址
---

## 正则表达式检索图片地址
```
    <%
    Set conn=server.CreateObject("adodb.connection")
    conn.open "provider=microsoft.jet.oledb.4.0;data source="&server.mappath("/test/data.mdb")
    Set rs=server.CreateObject("adodb.recordset")
    sqlstr="select * from wenzhang"
    rs.open sqlstr,conn,1,1
    %>
    <body>
    <%
    dim src
    content=rs("neirong")
    Str = Content
    Set regEx = New RegExp '建立正则表达式。
    regEx.Pattern = "(<img)(.[^<>]*)(src=)('|"&CHR(34)&"| )?(.[^'|\s|"&CHR(34)&"]*)(\.)(jpg|gif|png|bmp|jpeg)('|"&CHR(34)&"|\s|>)(.[^>]*)(>)" '设置模式。
    regEx.IgnoreCase = True '设置是否区分字符大小写。
    regEx.Global = True '设置全局可用性。
    Set Matches = regEx.Execute(Str) '执行搜索。

    For Each Match in Matches '遍历匹配集合。
    '输入图片地址
    Response.Write "<img src='"&Match.SubMatches(4)&"."&Match.SubMatches(6)&"'>" '显示图片
    Response.Write Match.SubMatches(4)&"."&Match.SubMatches(6)&"<br>" '图片地址
    Next

    Set Match=Matches(0) '显示第一张
    Response.Write "<img src='"&Match.SubMatches(4)&"."&Match.SubMatches(6)&"'>" '显示图片
    %>
```