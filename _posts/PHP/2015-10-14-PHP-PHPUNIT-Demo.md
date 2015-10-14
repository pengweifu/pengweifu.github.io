---
layout: post
title: PHPunit安装及入门演示
category: php
tags: php
description: Windows下PHPunit安装及入门演示
---

# PHPunit安装及入门演示
PHPUnit 5.0 需要 PHP 5.6,PHP 5.4只能使用PHPUnit 4.8.9.要获取 PHPUnit，最简单的方法是下载 PHPUnit 的 PHP 档案包 (PHAR)，它将 PHPUnit 所需要的所有必要组件（以及某些可选组件）捆绑在单个文件中.

## 安装PHPUnit
1. [下载PHPUnit.phar](https://phar.phpunit.de/phpunit-4.8.9.phar),并保存到PHP程序根目录;
2. 在PHP根目录下新建phpunit.cmd,输入`@php "%~dp0phpunit.phar" %* `;
3. 将PHP根目录加入Windows系统Path变量.

## PHPUnit基本使用
1. 新建一个类文件sample.php
```
<?php
class RemoteConnect
{
    public function connectToServer($serverName = null)
    {
        if ($serverName == null) {
            throw new Exception("That's not a server name!");
        }
        $fp = fsockopen($serverName, 80);
        return ($fp) ? true : false;
    }
    public function returnSampleObject()
    {
        return $this;
    }
}
```
2. 新建单元测试类文件test.php
```
<?php
require_once('sample.php');
class RemoteConnectTest extends PHPUnit_Framework_TestCase
{
    public function setUp()
    {
    }
    public function tearDown()
    {
    }
    public function testConnectionIsValid()
    {
        // test to ensure that the object from an fsockopen is valid
        $connObj    = new RemoteConnect();
        $serverName = 'www.a.com';
        $this->assertTrue($connObj->connectToServer($serverName) == false);
    }
}
```
3. 新开一个CMD,输入代码`phpunit test.php文件路径`,查看测试结果是否OK.