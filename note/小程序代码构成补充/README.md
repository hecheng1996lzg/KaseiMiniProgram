# 小程序代码构成补充 [返回>](https://github.com/hecheng1996lzg/KaseiMiniProgram "返回>")
- page的wxml文件：类似html描述结构。
- page的wxss文件：类似css描述样式。
- page的json文件：此page的配置项。
- page的js文件：主要做数据绑定，view的视图层（wxml）和业务逻辑层之间的一个桥梁，算是中间层。类似MVC中的C。
- components：自定义组件不要亲自发请求，由使用自定义组件的页面发请求，自定义组件只接收绑定数据。

## 命名
### 自定义组件传值
- 自定义组件properties内设置的变量名是驼峰
- wxml中传值时不支持驼峰，需要转成“-”连字符