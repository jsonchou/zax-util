<a name="module_zaxArray"></a>

## zaxArray
<p>Array module.</p>

**See**

- https://github.com/jsonchou/zax-util/tree/master/docs/array
- partial from https://github.com/jonschlinkert/arr-diff


* [zaxArray](#module_zaxArray)
    * [~sort(arr, orderBy, key)](#module_zaxArray..sort)
    * [~unique(arr, key)](#module_zaxArray..unique)
    * [~union(...arr)](#module_zaxArray..union)
    * [~diff(...arr)](#module_zaxArray..diff)

<a name="module_zaxArray..sort"></a>

### zaxArray~sort(arr, orderBy, key)
<p>sort the array.</p>
<pre class="prettyprint source lang-js"><code>sort([{id:2},{id:3},{id:1}], &quot;ASC&quot;, &quot;id&quot;);
//=> [{id:1},{id:2},{id:3}]
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Default |
| --- | --- |
| arr |  | 
| orderBy | <code>ASC</code> | 
| key |  | 

<a name="module_zaxArray..unique"></a>

### zaxArray~unique(arr, key)
<p>unique array.</p>
<pre class="prettyprint source lang-js"><code>unique(['a','c','d','a']);
//=> ['a','b','c']
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param | Default |
| --- | --- |
| arr |  | 
| key | <code>id</code> | 

<a name="module_zaxArray..union"></a>

### zaxArray~union(...arr)
<p>union the array of simple.</p>
<pre class="prettyprint source lang-js"><code>union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']);
//=> ['a', 'b', 'c', 'd', 'e', 'f']
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param |
| --- |
| ...arr | 

<a name="module_zaxArray..diff"></a>

### zaxArray~diff(...arr)
<p>diff the first array of simple.</p>
<pre class="prettyprint source lang-js"><code>diff(['a', 'b', 'c'], ['a'], ['b'],['g'])
//=> ['c']
</code></pre>

**Kind**: inner method of [<code>zaxArray</code>](#module_zaxArray)  

| Param |
| --- |
| ...arr | 

