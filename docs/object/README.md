<a name="module_zaxObject"></a>

## zaxObject
<p>Object module.</p>

**See**: https://github.com/jsonchou/zax-util/tree/master/docs/object  

* [zaxObject](#module_zaxObject)
    * [~hasDiff(a, b)](#module_zaxObject..hasDiff) ⇒ <code>Boolean</code>
    * [~shallowCompare(num, locale)](#module_zaxObject..shallowCompare) ⇒ <code>String</code>

<a name="module_zaxObject..hasDiff"></a>

### zaxObject~hasDiff(a, b) ⇒ <code>Boolean</code>
<p>has diff between objects.</p>

**Kind**: inner method of [<code>zaxObject</code>](#module_zaxObject)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**See**: https://github.com/tkh44/shallow-compare/blob/master/src/index.js  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Object</code> | <p>target a</p> |
| b | <code>Object</code> | <p>target b</p> |

**Example**  
```js
hasDiff({ k: 1, v: 3 }, { k: 1, v: 3 })
//=> false
```
<a name="module_zaxObject..shallowCompare"></a>

### zaxObject~shallowCompare(num, locale) ⇒ <code>String</code>
<p>shallow compare react props &amp; states.</p>

**Kind**: inner method of [<code>zaxObject</code>](#module_zaxObject)  
**Returns**: <code>String</code> - <p>day of number</p>  
**See**: https://github.com/tkh44/shallow-compare/blob/master/src/index.js  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | <p>number</p> |
| locale | <code>daysKeys</code> | <p>locale</p> |

**Example**  
```js
shallowCompare(this,this.props,nextProps)
//=> 日
```
