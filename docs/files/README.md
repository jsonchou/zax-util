<a name="module_zaxFiles"></a>

## zaxFiles
<p>Files module.</p>

**See**

- https://github.com/jsonchou/zax-util/tree/master/docs/files
- https://github.com/eldargab/load-script/blob/master/index.js


* [zaxFiles](#module_zaxFiles)
    * [~loadScripts(src, opts)](#module_zaxFiles..loadScripts) ⇒ <code>Promise.&lt;Array.&lt;(HTMLScriptElement\|Error)&gt;&gt;</code>
    * [~loadStyles(src, opts)](#module_zaxFiles..loadStyles) ⇒ <code>Promise.&lt;Array.&lt;HTMLElementMix&gt;&gt;</code>

<a name="module_zaxFiles..loadScripts"></a>

### zaxFiles~loadScripts(src, opts) ⇒ <code>Promise.&lt;Array.&lt;(HTMLScriptElement\|Error)&gt;&gt;</code>
<p>load scripts</p>
<pre class="prettyprint source lang-js"><code>let foo = loadScripts([&quot;a.js&quot;,'b.js']);
//=> Promise
</code></pre>

**Kind**: inner method of [<code>zaxFiles</code>](#module_zaxFiles)  
**Returns**: <code>Promise.&lt;Array.&lt;(HTMLScriptElement\|Error)&gt;&gt;</code> - <p>Promise value</p>  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>String</code> \| <code>Array.&lt;String&gt;</code> | <p>script array</p> |
| opts | <code>ScriptOptions</code> | <p>script options</p> |

<a name="module_zaxFiles..loadStyles"></a>

### zaxFiles~loadStyles(src, opts) ⇒ <code>Promise.&lt;Array.&lt;HTMLElementMix&gt;&gt;</code>
<p>load scripts</p>
<pre class="prettyprint source lang-js"><code>let foo = loadStyles([&quot;a.css&quot;,'b.css']);
//=> Promise
</code></pre>

**Kind**: inner method of [<code>zaxFiles</code>](#module_zaxFiles)  
**Returns**: <code>Promise.&lt;Array.&lt;HTMLElementMix&gt;&gt;</code> - <p>Promise value</p>  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>String</code> \| <code>Array.&lt;String&gt;</code> | <p>remote css file or css segment array</p> |
| opts | <code>StyleOptions</code> | <p>style options</p> |

