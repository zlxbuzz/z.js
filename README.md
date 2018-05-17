# z.js

[![Build Status](https://travis-ci.org/zlxbuzz/z.js.svg?branch=master)](https://travis-ci.org/zlxbuzz/z.js) [![codecov](https://codecov.io/gh/zlxbuzz/z.js/branch/master/graph/badge.svg)](https://codecov.io/gh/zlxbuzz/z.js)

前端工具库

## 安装

1. 直接使用`lib`目录下的`z.min.js`

``` html
  <script src="z.min.js"></script>
  <script>
      var params = _.getParamByName('a')
  </script>
```

2. npm/yarn安装
``` bash
$ yarn add zrutil
```
使用方法：
支持tree shaking按需加载
 ``` javascript
 import {iOS,getParmaByName} from 'zrutil'
 const isIOS = iOS()
 ...
 或者
 import * as _ from 'zrutil'
 const isIOS = _.iOS()
 ...

```

## 文档
[device]
[reg]
[dom]
[url]

[device]:https://github.com/zlxbuzz/z.js/blob/master/docs/device.md
[dom]:https://github.com/zlxbuzz/z.js/blob/master/docs/dom.md
[reg]:https://github.com/zlxbuzz/z.js/blob/master/docs/reg.md
[url]:https://github.com/zlxbuzz/z.js/blob/master/docs/url.md
