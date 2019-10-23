<a name="module_zaxObject"></a>

## zaxObject
<p>Object module.</p>

**See**: https://github.com/jsonchou/zax-util/tree/master/docs/object  

* [zaxObject](#module_zaxObject)
    * [~hasDiff(a, b)](#module_zaxObject..hasDiff) ⇒ <code>Boolean</code>
    * [~shallowCompare(instance, nextProps, nextState)](#module_zaxObject..shallowCompare) ⇒ <code>Boolean</code>

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

### zaxObject~shallowCompare(instance, nextProps, nextState) ⇒ <code>Boolean</code>
<p>shallow compare react props &amp; states.</p>

**Kind**: inner method of [<code>zaxObject</code>](#module_zaxObject)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**See**: https://github.com/tkh44/shallow-compare/blob/master/src/index.js  

| Param | Type | Description |
| --- | --- | --- |
| instance | <code>Object</code> | <p>react this</p> |
| nextProps | <code>Object</code> | <p>nextProps</p> |
| nextState | <code>Object</code> | <p>nextState</p> |

**Example**  
```js
shallowCompare(this,this.props,nextProps)
//=> 日
```
