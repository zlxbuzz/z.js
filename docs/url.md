## Functions

<dl>
<dt><a href="#getParamByName">getParamByName()</a></dt>
<dd><p>获取url参数</p>
<h3 id="example-es-imports-">Example (es imports)</h3>
<pre><code class="language-javascript">// url www.baidu.com?c=aa
import {getParamByName} from &#39;zrutil&#39;
getParamByName(&#39;c&#39;) =&gt; &#39;aa&#39;
</code></pre>
</dd>
<dt><a href="#parseQueryString">parseQueryString()</a></dt>
<dd><p>解析url参数</p>
<h3 id="example-es-imports-">Example (es imports)</h3>
<pre><code class="language-javascript">// url www.baidu.com?c=aa
import {parseQueryString} from &#39;zrutil&#39;
parseQueryString(url) =&gt; {c: &#39;aa&#39;}
</code></pre>
</dd>
</dl>

<a name="getParamByName"></a>

## getParamByName()
获取url参数
### Example (es imports)
```js
// url www.baidu.com?c=aa
import {getParamByName} from 'zrutil'
getParamByName('c') => 'aa'
```

**Kind**: global function  
<a name="parseQueryString"></a>

## parseQueryString()
解析url参数
### Example (es imports)
```js
// url www.baidu.com?c=aa
import {parseQueryString} from 'zrutil'
parseQueryString(url) => {c: 'aa'}
```

**Kind**: global function  
