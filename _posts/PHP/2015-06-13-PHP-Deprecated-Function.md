---
layout: post
title: PHP5.3-5.5废弃与过期函数整理汇总
category: php
tags: php
description: PHP5.3-5.5废弃与过期函数整理汇总
---

# PHP5.3-5.5废弃与过期函数整理汇总

很多PHP程序员都知道，从PHP5.3开始加入了一个新的报错级别DEPRECATED,即将废弃过期。下面我们来一个个版本梳理一下。

## PHP 5.3被放弃的函数有:
	    call_user_method() //使用 call_user_func() 替代
	    call_user_method_array() //使用 call_user_func_array() 替代
	    define_syslog_variables()
	    dl()
	    ereg() //使用 preg_match() 替代
	    ereg_replace() //使用 preg_replace() 替代
	    eregi() //使用 preg_match() 配合 'i' 修正符替代
	    eregi_replace() //使用 preg_replace() 配合 'i' 修正符替代
	    set_magic_quotes_runtime() //以及它的别名函数 magic_quotes_runtime()
	    session_register() //使用 $_SESSION 超全部变量替代
	    session_unregister() //使用 $_SESSION 超全部变量替代
	    session_is_registered() //使用 $_SESSION 超全部变量替代
	    set_socket_blocking() //使用 stream_set_blocking() 替代
	    split() //使用 preg_split() 替代
	    spliti() //使用 preg_split() 配合 'i' 修正符替代
	    sql_regcase()
	    mysql_db_query() //使用 mysql_select_db() 和 mysql_query() 替代
	    mysql_escape_string() //使用 mysql_real_escape_string() 替代
	    mysql_close(); // 将不支持全部关闭, 需要改为:mysql_close($link);废弃以字符串传递区域设置名称. 使用 LC_* 系列常量替代.
	    mktime() 的 is_dst 参数. 使用新的时区处理函数替代.

## PHP 5.4被放弃的函数有:
	    mcrypt_generic_end()
	    mysql_list_dbs()

# PHP 5.5被放弃的函数有:
	    mcrypt_cbc()
	    mcrypt_cfb()
	    mcrypt_ecb()
	    mcrypt_ofb()

其中，PHP 5.3是废弃函数的开始，很多常用的以前的正则ereg全部替换preg。
魔术引号，居然也从PHP 5.3开始弃用，PHP 5.4就移除了。

PHP 5.4开始新增了很多特性，这个大家可以网上搜索下，新增很多特殊写法。可能按照新写法，老程序员就看不太懂啦~~~
至于PHP 5.5，居然把MYSQL这个扩展去掉了，建议使用MYSQLI或者PDO！！用了5.5很多程序都会报错，提示mysql_connect即将过期！！会看到如下错误：
> Deprecated: mysql_connect(): The mysql extension is deprecated and will be removed in the future: use mysqli or PDO instead in E:testnew 6.php on line 6