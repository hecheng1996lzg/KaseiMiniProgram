# http请求封装 [返回>](https://github.com/hecheng1996lzg/KaseiMiniProgram "返回>")

## 什么时候需要用JS异步
```javascript
function fun1(){fun2()}
function fun2(){fun3()}
function fun3(){}
```
普通函数一层层调用是不需要JS异步的，但如果其中一层出现异步（发送http请求，加载资源等），层与层之间的调用就**都变成**异步了。

## 处理异步的几种方式
### 1. callback
```javascript
function fun1(){
	fun2(data=>{console.log(data)})
}

function fun2(callback){
	fun3(data=>{callback(data)})
}

function fun3(callback){
	setTimeout(()=>{
		let data = 1;
		callback(data);
	},100)
}

fun1();
```
### 2. promise
```javascript
function fun1(){
    return new Promise(resolve => {
        resolve(data => {console.log(data)});
    })
}

function fun2(callback){
    return new Promise(resolve => {
        resolve(data => {callback(data)});
    })
}

function fun3(callback){
    return new Promise(resolve =>{
        setTimeout(()=>{
            let data = 1;
            callback(data)
        },100);
    })
}

fun1()
    .then(callback => fun2(callback))
    .then(callback => fun3(callback))
```

### 3. aysnc await
忘记的可以参考[这篇](https://segmentfault.com/a/1190000007535316 "这篇")复习
```javascript
function fun1(){
    return new Promise(resolve => {
        resolve(data => {console.log(data)});
    })
}

function fun2(callback){
    return new Promise(resolve => {
        resolve(data => {callback(data)});
    })
}

function fun3(callback){
    return new Promise(resolve =>{
        setTimeout(()=>{
            let data = 1;
            callback(data)
        },100);
    })
}

async function doIt(){
    const f1 = await fun1();
    const f2 = await fun2(f1);
    const f3 = await fun3(f2);
}

doIt();
```

## 小程序中使用async await封装wx.request
将小程序内置非promise API转换为promise  
这里使用程序设计中的**代理模式**  
```javascript
// utils/util.js
const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: res => {
          resolve(res);
        },
        fail: error => {
          reject(error);
        }
      })
      func(args);
    })
  }
}

export {promisic}
```

封装wx.request
```javascript
// utils/http.js
import {
  config
} from "../config/config"

import {
  promisic
} from "./util"

class Http {
  static async request({
    url,
    data,
    method = 'GET',
  }) {
    const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      header:{
        appkey:config.appkey
      }
    })
    return res.data;
  }
}

export {Http};
```
模型中使用封装好的http请求方法
```javascript
// model/theme.js
import {
  Http
} from "../utils/http";

class Theme {
  static async getHomeLoacationA() {
    return await Http.request({
      url: 'v1/theme/by/names',
      data: {
        names: 't-1,t-2'
      }
    })
  }
}

export {
  Theme
}
```
```javascript
// pages/home/home.js
import {
  Theme
} from "../../model/theme";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTheme: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const data = await Theme.getHomeLoacationA();
    this.setData({
      topTheme: data[0]
    })
  },

})
```