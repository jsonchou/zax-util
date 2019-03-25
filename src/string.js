export default {
    camelcase: str => {
        return str.toLowerCase()
            .replace(/[-_]+/g, ' ')
            .replace(/[^\w\s]/g, '')
            .replace(/ (.)/g, function ($1) {
                return $1.toUpperCase();
            })
            .replace(/\s+/g, '');
    },
    constantcase: str => {
        return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toUpperCase()
    },
    prefixZero: n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    },
    upperFirstLetter(str) {
        if (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
        return str
    },
    cleanHtml(str, num) {
        if (!str) {
            return ''
        }
        return str
            .replace(/<\/?[^>]+(>|$)/gm, '')
            .replace(/\s/g, '')
            .slice(0, num)
    },
    cutString: function (name, length = 8) {
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
    cutNumber: function (num, length = 1) {
        if (!num) {
            return num;
        }
        var num = parseFloat(num)
        var compa = num.toFixed(length) != Math.round(num)
        return num.toFixed(compa ? length : 0)
    },
    phoneMask: function (phone) {
        phone = phone + ''
        return phone.slice(0, 4) + '****' + phone.slice(8)
    },
}