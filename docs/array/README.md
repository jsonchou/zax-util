<a name="module_zaxArray"></a>

## zaxArray
<p>Array module.</p>

**See**

- https://github.com/jsonchou/zax-util/tree/master/docs/array
- partial from https://github.com/jonschlinkert/arr-diff


* [zaxArray](#module_zaxArray)
    * [~sort(arr, orderBy, key)](#module_zaxArray..sort)
    * [~unique(arr, key)](#module_zaxArray..unique)
    * [~union(...arr)](#module_zaxArray..union) ⇒ <code>TypeArray</code>
    * [~diff(...arr)](#module_zaxArray..diff) ⇒ <code>TypeArray</code>

<a name="module_zaxArray..sort"></a>

### zaxArray~sort(arr, orderBy, key)
<p>sort array.</p>
<pre class="prettyprint source lang-js"><code>sort([{ id: 2 }, { id: 3 }, { id: 1 }], 'ASC', 'id'))
//=> [{id:1},{id:2},{id:3}]
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  
**Read only**: true  

| Param | Type | Default |
| --- | --- | --- |
| arr | <code>MixArray</code> |  | 
| orderBy | <code>TypeOrderBy</code> | <code>ASC</code> | 
| key | <code>String</code> |  | 

<a name="module_zaxArray..unique"></a>

### zaxArray~unique(arr, key)
<p>unique array.</p>
<pre class="prettyprint source lang-js"><code>unique(['a','c','d','a']);
//=> ['a','b','c']
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  
**Read only**: true  

| Param | Type | Default |
| --- | --- | --- |
| arr | <code>MixArray</code> |  | 
| key |  | <code>id</code> | 

<a name="module_zaxArray..union"></a>

### zaxArray~union(...arr) ⇒ <code>TypeArray</code>
<p>union the array of simple.</p>
<pre class="prettyprint source lang-js"><code>union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']);
//=> ['a', 'b', 'c', 'd', 'e', 'f']
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Type |
| --- | --- |
| ...arr | <code>Array.&lt;TypeArray&gt;</code> | 

<a name="module_zaxArray..diff"></a>

### zaxArray~diff(...arr) ⇒ <code>TypeArray</code>
<p>diff the first array of simple.</p>
<pre class="prettyprint source lang-js"><code>diff(['a', 'b', 'c'], ['a'], ['b'], ['g'])
//=> ['c']
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Type |
| --- | --- |
| ...arr | <code>Array.&lt;TypeArray&gt;</code> | 

