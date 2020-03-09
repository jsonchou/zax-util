<a name="module_zaxRegexForm"></a>

## zaxRegexForm
<p>RegexForm module.</p>

**See**: https://github.com/jsonchou/zax-util/tree/master/docs/regexForm  

* [zaxRegexForm](#module_zaxRegexForm)
    * [~matchRegex(v, regexKey)](#module_zaxRegexForm..matchRegex)
    * [~isEmail(v)](#module_zaxRegexForm..isEmail)
    * [~isDate(v)](#module_zaxRegexForm..isDate)
    * [~isQQ(v)](#module_zaxRegexForm..isQQ)
    * [~isTel(v)](#module_zaxRegexForm..isTel)
    * [~isIdcard(v)](#module_zaxRegexForm..isIdcard)
    * [~isMobile(v)](#module_zaxRegexForm..isMobile)
    * [~isMobileChina(v)](#module_zaxRegexForm..isMobileChina)
    * [~isMobileHongKong(v)](#module_zaxRegexForm..isMobileHongKong)
    * [~isMobileMacau(v)](#module_zaxRegexForm..isMobileMacau)
    * [~isMobileTaiwan(v)](#module_zaxRegexForm..isMobileTaiwan)

<a name="module_zaxRegexForm..matchRegex"></a>

### zaxRegexForm~matchRegex(v, regexKey)
<p>checke string with regex</p>
<pre class="prettyprint source lang-js"><code>matchRegex(&quot;d@d.d&quot;, &quot;EMAIL&quot; );
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> \| <code>Number</code> \| <code>Date</code> | <p>target string</p> |
| regexKey | <code>String</code> | <p>regex</p> |

<a name="module_zaxRegexForm..isEmail"></a>

### zaxRegexForm~isEmail(v)
<p>isEmail</p>
<pre class="prettyprint source lang-js"><code>isEmail(&quot;d@d.d&quot;);
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isDate"></a>

### zaxRegexForm~isDate(v)
<p>isDate</p>
<pre class="prettyprint source lang-js"><code>isDate(new Date());
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isQQ"></a>

### zaxRegexForm~isQQ(v)
<p>isQQ</p>
<pre class="prettyprint source lang-js"><code>isQQ(54645464);
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isTel"></a>

### zaxRegexForm~isTel(v)
<p>isTel</p>
<pre class="prettyprint source lang-js"><code>isTel(&quot;027-87665432&quot;);
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isIdcard"></a>

### zaxRegexForm~isIdcard(v)
<p>isIdcard</p>
<pre class="prettyprint source lang-js"><code>isIdcard(130324200106012652);
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isMobile"></a>

### zaxRegexForm~isMobile(v)
<p>isMobile</p>
<pre class="prettyprint source lang-js"><code>isMobile(13402938476)
//=> true

isMobile('13402938476')
//=> true

isMobile('8613402938476')
//=> true

isMobile('+8613402938476')
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> \| <code>Number</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isMobileChina"></a>

### zaxRegexForm~isMobileChina(v)
<p>isMobileChina</p>
<pre class="prettyprint source lang-js"><code>isMobileChina('13402938476')
//=> true

isMobileChina('8613402938476')
//=> true

isMobileChina('+8613402938476')
//=> true

isMobileChina('94856780')
//=> true

isMobileChina('6643248')
//=> true

isMobileChina('0922887075')
//=> true

isMobileChina('+8860922887075')
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> \| <code>Number</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isMobileHongKong"></a>

### zaxRegexForm~isMobileHongKong(v)
<p>isMobileHongKong</p>
<pre class="prettyprint source lang-js"><code>isMobileHongKong(94856780)
//=> true

isMobileHongKong('94856780')
//=> true

isMobileHongKong('85294856780')
//=> true

isMobileHongKong('+85294856780')
//=> true

isMobileHongKong(64856780)
//=> true

isMobileHongKong('64856780')
//=> true

isMobileHongKong('85264856780')
//=> true

isMobileHongKong('+85264856780')
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> \| <code>Number</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isMobileMacau"></a>

### zaxRegexForm~isMobileMacau(v)
<p>isMobileMacau</p>
<pre class="prettyprint source lang-js"><code>isMobileMacau(6643248)
//=> true

isMobileMacau('6643248')
//=> true

isMobileMacau('8536643248')
//=> true

isMobileMacau('+8536643248')
//=> true

isMobileMacau(6843248)
//=> true

isMobileMacau('6843248')
//=> true

isMobileMacau('8536843248')
//=> true

isMobileMacau('+8536843248')
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> \| <code>Number</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isMobileTaiwan"></a>

### zaxRegexForm~isMobileTaiwan(v)
<p>isMobileTaiwan</p>
<pre class="prettyprint source lang-js"><code>isMobileTaiwan(13402938476);
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> \| <code>Number</code> | <p>target string</p> |

