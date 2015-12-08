---
layout: post
title: MySQL修改数据库存放目录
category: SQL
tags: mysql
description: MySQL修改数据库存放目录
---

MySQL安装并配置完毕，默认的数据库安装目录为
> C:\ProgramData\MySQL\MySQL Server 5.1\data（vista或者win7下）
> C:/Documents and Settings/All Users/Application Data/MySQL/MySQL Server 5.1/Data/（xp下）

下面以win7为例介绍：

1. 正常安装并配置MySQL；
2. 新建想修改的数据库安装目录如E:\MySQL\Data;
3. 拷贝C:\ProgramData\MySQL\MySQL Server 5.1\data下所有文件到E:\MySQL\Data；
4. 找到MySQL软件的安装目录默认为C:\Program Files\MySQL\MySQL Server 5.1中的my.ini文件,找到`datadir="C:/ProgramData/MySQL/MySQL Server 5.1/data/"`,修改为：`datadir="E:/MySQL/Data/"`
5. 重新启动MySQL服务即可，新建一个数据库目录E:\MySQL\Data下就会多出一个文件夹即数据库目录。