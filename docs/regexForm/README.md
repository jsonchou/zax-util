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
    * [~isPhone(v)](#module_zaxRegexForm..isPhone)

<a name="module_zaxRegexForm..matchRegex"></a>

### zaxRegexForm~matchRegex(v, regexKey)
<p>checke string with regex</p>
<pre class="prettyprint source lang-js"><code>matchRegex(&quot;d@d.d&quot;, &quot;EMAIL&quot; );
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> | <p>target string</p> |
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
<pre class="prettyprint source lang-js"><code>isMobile(13402938476);
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> | <p>target string</p> |

<a name="module_zaxRegexForm..isPhone"></a>

### zaxRegexForm~isPhone(v)
<p>isPhone</p>
<pre class="prettyprint source lang-js"><code>isPhone(13456575859);
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxRegexForm</code>](#module_zaxRegexForm)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>String</code> | <p>target string</p> |

