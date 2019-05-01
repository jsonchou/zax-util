export default {
    unique: function(arr) {
        if (arr.length) {
            //数组去重
            var res = [];
            var json = {};
            for (var i = 0; i < arr.length; i++) {
                if (!json[arr[i]]) {
                    res.push(arr[i]);
                    json[arr[i]] = 1;
                }
            }
            return res;
        }
        return arr;
    },
    uniqueObject: function(array) {
        if (array.length) {
            //对象数组去重
            var re = [],
                i, l;
            for (i = 0, l = array.length; i < l; i++) {
                if (typeof array[i]._uniqObjects === "undefined") {
                    //添加标签
                    array[i]._uniqObjects = 1;
                    re.push(array[i]);
                }
            }
            //取出标签
            for (i = 0, l = re.length; i < l; i++) {
                delete re[i]._uniqObjects;
            }
            return re;
        }

        //适合简单对象去重
        //var x = { z: 1 };
        //var y = { q: 2 };
        //uniqObjects([x, y, x]);
    },
    //获取两个数据的交集
    //must already be sorted
    cros: function(a, b) {
        var ai = 0,
            bi = 0;
        var result = [];
        while (ai < a.length && bi < b.length) {
            if (a[ai] < b[bi]) {
                ai++;
            } else if (a[ai] > b[bi]) {
                bi++;
            } else {
                result.push(a[ai]);
                ai++;
                bi++;
            }
        }
        return result;
    },
    diff: function(a1, a2) {
        var a = [];
        var dif = [];

        for (var m = 0; m < a1.length; m++) {
            a[a1[m]] = true;
        }

        for (var i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]];
            } else {
                a[a2[i]] = true;
            }
        }

        for (var k in a) {
            dif.push(k);
        }

        return dif;
    }
    ``
}