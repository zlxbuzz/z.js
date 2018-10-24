<a name="url.getParamByName"></a>

## .getParamByName() ⇒ <code>string</code>
<p>获取url参数</p>

**Kind**: static function  

| Type | Description |
| --- | --- |
| <code>string</code> | <p>name</p> |
| <code>string</code> | <p>url</p> |

**Example**  
```js
getParamByName("a", "http://www.baidu.com?a=1&b=aaa") // "1"
```
**Example**  
```js
getParamByName("b", "http://www.baidu.com?a=1&b=aaa") // "aaa"
```
**Example**  
```js
getParamByName("c", "http://www.baidu.com?a=1&b=aaa") //""
```
**Example**  
```js
getParamByName("c") // "ccc"
```
<a name="url.parseQueryString"></a>

## .parseQueryString() ⇒ <code>Object</code>
<p>解析url</p>

**Kind**: static function  

| Type | Description |
| --- | --- |
| <code>string</code> | <p>url</p> |

**Example**  
```js
parseQueryString("http://www.baidu.com?a=1&b=aaa") // {a:'1',b:'aaa'}
```
