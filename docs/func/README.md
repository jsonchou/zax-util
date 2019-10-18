<a name="module_zaxFunc"></a>

## zaxFunc
<p>Func module.</p>

**See**: https://github.com/jsonchou/zax-util/tree/master/docs/func  

* [zaxFunc](#module_zaxFunc)
    * [~wait(parentObj, key, ticker, expiredTime)](#module_zaxFunc..wait) ⇒ <code>Promise</code>
    * [~sleep(time)](#module_zaxFunc..sleep)

<a name="module_zaxFunc..wait"></a>

### zaxFunc~wait(parentObj, key, ticker, expiredTime) ⇒ <code>Promise</code>
<p>wait function loaded</p>

**Kind**: inner method of [<code>zaxFunc</code>](#module_zaxFunc)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parentObj | <code>Object</code> |  | <p>target object</p> |
| key | <code>String</code> |  | <p>key of object</p> |
| ticker | <code>Number</code> | <code>30</code> | <p>ticker of setInterval</p> |
| expiredTime | <code>Number</code> | <code>3000</code> | <p>expired time</p> |

<a name="module_zaxFunc..sleep"></a>

### zaxFunc~sleep(time)
<p>wait some time and excute the next func</p>

**Kind**: inner method of [<code>zaxFunc</code>](#module_zaxFunc)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| time | <code>Number</code> | <code>200</code> | <p>sleep time</p> |

