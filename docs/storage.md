<a name="storage.set"></a>

## .set() ⇒ <code>void</code>
<p>设置storage</p>

**Kind**: static function  

| Type | Description |
| --- | --- |
| <code>string</code> | <p>attr</p> |
| <code>string</code> \| <code>number</code> | <p>val</p> |

**Example**  
```js
set("token", "123") // undefined
```
**Example**  
```js
get("token") // "123"
```
<a name="storage.get"></a>

## .get() ⇒ <code>string</code>
<p>获取storage</p>

**Kind**: static function  

| Type | Description |
| --- | --- |
| <code>string</code> | <p>attr</p> |

**Example**  
```js
get("token") // "123"
```
<a name="storage.remove"></a>

## .remove() ⇒ <code>void</code>
<p>移除storage</p>

**Kind**: static function  

| Type | Description |
| --- | --- |
| <code>string</code> | <p>attr</p> |

**Example**  
```js
remove("token") // undefined
```
**Example**  
```js
get("token") // null
```
<a name="storage.clear"></a>

## .clear() ⇒ <code>void</code>
<p>移除所有storage</p>

**Kind**: static function  
**Example**  
```js
clear() // undefined
```
**Example**  
```js
get("token") // null
```
