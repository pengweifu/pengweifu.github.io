---
layout: post
title: WNMP一键管理脚本
category: server
tags: nginx
description: WNMP一键管理脚本
---

# 主文件 server.bat
```
@echo off
rem Server.bat(主文件)
:o
cls
echo a.初始化安装并启动 s.仅启动服务 e.仅停止服务 d.卸载所有服务并删除 q.退出
choice /c asedq /n
if %errorlevel%==1 goto :install
if %errorlevel%==2 goto :start
if %errorlevel%==3 goto :stop
if %errorlevel%==4 goto :uninstall
if %errorlevel%==5 goto :ed
goto o


:install
echo 注册mysql服务...
cd D:\Server\mysql\bin
mysqld-nt.exe --install mysql --defaults-file=D:/Server/mysql/my.ini
echo 注册memcached服务器...
cd D:\Server\memcached
memcached -d install
memcached -d start
echo 注册ngrok服务...
cd D:\Server\nginx
ngrok authtoken token
goto start


:uninstall
echo 停止netbox服务器...
taskkill /F /IM netbox.dll > nul
echo 停止 PHP FastCGI...
taskkill /F /IM xxfpm.exe > nul
echo 停止redis服务器...
taskkill /F /IM redis-server.exe > nul
echo 停止Memcached服务...
cd D:\Server\memcached
memcached -d stop
echo 停止nginx...
taskkill /F /IM nginx.exe > nul
echo 停止mysql服务程序...
net stop mysql
echo 停止ngrok...
taskkill /F /IM ngrok.exe > nul
echo 卸载mysql服务...
cd D:\Server\mysql\bin
mysqld-nt.exe --remove mysql
echo 卸载Memcached服务...
cd D:\Server\memcached
memcached -d stop
memcached -d remove
sc delete "Memcached Server"
pause
goto o


:start
net start|findstr /i /c:"mysql">nul && net stop mysql
net start|findstr /i /c:"Memcached Server">nul && net stop mysql
echo 启动mysql服务程序...
net start mysql
echo StartingMemcached服务器...
net start "Memcached Server"
TASKLIST | FIND /I "ngrok.exe" && taskkill /F /IM ngrok.exe > nul
TASKLIST | FIND /I "nginx.exe" && taskkill /F /IM nginx.exe > nul
TASKLIST | FIND /I "php-cgi.exe" && taskkill /F /IM php-cgi.exe > nul
TASKLIST | FIND /I "redis-server.exe" && taskkill /F /IM redis-server.exe > nul
cd D:\Server\nginx
echo Starting Redis服务器...
RunHiddenConsole D:/Server/redis/redis-server.exe D:/Server/redis/redis.conf
echo Starting PHP和FastCGI服务器...
RunHiddenConsole D:/Server/php5.4/php-cgi.exe -b 127.0.0.1:9000 -c D:/Server/php5.4/php.ini
echo Starting nginx服务器...
RunHiddenConsole D:/Server/nginx/nginx.exe -p D:/Server/nginx
echo Starting ngrok...
RunHiddenConsole D:/Server/nginx/ngrok.exe -subdomain=pengweifu -config ngrok.cfg 80
echo 开始开启netbox服务器
cd D:\Server\web\
start Asp.exe
mshta vbscript:createobject("wscript.shell").run("cmd /c D:\Server\nginx\guard.bat",0)(window.close)
mshta vbscript:createobject("wscript.shell").run("cmd /c D:\Server\nginx\node.bat",0)(window.close)
rem explorer http://localhost/index.php
goto o

:stop
net start|findstr /i /c:"mysql">nul && net stop mysql
net start|findstr /i /c:"Memcached Server">nul && net stop mysql
TASKLIST | FIND /I "ngrok.exe" && taskkill /F /IM ngrok.exe > nul
TASKLIST | FIND /I "nginx.exe" && taskkill /F /IM nginx.exe > nul
TASKLIST | FIND /I "php-cgi.exe" && taskkill /F /IM php-cgi.exe > nul
TASKLIST | FIND /I "redis-server.exe" && taskkill /F /IM redis-server.exe > nul
TASKLIST | FIND /I "netbox.dll" && taskkill /F /IM netbox.dll > nul
TASKLIST | FIND /I "node.exe" && taskkill /F /IM node.exe > nul
pause
goto o

:ed
```

# PHP进程守护文件 guard.bat
```
@echo off
rem guard.bat (PHP执行完一定数量的任务后会自动关闭.这就需要进行进程守护) 
set logFile=D:\Server\nginx\logs\php-cgi.log
:guard
ping 127.0.0.1 -n 4 >nul
tasklist | find /i "php-cgi.exe" 1>nul 2>nul
if "0"=="%errorlevel%" (
    netstat -ano | find "9000" 1>nul 2>nul
    if "0"=="%errorlevel%" (
        echo [%date:~0,10% %time:~0,8%] php-cgi is running ....
    ) else (
        echo  php-cgi is running, but it cann't to work ....
        echo [%date% %time%] [notice] php-cgi is running, but it cann't to work ....>>%logFile%
        cd D:\Server\nginx
        RunHiddenConsole D:/Server/php5.4/php-cgi.exe -b 127.0.0.1:9000 -c D:/Server/php5.4/php.ini
    )
) else (
    echo [%date% %time%] php-cgi is stoped.
    echo [%date% %time%] [error] php-cgi is stoped.>>%logFile%
    cd D:\Server\nginx
    RunHiddenConsole D:/Server/php5.4/php-cgi.exe -b 127.0.0.1:9000 -c D:/Server/php5.4/php.ini
)
goto guard 
```

# NodeJs任务后台执行文件 node.bat
```
@echo off
rem node.bat (后台执行node.js任务)  
cd D:\Project\tj
npm start
```