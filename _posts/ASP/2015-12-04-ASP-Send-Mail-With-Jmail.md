```
<%@ codepage="65001"%>
<%
Response.Charset="utf-8"
E_Server = "smtp.163.com"  '发件服务器
E_ServerUser = "weifupeng75@163.com" '登录用户名
E_ServerPass = "d2VpZnVwZW5n" '登录密码
E_SendManMail = "weifupeng75@163.com" '发件人邮件地址
E_SendManName = "系统管理员" '发件人姓名

Sub Jmail(Email,Topic,Mailbody)
On Error Resume Next
Dim JMail
Set JMail = Server.CreateObject("JMail.Message")
JMail.silent=true
JMail.Logging = True
JMail.Charset = "utf-8"
If Not(E_ServerUser = "" Or E_ServerPass = "") Then
JMail.MailServerUserName = E_ServerUser
JMail.MailServerPassword = E_ServerPass
End If
JMail.ContentType = "text/html"
JMail.Priority = 1
JMail.From = E_SendManMail
JMail.FromName = E_SendManName
JMail.AddRecipient Email
JMail.Subject = Topic
JMail.Body = Mailbody
JMail.Send (E_Server)
Set JMail = Nothing
SendMail = "OK"
If Err Then SendMail = "False"
End Sub

Jmail "987528260@qq.com","主题","正文"
If Err Then Response.write "ERR"
```