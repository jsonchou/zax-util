# ZAX Util
## there have 6 modes of amd, cjs, es, iife, system, umd. 
## support SSR Miniprogram Browser slide

## install

``` base
npm i zax-util -S
```

## build with rollup

``` base
npm run build
```

## use

``` javascript 
const zaxUtil = require('zax-util')
or
import zaxUtil from 'zax-util'
```


. **compare**
``` javascript
zaxDate.compare('2018/9/10','2018/9/5')
zaxDate.compare('2018/9/10','2018/9/10')
zaxDate.compare('2018/9/10','2018/9/11')
```

``` javascript
1
0
-1
```
 