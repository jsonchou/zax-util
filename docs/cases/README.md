<a name="module_zaxCases"></a>

## zaxCases
<p>Cases module.</p>

**See**: https://github.com/jsonchou/zax-util/tree/master/docs/cases  

* [zaxCases](#module_zaxCases)
    * [~pascalcase(&#x60;string&#x60;)](#module_zaxCases..pascalcase) ⇒ <code>String</code>
    * [~camelcase(&#x60;string&#x60;)](#module_zaxCases..camelcase) ⇒ <code>String</code>
    * [~dashcase(&#x60;string&#x60;)](#module_zaxCases..dashcase) ⇒ <code>String</code>
    * [~dotcase(&#x60;string&#x60;)](#module_zaxCases..dotcase) ⇒ <code>String</code>
    * [~pathcase(&#x60;string&#x60;)](#module_zaxCases..pathcase) ⇒ <code>String</code>
    * [~sentencecase(&#x60;string&#x60;)](#module_zaxCases..sentencecase) ⇒ <code>String</code>
    * [~snakecase(&#x60;string&#x60;)](#module_zaxCases..snakecase) ⇒ <code>String</code>

<a name="module_zaxCases..pascalcase"></a>

### zaxCases~pascalcase(&#x60;string&#x60;) ⇒ <code>String</code>
<p>PascalCase the characters in <code>string</code>.</p>
<pre class="prettyprint source lang-js"><code>pascalcase(&quot;foo bar baz&quot;);
//=> 'FooBarBaz'
</code></pre>

**Kind**: inner method of [<code>zaxCases</code>](#module_zaxCases)  
**Api**: public  

| Param | Type |
| --- | --- |
| `string` | <code>String</code> | 

<a name="module_zaxCases..camelcase"></a>

### zaxCases~camelcase(&#x60;string&#x60;) ⇒ <code>String</code>
<p>camelCase the characters in <code>string</code>.</p>
<pre class="prettyprint source lang-js"><code>camelcase(&quot;foo bar baz&quot;);
//=> 'fooBarBaz'
</code></pre>

**Kind**: inner method of [<code>zaxCases</code>](#module_zaxCases)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| `string` | <code>String</code> | <p>The string to camelcase.</p> |

<a name="module_zaxCases..dashcase"></a>

### zaxCases~dashcase(&#x60;string&#x60;) ⇒ <code>String</code>
<p>dash-case the characters in <code>string</code>. This is similar to [slugify],
but [slugify] makes the string compatible to be used as a URL slug.</p>
<pre class="prettyprint source lang-js"><code>dashcase(&quot;a b.c d_e&quot;);
//=> 'a-b-c-d-e'
</code></pre>

**Kind**: inner method of [<code>zaxCases</code>](#module_zaxCases)  
**Tags**: dasherize, dashify, hyphenate, case  
**Api**: public  

| Param | Type |
| --- | --- |
| `string` | <code>String</code> | 

<a name="module_zaxCases..dotcase"></a>

### zaxCases~dotcase(&#x60;string&#x60;) ⇒ <code>String</code>
<p>dot.case the characters in <code>string</code>.</p>
<pre class="prettyprint source lang-js"><code>dotcase(&quot;a-b-c d_e&quot;);
//=> 'a.b.c.d.e'
</code></pre>

**Kind**: inner method of [<code>zaxCases</code>](#module_zaxCases)  
**Api**: public  

| Param | Type |
| --- | --- |
| `string` | <code>String</code> | 

<a name="module_zaxCases..pathcase"></a>

### zaxCases~pathcase(&#x60;string&#x60;) ⇒ <code>String</code>
<p>path/case the characters in <code>string</code>.</p>
<pre class="prettyprint source lang-js"><code>pathcase(&quot;a-b-c d_e&quot;);
//=> 'a/b/c/d/e'
</code></pre>

**Kind**: inner method of [<code>zaxCases</code>](#module_zaxCases)  
**Api**: public  

| Param | Type |
| --- | --- |
| `string` | <code>String</code> | 

<a name="module_zaxCases..sentencecase"></a>

### zaxCases~sentencecase(&#x60;string&#x60;) ⇒ <code>String</code>
<p>Sentence-case the characters in <code>string</code>.</p>
<pre class="prettyprint source lang-js"><code>sentencecase(&quot;foo bar baz.&quot;);
//=> 'Foo bar baz.'
</code></pre>

**Kind**: inner method of [<code>zaxCases</code>](#module_zaxCases)  
**Api**: public  

| Param | Type |
| --- | --- |
| `string` | <code>String</code> | 

<a name="module_zaxCases..snakecase"></a>

### zaxCases~snakecase(&#x60;string&#x60;) ⇒ <code>String</code>
<p>snake_case the characters in <code>string</code>.</p>
<pre class="prettyprint source lang-js"><code>snakecase(&quot;a-b-c d_e&quot;);
//=> 'a_b_c_d_e'
</code></pre>

**Kind**: inner method of [<code>zaxCases</code>](#module_zaxCases)  
**Api**: public  

| Param | Type |
| --- | --- |
| `string` | <code>String</code> | 

