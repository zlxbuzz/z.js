<a name="env.iOS"></a>

## .iOS(ua) ⇒ <code>boolean</code>
<p>ios环境</p>

**Kind**: static function  

| Param | Type |
| --- | --- |
| ua | <code>string</code> | 

**Example**  
```js
iOS('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1') // true
```
<a name="env.Weixin"></a>

## .Weixin(ua) ⇒ <code>boolean</code>
<p>weixin环境</p>

**Kind**: static function  

| Param | Type |
| --- | --- |
| ua | <code>string</code> | 

<a name="env.Android"></a>

## .Android(ua) ⇒ <code>boolean</code>
<p>android环境</p>

**Kind**: static function  

| Param | Type |
| --- | --- |
| ua | <code>string</code> | 

**Example**  
```js
Android('Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36') // true
```
<a name="env.isBrowser"></a>

## .isBrowser() ⇒ <code>boolean</code>
<p>browser环境</p>

**Kind**: static function  
<a name="env.isMara"></a>

## .isMara() ⇒ <code>boolean</code>
<p>webvie环境</p>

**Kind**: static function  
<a name="env.isMini"></a>

## .isMini() ⇒ <code>promise</code>
<p>小程序环境</p>

**Kind**: static function  
<a name="env.isMobile"></a>

## .isMobile(ua) ⇒ <code>boolean</code>
<p>mobile环境</p>

**Kind**: static function  

| Param | Type |
| --- | --- |
| ua | <code>string</code> | 

**Example**  
```js
isMobile('Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)') // true
```
