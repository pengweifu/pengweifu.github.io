---
layout: post
title: 为nginx配置https并自签名证书
category: server
tags: nginx
description: 为nginx配置https并自签名证书
---

# Windows下安装Openssl
OpenSSL官方推荐win32可执行文件版下载：
http://www.slproweb.com/products/Win32OpenSSL.html

# 制作CA证书
ca.key CA私钥：

    openssl genrsa -des3 -out ca.key 2048 -config  openssl.cnf

制作解密后的CA私钥

    openssl rsa -in ca.key -out ca_decrypted.key

ca.crt CA根证书公钥：

    openssl req -new -x509 -days 7305 -key ca.key -out ca.crt -config openssl.cnf

# 制作生成网站的证书并用CA签名认证
生成a.com证书私钥：

    openssl genrsa -des3 -out a.com.pem 1024

制作解密后的blog.creke.net证书私钥：

    openssl rsa -in a.com.pem  -out a.com.key

生成签名请求：

    openssl req -new -key a.com.pem -out a.com.csr -config openssl.cnf

>在common name中填入网站域名，如a.com即可生成改站点的证书，同时也可以使用泛域名如*.a.com来生成所有二级域名可用的网站证书。

用CA进行签名：
1. 修改配置信息
修改openssl.cnf中dir的值 dir= ./ca

    mkdir -p ca/newcerts
    touch ca/index.txt
    touch ca/serial
    echo "01" > ca/serial

2. 签名

    D:\Server\openssl\bin>openssl ca -policy policy_anything -days 1460 -cert ca.crt -keyfile ca.key -in a.com.csr -out a.com.crt -config openssl.cnf

3. 最后，把ca.crt的内容粘贴到a.com.crt后面,不然可能会有某些浏览器不支持。

# 配置Nginx
把生成签名证书放到配置文件目录下,然后修改配置文件
```
server{
    listen 443;
    ssl on;
    ssl_certificate a.com.crt;
    ssl_certificate_key a.com.key;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    keepalive_timeout 70;
    fastcgi_param HTTPS on;
    fastcgi_param HTTP_SCHEME https;
    index  index.php index.html index.htm index.asp defualt.asp;
    server_name  ~^(?<subdomain>.+).a.com$;
    root   D:/Project/$subdomain;
    location / {
        try_files  $uri  /index.php$uri;
    }
    location ~ \.php {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_param  domain $subdomain;
        fastcgi_split_path_info ^(.+\.php)(.*)$;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
    error_page  404 /error_pages/404.html;
    error_page  500 /error_pages/500.html;
    error_page  501 /error_pages/501.html;
    error_page  502 /error_pages/502.html;
    error_page  503 /error_pages/503.html;
    error_page  504 /error_pages/504.html;
    error_page  505 /error_pages/505.html;
    location ^~ /error_pages/ {
        root   D:/Server/web/wwwroot/;
    }
    location ~ /\.ht {
        deny  all;
    }
}
```