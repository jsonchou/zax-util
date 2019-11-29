<a name="module_zaxArray"></a>

## zaxArray
<p>Array module.</p>

**See**

- https://github.com/jsonchou/zax-util/tree/master/docs/array
- partial from https://github.com/jonschlinkert/arr-diff


* [zaxArray](#module_zaxArray)
    * [~sort(arr, orderBy, key)](#module_zaxArray..sort)
    * [~unique(arr, key)](#module_zaxArray..unique)
    * [~diff(...arr)](#module_zaxArray..diff) ⇒ <code>TypeArray</code>
    * [~intersect(a, b)](#module_zaxArray..intersect) ⇒ <code>Array.&lt;T&gt;</code>
    * [~minus(a, b)](#module_zaxArray..minus) ⇒ <code>Array.&lt;T&gt;</code>
    * [~complement(a, b)](#module_zaxArray..complement) ⇒ <code>Array.&lt;T&gt;</code>
    * [~union(a, b)](#module_zaxArray..union) ⇒ <code>Array.&lt;T&gt;</code>
    * [~unionPro(...arr)](#module_zaxArray..unionPro) ⇒ <code>TypeArray</code>

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

<a name="module_zaxArray..intersect"></a>

### zaxArray~intersect(a, b) ⇒ <code>Array.&lt;T&gt;</code>
<p>intersect array.</p>
<pre class="prettyprint source lang-js"><code>intersect([1,2,3,4,5], [2,4,6,8,10])
//=> [2,4] //交集
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Type |
| --- | --- |
| a | <code>Array.&lt;T&gt;</code> | 
| b | <code>Array.&lt;T&gt;</code> | 

<a name="module_zaxArray..minus"></a>

### zaxArray~minus(a, b) ⇒ <code>Array.&lt;T&gt;</code>
<p>minus array.</p>
<pre class="prettyprint source lang-js"><code>minus([1,2,3,4,5], [2,4,6,8,10])
//=> [1,3,5] //差集
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Type |
| --- | --- |
| a | <code>Array.&lt;T&gt;</code> | 
| b | <code>Array.&lt;T&gt;</code> | 

<a name="module_zaxArray..complement"></a>

### zaxArray~complement(a, b) ⇒ <code>Array.&lt;T&gt;</code>
<p>complement array.</p>
<pre class="prettyprint source lang-js"><code>complement([1,2,3,4,5], [2,4,6,8,10])
//=> [1,3,5,6,8,10] //补集
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Type |
| --- | --- |
| a | <code>Array.&lt;T&gt;</code> | 
| b | <code>Array.&lt;T&gt;</code> | 

<a name="module_zaxArray..union"></a>

### zaxArray~union(a, b) ⇒ <code>Array.&lt;T&gt;</code>
<p>union array.</p>
<pre class="prettyprint source lang-js"><code>union([1,2,3,4,5], [2,4,6,8,10])
//=> [1,2,3,4,5,6,8,10] //交集
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Type |
| --- | --- |
| a | <code>Array.&lt;T&gt;</code> | 
| b | <code>Array.&lt;T&gt;</code> | 

<a name="module_zaxArray..unionPro"></a>

### zaxArray~unionPro(...arr) ⇒ <code>TypeArray</code>
<p>union the array of simple with high performane.</p>
<pre class="prettyprint source lang-js"><code>unionPro(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']);
//=> ['a', 'b', 'c', 'd', 'e', 'f']
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Type |
| --- | --- |
| ...arr | <code>Array.&lt;TypeArray&gt;</code> | 

