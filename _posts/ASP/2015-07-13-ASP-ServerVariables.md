---
layout: post
title: ASP ServerVariables说明
category: ASP
tags: asp
description: ASP ServerVariables说明
---

查询字符串內容
    Request.ServerVariables("QUERY_STRING") 

当前页面的相对路径
    Request.ServerVariables("SCRIPT_NAME") 

服务器名
    Request.ServerVariables("SERVER_NAME")

本机IP
    Request.ServerVariables("REMOTE_ADDR")

服务器IP
    Request.ServerVariables("LOCAL_ADDR")

服务器端口
    Request.ServerVariables("SERVER_PORT")

IIS版本
    Request.ServerVariables("SERVER_SOFTWARE")

服务器CPU数量
    Request.ServerVariables("NUMBER_OF_PROCESSORS")

服务器操作系统
    Request.ServerVariables("OS")

支持的文件类型
    Request.ServerVariables("HTTP_ACCEPT")

访问的文件路径
    Request.ServerVariables("HTTP_URL")

用户代理的信息
    Request.ServerVariables("HTTP_USER_AGENT")

返回服务器地址
    Request.ServerVariables("URL") 

客户端提供的路径信息
    Request.ServerVariables("PATH_INFO") 

与应用程序元数据库路径相应的物理路径
    Request.ServerVariables("APPL_PHYSICAL_PATH") 

通过由虚拟至物理的映射后得到的路径
    Request.ServerVariables("PATH_TRANSLATED") 

网址来源
    Request.ServerVariables("HTTP_REFERER") 

发出请求的远程主机名称
    Request.ServerVariables("REMOTE_HOST") 

返回服务器地址
    Request.ServerVariables("HTTP_HOST") 

提出请求的方法比如GET、HEAD、POST等
    Request.ServerVariables("REQUEST_METHOD") 

服务器端口是否为安全端口时,是为1,否则为0
    Request.ServerVariables("SERVER_PORT_SECURE")

服务器使用的协议的名称和版本
    Request.ServerVariables("SERVER_PROTOCOL")

客户端发送的所有HTTP标头,前缀HTTP_
    Request.ServerVariables("ALL_HTTP")

客户端发送的所有HTTP标头,其结果和客户端发送时一样,没有前缀HTTP_
    Request.ServerVariables("ALL_RAW")

应用程序的元数据库路径
    Request.ServerVariables("APPL_MD_PATH")

客户端发出內容的长度
    Request.ServerVariables("CONTENT_LENGTH")

如果请求穿过安全通道(SSL)则返回ON,否则返回OFF
    Request.ServerVariables("HTTPS")

IIS实例的ID号
    Request.ServerVariables("INSTANCE_ID")

响应请求的IIS实例的元数据库路径
    Request.ServerVariables("INSTANCE_META_PATH")

编码类型如gzip,deflate等
    Request.ServerVariables("HTTP_ACCEPT_ENCODING")

页面语言如en-us等
    Request.ServerVariables("HTTP_ACCEPT_LANGUAGE")

连接状态
    Request.ServerVariables("HTTP_CONNECTION")

Cookie信息
    Request.ServerVariables("HTTP_COOKIE")

安全套接字层连接关键字的位数,如128
    Request.ServerVariables("HTTPS_KEYSIZE")

服务器验证私人关键字的位数如1024
    Request.ServerVariables("HTTPS_SECRETKEYSIZE")

服务器证书的发行者
    Request.ServerVariables("HTTPS_SERVER_ISSUER")

服务器证书的主题
    Request.ServerVariables("HTTPS_SERVER_SUBJECT")

当使用基本验证模式时,客户在密码对话框中输入的密码
    Request.ServerVariables("AUTH_PASSWORD")

是用户访问受保护的脚本时,服务器用於检验用户的验证方法
    Request.ServerVariables("AUTH_TYPE")

代验证的用户名
    Request.ServerVariables("AUTH_USER")

唯一的客户证书ID号
    Request.ServerVariables("CERT_COOKIE")

客户证书标誌,如有客户端证书,则bit0为0如果客户端证书验证无效,bit1被设置为1
    Request.ServerVariables("CERT_FLAG")

用户证书中的发行者
    Request.ServerVariables("CERT_ISSUER")

安全套接字层连接关键字的位数,如128
    Request.ServerVariables("CERT_KEYSIZE")

服务器验证私人关键字的位数如1024
    Request.ServerVariables("CERT_SECRETKEYSIZE")

客户证书的序列号
    Request.ServerVariables("CERT_SERIALNUMBER")

服务器证书的发行者
    Request.ServerVariables("CERT_SERVER_ISSUER")

服务器证书的主题
    Request.ServerVariables("CERT_SERVER_SUBJECT")

客户端证书的主题
    Request.ServerVariables("CERT_SUBJECT")

客户发送的form內容或HTTPPUT的数据类型
    Request.ServerVariables("CONTENT_TYPE")


脚本超时时间
    Server.ScriptTimeout

服务器解译引擎
    ScriptEngine

服务器解译引擎主版本号
    ScriptEngineMajorVersion

服务器解译引擎次要版本
    ScriptEngineMinorVersion

服务器解译引擎编译版本
   ScriptEngineBuildVersion

服务器时间
    now()

当前文件路径
    Server.mappath(Request.ServerVariables("SCRIPT_NAME"))

当前文件所在目录
    Left("http://" & Request.ServerVariables("SERVER_NAME") & Request.ServerVariables("SCRIPT_NAME"),InStrRev("http://" & Request.ServerVariables("SERVER_NAME") & Request.ServerVariables("SCRIPT_NAME"),"/"))

获取url中的文件名和传过来的值
    Request.ServerVariables("SCRIPT_NAME")+"?"+Request.ServerVariables("QUERY_STRING")