---
layout: post
title: MSSQL数据库迁移
category: SQL
tags: mssql
description: MSSQL修改数据库存放目录
---

MS SQL 数据库迁移文件，这里说的不是将数据库迁移到另外一台服务器，只是在服务器不同磁盘目录内做迁移。移动数据库文件的情况大致有下面一些：

1. 事先没有规划好，数据库文件或日志文件增长过快，导致某个盘或整个磁盘空间不足，需要移动数据文件或日志文件;
2. 纯粹由于业务需求，数据增长过快;
3. 为了更好的IO的性能，需要将数据文件、日志文件分布到不同磁盘，减轻IO压力，提供IO性能;
4. 故障恢复。例如，数据库处于可疑模式或因硬件故障而关闭。

迁移过程:

1. 对数据库中每个要移动的文件（数据文件/日志文件），通过下面命令指定到新的目录:

```
USE master
GO
ALTER DATABASE MyAssistant
MODIFY FILE(NAME='MyAssistant', FILENAME='F:\DataBase_Data\MyAssistant.mdf');
GO
ALTER DATABASE MyAssistant
MODIFY FILE(NAME='MyAssistant_log', FILENAME='F:\DataBase_Log\MyAssistant_log.ldf');
GO
```

2. 停止SQL Server实例，你可以在SQL Server Management Studio的配置工具Sql Server Configuration Manager下停止。也可用NET STOP MSSQLSERVER命令实现。
3. 将那些数据文件或日志文件手工移动到对应的目录,也就是上面命令中FILENAME对应的目录.
4. 重启SQL Server实例，验证数据文件迁移是否成功。