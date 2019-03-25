export default {
    lazy(me = {}, getter = "", key = 'id', cb) {
        if (me[getter] && me[getter][key]) {
            cb && cb();
        } else {
            let timer = setInterval(() => {
                if (me[getter] && me[getter][key]) {
                    cb && cb();
                    clearInterval(timer)
                }
            }, 20)
        }
    },
}