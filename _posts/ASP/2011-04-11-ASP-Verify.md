---
layout: post
title: 生成验证码
category: ASP
tags: verify
description: 生成验证码
---

## 生成验证码
```
    '把以下代码复制保存为:GetCode.asp文件,并放在留言/评论等页面的目录里
    <%
    Option Explicit
    Response.buffer=true
    Response.Expires = -1
    Response.ExpiresAbsolute = Now() - 1
    Response.Addheader    "cache-control","no-cache"    
    Response.AddHeader    "Pragma","no-cache"
    Response.ContentType = "Image/BMP"

    Call Com_CreatValidCode("GetCode")

    Sub Com_CreatValidCode(pSN)
             
     Randomize
     
     Dim i, ii, iii
     
     Const cOdds = 3 ' 杂点出现的机率
     Const cAmount = 10 ' 文字数量
     Const cCode = "0123456789"
     
     ' 颜色的数据(字符，背景)
     Dim vColorData(1)
     vColorData(0) = ChrB(0) & ChrB(0) & ChrB(211)  ' 蓝0，绿0，红0（黑色）
     vColorData(1) = ChrB(255) & ChrB(255) & ChrB(255) ' 蓝250，绿236，红211（浅蓝色）
     
     ' 随机产生字符
     Dim vCode(4), vCodes
     For i = 0 To 3
       vCode(i) = Int(Rnd * cAmount)
       vCodes = vCodes & Mid(cCode, vCode(i) + 1, 1)
     Next
     Session(pSN) = vCodes  '记录入Session
     ' 字符的数据
     Dim vNumberData(9)
     vNumberData(0) = "1110000111110111101111011110111101001011110100101111010010111101001011110111101111011110111110000111"
     vNumberData(1) = "1111011111110001111111110111111111011111111101111111110111111111011111111101111111110111111100000111"
     vNumberData(2) = "1110000111110111101111011110111111111011111111011111111011111111011111111011111111011110111100000011"
     vNumberData(3) = "1110000111110111101111011110111111110111111100111111111101111111111011110111101111011110111110000111"
     vNumberData(4) = "1111101111111110111111110011111110101111110110111111011011111100000011111110111111111011111111000011"
     vNumberData(5) = "1100000011110111111111011111111101000111110011101111111110111111111011110111101111011110111110000111"
     vNumberData(6) = "1111000111111011101111011111111101111111110100011111001110111101111011110111101111011110111110000111"
     vNumberData(7) = "1100000011110111011111011101111111101111111110111111110111111111011111111101111111110111111111011111"
     vNumberData(8) = "1110000111110111101111011110111101111011111000011111101101111101111011110111101111011110111110000111"
     vNumberData(9) = "1110001111110111011111011110111101111011110111001111100010111111111011111111101111011101111110001111"
     ' 输出图像文件头
     Response.BinaryWrite ChrB(66) & ChrB(77) & ChrB(230) & ChrB(4) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) &_
       ChrB(0) & ChrB(0) & ChrB(54) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(40) & ChrB(0) &_
       ChrB(0) & ChrB(0) & ChrB(40) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(10) & ChrB(0) &_
       ChrB(0) & ChrB(0) & ChrB(1) & ChrB(0)
     
     ' 输出图像信息头
     Response.BinaryWrite ChrB(24) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(176) & ChrB(4) &_
       ChrB(0) & ChrB(0) & ChrB(18) & ChrB(11) & ChrB(0) & ChrB(0) & ChrB(18) & ChrB(11) &_
       ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) &_
       ChrB(0) & ChrB(0)
     
     For i = 9 To 0 Step -1  ' 历经所有行
         For ii = 0 To 3  ' 历经所有字
             For iii = 1 To 10 ' 历经所有像素
                 ' 逐行、逐字、逐像素地输出图像数据
                 If Rnd * 99 + 1 < cOdds Then ' 随机生成杂点
                         If Mid(vNumberData(vCode(ii)), i * 10 + iii, 1) Then
                                 Response.BinaryWrite vColorData(0)
                         Else
                                 Response.BinaryWrite vColorData(1)
                         End If
                 Else
                         Response.BinaryWrite vColorData(Mid(vNumberData(vCode(ii)), i * 10 + iii, 1))
                 End If
             Next
         Next
     Next
    End Sub
    %>

    '下面这段代码放到页面上去：
    验证码(<span>*</span>)：<input name="Authcode" type="text" size="10" maxlength="4" value="">请在验证码框输入 <img src="getcode.asp" alt="验证码,看不清楚?请点击刷新验证码" height="10" style="cursor : pointer;" onclick="this.src='getcode.asp?t='+(new Date().getTime());" /> 否则不能留言,谢谢合作!

    '下面这段就是在服务器段验证的：让它给系统的比较是否一样
    <%
    if request("Authcode")<>session("GetCode") then
    %>
    <script language=javascript>
    history.back();
    alert("请返回输入正确的验证码,谢谢合作！");
    </script>
    <%
    Response.End
    end if
    %>
```