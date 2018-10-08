import { baseUrl } from '@/config/env'
const baseUrlHost = baseUrl + "/finsuit";
//引入mockjs
const Mock = require('mockjs');
//获取 mock.Random对象
const Random = Mock.Random;
//mock一组数据
const produceNewsData = function(req){
    console.log(req)
    var data = JSON.parse(req.body);
    var len = (data.pageNum + 1) * 10;
    console.log(len)
    let articles = [];
    for(let i = 0; i < len; i ++){
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为 yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        articles: articles
    }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(`${baseUrlHost}/news/index`, 'post', produceNewsData);

//mock一组数据
const apiComponents = function(req){
    console.log(req)
    var data = JSON.parse(req.body)
    console.log(123)
    console.log(data)
    let articles = [];
    for(let i = 0; i < 100; i ++){
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为 yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        articles: articles
    }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/finsuit/finsuitPhone/deal', 'post', apiComponents);