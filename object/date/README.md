# Date 对象

[TOC]

## 介绍
Date 对象用于处理日期和时间。

## 创建 Date 对象

```
var date = new Date();
```

> 注释：Date 对象会自动把当前日期和时间保存为其初始值。

```
var date = new Date('2016.1.1');
//得到2016.1.1 00:00:00
```

## 常用方法

```
var year = date.getFullYear();      //得到年
var month = date.getMonth() + 1;      //得到月
var day = date.getDate();      //得到日
var hours = date.getHours();      //得到时
var minutes = check(date.getMinutes());      //得到分
var seconds = check(date.getSeconds());      //得到秒
var iWeek = date.getDay();      //得到星期

var week = new Array(7);
week[0] = '星期日';
week[1] = '星期一';
week[2] = '星期二';
week[3] = '星期三';
week[4] = '星期四';
week[5] = '星期五';
week[6] = '星期六';
```


## 拓展阅读

<http://www.w3school.com.cn/jsref/jsref_obj_date.asp>

