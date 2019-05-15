import func from "./func";

export default {
    camelcase: function(str) {
        return str.toLowerCase()
            .replace(/[-_]+/g, ' ')
            .replace(/[^\w\s]/g, '')
            .replace(/ (.)/g, function($1) {
                return $1.toUpperCase();
            })
            .replace(/\s+/g, '');
    },
    constantcase: str => {
        return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toUpperCase()
    },
    /**
     * 5=>05
     */
    prefixZero: function(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    },
    /**
     * 首字母大写
     * @param {string} str 
     */
    capitalize: function(str) {
        if (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
        return str
    },
    /**
     * 清理所有文本标签
     * @param {string} str 
     * @param {int} num 
     */
    cleanHtml: function(str, num) {
        if (!str) {
            return ''
        }
        return str
            .replace(/<\/?[^>]+(>|$)/gm, '')
            .replace(/\s/g, '')
            .slice(0, num)
    },
    /**
     * 将字符串长度截取
     * @param {string} name 
     * @param {int} length 
     */
    cutString: function(name, length = 8) {
        name = name || '';
        var matchRule = getRegExp("/\d{3}\*{4}\d{3}$/");
        if (matchRule.test(name)) {
            return name;
        }
        if (name.length > length) {
            return name.slice(0, length) + '...';
        }
        return name;
    },
    /**
     * 浮点类型长度截取
     * @param {int} num 
     * @param {int} length 
     */
    cutFloat: function(num, length = 1) {
        if (!num) {
            return num;
        }
        var num = parseFloat(num)
        var compa = num.toFixed(length) != Math.round(num)
        return num.toFixed(compa ? length : 0)
    },
    /**
     * 手机号掩码
     * @param {int/string} phone 
     */
    phoneMask: function(phone) {
        phone = phone + ''
        return phone.slice(0, 4) + '****' + phone.slice(8)
    },
    /**
     * 将字符转123456化成123,456
     * @param {字符串} num 
     * @param {长度} len 
     * @param {分隔符} mark 
     */
    toThousands: function(num, len = 3, mark = ',') {
        var num = (num || 0).toString(),
            result = '';
        while (num.length > len) {
            result = mark + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    }
}