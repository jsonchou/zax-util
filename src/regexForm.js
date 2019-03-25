import _regex from './regex'

export default {
    email(v) {
        let nv = v.replace(/\ /gi, '');
        if (nv && nv.match(_regex.email)) {
            return true;
        }
        return false;
    },
    date(v) {
        let nv = v.replace(/\ /gi, '');
        if (nv && nv.match(_regex.date)) {
            return true;
        }
        return false;
    },
    qq(v) {
        let nv = v.replace(/\ /gi, '');
        if (nv && nv.match(_regex.qq)) {
            return true;
        }
        return false;
    },
    tel(v) {
        let nv = v.replace(/\ /gi, '');
        if (nv && nv.match(_regex.tel)) {
            return true;
        }
        return false;
    },
    idcard(v) {
        let nv = v.replace(/\ /gi, '');
        if (nv && nv.match(_regex.idcard)) {
            return true;
        }
        return false;
    },
    mobile(v) {
        let nv = v.replace(/\ /gi, '');
        if (nv && nv.match(_regex.mobile)) {
            return true;
        }
        return false;
    },
    phone(v) {
        return this.mobile(v)
    }
}