---
layout: post
title: 用PHP的curl模拟登陆
category: PHP
tags: php
description: 用PHP的curl模拟登陆
---

# 用PHP的curl模拟登陆
模拟浏览器登陆应用开发，最关键的地方是突破登陆验证。CURL技术不只支持http，还支持https。区别就在多了一层SSL加密传输。如果是要登陆https网站，php记得要支持openssl。

	$login = 'username';//用户名
	$password = 'password';//密码
	$url = "https://reg.163.com/logins.jsp";//163的用户登陆地址
	$fields = "verifycookie=1&style=16&product=mail163&username=".$login."&password=".$password."&selType=jy&remUser=&secure=on&%B5%C7%C2%BC%D3%CA%CF%E4=%B5%C7%C2%BC%D3%CA%CF%E4";//post 要提交的数据
	$cookie_file = dirname(__FILE__)."/cookie.txt";//用来存放cookie的文件
	$ch = curl_init();//启动一个CURL会话
	curl_setopt($ch, CURLOPT_URL, $url);// 要访问的地址
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);// 对认证证书来源的检查，0表示阻止对证书的合法性的检查。
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1);// 从证书中检查SSL加密算法是否存在
	curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)");//模拟用户使用的浏览器，在HTTP请求中包含一个”user-agent”头的字符串。
	curl_setopt($ch, CURLOPT_POST, 1);//发送一个常规的POST请求，类型为：application/x-www-form-urlencoded，就像表单提交的一样。
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);//要传送的所有数据，如果要传送一个文件，需要一个@开头的文件名
	curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_file);//连接关闭以后，存放cookie信息的文件名称
	curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_file);// 包含cookie信息的文件名称，这个cookie文件可以是Netscape格式或者HTTP风格的header信息。
	curl_setopt($ch, CURLOPT_TIMEOUT, 6);// 设置curl允许执行的最长秒数
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);// 获取的信息以文件流的形式返回，而不是直接输出。
	$result = curl_exec($ch);// 执行操作
	if ($result == NULL) {
		echo "Error:<br>";
		echo curl_errno($ch) . " - " . curl_error($ch) . "<br>";
	}
	curl_close($ch);// 关闭CURL会话

上面这个例子相对简单，因为用户名和密码可以明文传输，而且登陆也不需要验证码。