<a name="module_zaxString"></a>

## zaxString
<p>String module.</p>

**See**

- doc https://github.com/jsonchou/zax-util/tree/master/docs/string
- striptags https://github.com/ericnorris/striptags
- Locale-codes https://www.science.co.il/language/Locale-codes.php


* [zaxString](#module_zaxString)
    * [~toWord(num, locale)](#module_zaxString..toWord) ⇒ <code>String</code>
    * [~toDay(num, locale)](#module_zaxString..toDay) ⇒ <code>String</code>
    * [~toMonth(num, locale)](#module_zaxString..toMonth) ⇒ <code>String</code>
    * [~toHttps(str)](#module_zaxString..toHttps) ⇒ <code>String</code>
    * [~ellipsis(str, limit, tail, tailRepeatTime)](#module_zaxString..ellipsis) ⇒ <code>String</code>
    * [~padStart(str, limit, repeatWith)](#module_zaxString..padStart) ⇒ <code>String</code>
    * [~padEnd(str, limit, repeatWith)](#module_zaxString..padEnd) ⇒ <code>String</code>
    * [~trim(str, replaceWith)](#module_zaxString..trim) ⇒ <code>String</code>
    * [~trimStart(str, replaceWith)](#module_zaxString..trimStart) ⇒ <code>String</code>
    * [~trimEnd(str, replaceWith)](#module_zaxString..trimEnd) ⇒ <code>String</code>

<a name="module_zaxString..toWord"></a>

### zaxString~toWord(num, locale) ⇒ <code>String</code>
<p>number to english word.
0 - 10</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString..toDay"></a>

### zaxString~toDay(num, locale) ⇒ <code>String</code>
<p>number to day.
Sunday - Saturday : 0 - 6</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString..toMonth"></a>

### zaxString~toMonth(num, locale) ⇒ <code>String</code>
<p>number to month.
Jan - Dec : 1 - 12</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString..toHttps"></a>

### zaxString~toHttps(str) ⇒ <code>String</code>
<p>http to https</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
**Returns**: <code>String</code> - <p>https url</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>Number</code> | <p>target url</p> |

**Example**  
```js
toHttps('http://m.baidu.com')
//=> https://m.baidu.com
```
<a name="module_zaxString..ellipsis"></a>

### zaxString~ellipsis(str, limit, tail, tailRepeatTime) ⇒ <code>String</code>
<p>cut &amp; ellipsis string.</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString..padStart"></a>

### zaxString~padStart(str, limit, repeatWith) ⇒ <code>String</code>
<p>left pad with char.</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | <p>target</p> |
| limit | <code>Number</code> | <code>2</code> | <p>limit</p> |
| repeatWith | <code>String</code> | <code>0</code> | <p>repeatWith</p> |

**Example**  
```js
padStart(5)
//=> 05
```
<a name="module_zaxString..padEnd"></a>

### zaxString~padEnd(str, limit, repeatWith) ⇒ <code>String</code>
<p>right pad with char.</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | <p>target</p> |
| limit | <code>Number</code> | <code>2</code> | <p>limit</p> |
| repeatWith | <code>String</code> | <code>0</code> | <p>repeatWith</p> |

**Example**  
```js
padEnd(5)
//=> 50
```
<a name="module_zaxString..trim"></a>

### zaxString~trim(str, replaceWith) ⇒ <code>String</code>
<p>trim first &amp; last letter.</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | <p>target</p> |
| replaceWith | <code>String</code> | <p>replace with</p> |

**Example**  
```js
trim('/pages/index/','/')
//=> pages/index
```
<a name="module_zaxString..trimStart"></a>

### zaxString~trimStart(str, replaceWith) ⇒ <code>String</code>
<p>trim start.</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | <p>target</p> |
| replaceWith | <code>String</code> | <p>replace with</p> |

**Example**  
```js
trimStart('/pages/index/')
//=> pages/index/
```
<a name="module_zaxString..trimEnd"></a>

### zaxString~trimEnd(str, replaceWith) ⇒ <code>String</code>
<p>trim end.</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | <p>target</p> |
| replaceWith | <code>String</code> | <p>replace with</p> |

**Example**  
```js
trim('/pages/index/')
//=> /pages/index
```
