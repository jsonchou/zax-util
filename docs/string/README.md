## Functions

<dl>
<dt><a href="#queryString">queryString(obj)</a> ⇒ <code>String</code></dt>
<dd><p>Convert object to kindof querystring.
0 - 10</p></dd>
<dt><a href="#parseString">parseString(str)</a> ⇒ <code>String</code></dt>
<dd><p>Convert object to kindof querystring.
0 - 10</p></dd>
<dt><a href="#toWord">toWord(num, locale)</a> ⇒ <code>String</code></dt>
<dd><p>Number to english word.
0 - 10</p></dd>
<dt><a href="#toDay">toDay(num, locale)</a> ⇒ <code>String</code></dt>
<dd><p>number to day.
Sunday - Saturday : 0 - 6</p></dd>
<dt><a href="#toMonth">toMonth(num, locale)</a> ⇒ <code>String</code></dt>
<dd><p>number to month.
Jan - Dec : 1 - 12</p></dd>
<dt><a href="#ellipsis">ellipsis(str, limit, tail, tailRepeatTime)</a> ⇒ <code>String</code></dt>
<dd><p>cut &amp; ellipsis string.</p></dd>
<dt><a href="#padStart">padStart(str, limit, repeatWith)</a> ⇒ <code>String</code></dt>
<dd><p>left pad with char.</p></dd>
<dt><a href="#padEnd">padEnd(str, limit, repeatWith)</a> ⇒ <code>String</code></dt>
<dd><p>right pad with char.</p></dd>
<dt><a href="#trim">trim(str, tarChar, replaceWith)</a> ⇒ <code>String</code></dt>
<dd><p>trim first &amp; last letter.</p></dd>
<dt><a href="#trimStart">trimStart(str, tarChar, replaceWith)</a> ⇒ <code>String</code></dt>
<dd><p>trim start.</p></dd>
<dt><a href="#trimEnd">trimEnd(str, tarChar, replaceWith)</a> ⇒ <code>String</code></dt>
<dd><p>trim end.</p></dd>
</dl>

<a name="queryString"></a>

## queryString(obj) ⇒ <code>String</code>
<p>Convert object to kindof querystring.
0 - 10</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string</p>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | <p>object</p> |

**Example**  
```js
queryString({ k: 1, v: false, b: true, d: '', x: undefined, p: undefined })
//=> k=1&v=false&b=true
```
<a name="parseString"></a>

## parseString(str) ⇒ <code>String</code>
<p>Convert object to kindof querystring.
0 - 10</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | <p>string</p> |

**Example**  
```js
parseString("k=1&v=false&b=true&d=&x=undefined&p=undefined")
//=> { k: 1, v: false, b: true }
```
<a name="toWord"></a>

## toWord(num, locale) ⇒ <code>String</code>
<p>Number to english word.
0 - 10</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>locale of number</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num | <code>Number</code> |  | <p>number</p> |
| locale | <code>NumberKeys</code> | <code>en-us</code> | <p>locale</p> |

**Example**  
```js
toWord(1)
//=> one
```
<a name="toDay"></a>

## toDay(num, locale) ⇒ <code>String</code>
<p>number to day.
Sunday - Saturday : 0 - 6</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>day of number</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num | <code>Number</code> |  | <p>number</p> |
| locale | <code>daysKeys</code> | <code>zh-cn</code> | <p>locale</p> |

**Example**  
```js
toDay(0)
//=> 日
```
<a name="toMonth"></a>

## toMonth(num, locale) ⇒ <code>String</code>
<p>number to month.
Jan - Dec : 1 - 12</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>day of month</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num | <code>Number</code> |  | <p>number</p> |
| locale | <code>MonthKeys</code> | <code>zh-cn</code> | <p>locale</p> |

**Example**  
```js
toMonth(12)
//=> 十二
```
<a name="ellipsis"></a>

## ellipsis(str, limit, tail, tailRepeatTime) ⇒ <code>String</code>
<p>cut &amp; ellipsis string.</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | <p>target</p> |
| limit | <code>Number</code> | <code>10</code> | <p>limit</p> |
| tail | <code>SpecialCharType</code> | <code>.</code> | <p>tail</p> |
| tailRepeatTime | <code>Number</code> | <code>3</code> | <p>tail repeat times</p> |

**Example**  
```js
ellipsis("qwertyuiop", 5, '*', 3)
//=> qwert***
```
<a name="padStart"></a>

## padStart(str, limit, repeatWith) ⇒ <code>String</code>
<p>left pad with char.</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | <p>target</p> |
| limit | <code>Number</code> | <code>2</code> | <p>limit</p> |
| repeatWith | <code>String</code> | <code>0</code> | <p>repeatWith</p> |

**Example**  
```js
padStart(5,2)
//=> 05
```
<a name="padEnd"></a>

## padEnd(str, limit, repeatWith) ⇒ <code>String</code>
<p>right pad with char.</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | <p>target</p> |
| limit | <code>Number</code> | <code>2</code> | <p>limit</p> |
| repeatWith | <code>String</code> | <code>0</code> | <p>repeatWith</p> |

**Example**  
```js
padEnd(5,2)
//=> 50
```
<a name="trim"></a>

## trim(str, tarChar, replaceWith) ⇒ <code>String</code>
<p>trim first &amp; last letter.</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | <p>target</p> |
| tarChar | <code>String</code> | <code> </code> | <p>target of replace string</p> |
| replaceWith | <code>String</code> |  | <p>replace with</p> |

**Example**  
```js
trim('/pages/index/','/')
//=> pages/index
```
<a name="trimStart"></a>

## trimStart(str, tarChar, replaceWith) ⇒ <code>String</code>
<p>trim start.</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | <p>target</p> |
| tarChar | <code>String</code> | <code> </code> | <p>target of replace string</p> |
| replaceWith | <code>String</code> |  | <p>replace with</p> |

**Example**  
```js
trimStart('/pages/index/','/')
//=> pages/index/
```
<a name="trimEnd"></a>

## trimEnd(str, tarChar, replaceWith) ⇒ <code>String</code>
<p>trim end.</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | <p>target</p> |
| tarChar | <code>String</code> | <code> </code> | <p>target of replace string</p> |
| replaceWith | <code>String</code> |  | <p>replace with</p> |

**Example**  
```js
trimEnd('/pages/index/','/')
//=> /pages/index
```
