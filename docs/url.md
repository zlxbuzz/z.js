## Functions

<dl>
<dt><a href="#getParamByName">getParamByName()</a></dt>
<dd><p>获取url参数</p>
</dd>
<dt><a href="#parseQueryString">parseQueryString()</a></dt>
<dd><p>解析url参数</p>
</dd>
</dl>

<a name="getParamByName"></a>

## getParamByName()
获取url参数

**Kind**: global function  
**Example**  
```js
// url www.baidu.com?c=aa
import {getParamByName} from 'zrutil'
getParamByName('c') => 'aa'
```
<a name="parseQueryString"></a>

## parseQueryString()
解析url参数

**Kind**: global function  
**Example**  
```js
// url www.baidu.com?c=aa
import {parseQueryString} from 'zrutil'
parseQueryString(url) => {c: 'aa'}
```
