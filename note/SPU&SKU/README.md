# SPU&SKU [返回>](https://github.com/hecheng1996lzg/KaseiMiniProgram "返回>")

## SPU&SKU 对比

|                | SPU                                                            | SKU                                     |
| -------------- | -------------------------------------------------------------- | --------------------------------------- |
| en 全称        | standard product unit                                          | stock keeping unit                      |
| cn 全称        | 标准化产品单元                                                 | 库存量单位                              |
| 程序员的世界里 | SPU 就是类                                                     | SKU 就是对象                            |
| 简介           | 商品信息聚合的最小单位，是一组可复用、易检索的标准化信息的集合 | 物理上不可分割的最小存货单元            |
| 用处           | 集合描述了一个产品的特性                                       | 可以根据 SKU 来确定具体的货物存量和价格 |

## 例子

SPU 是大品类，SKU 是单个商品。  
SPU 大于 SKU。  
这俩是有相对性的，例如：  

| | SPU | SKU |
| ------- | --------------------- | ------------------ |
| 例 1 | iphone | iphone6 |
| 例 2 | iphone6 | 黑色 16G iphone6 |

## 补充

仅依靠 SPU 和 SKU 实现**单商家商品销售**没问题。但如果是平台化场景，具有**多个商家销售相同的商品**。因为每个商家对 SKU 设置的不同，所以在 SPU 和 SKU 之间还会有一层**item**（单品）。
