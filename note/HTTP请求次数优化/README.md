# HTTP请求次数优化 [返回>](https://github.com/hecheng1996lzg/KaseiMiniProgram "返回>")

## 优化什么
优化HTTP请求次数。  
页面不同栏目的数据来自不同接口，通过合并接口，一次HTTP请求返回多个栏目的数据。达到减少请求次数的目的。

## 为什么要优化
页面访问量大的时候，需要减少HTTP请求次数和数据库查询次数。

## 接口合并请求的衡量依据
因为Web是IO密集型的（还有一种是CPU密集型，例如视频编码处理），性能最大瓶颈在IO。  
所以合并请求思路例如：多次HTTP请求查询的是相同类型数据，则合并成一个请求，一次查询出所有数据后返回。  
主要考虑：
- 单次HTTP请求多少次数据库查询，特别是join
- 接口的灵活性，接口的可维护性
- 页面HTTP请求数量
