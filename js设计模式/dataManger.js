/**数据访问对象
 * @param  {本地存储数据库前缀} preId
 * @param  {时间戳与存储数据的拼接符} timeSign
 */
let BaseLocalStroage = function (preId, timeSign) {
    this.preId = preId;
    this.timeSign = timeSign || "|-|";
}

BaseLocalStroage.prototype = {
    stroage: localStorage || window.localStorage,
    status: {
        SUCCESS: 0, //成功
        FALLURE: 1, //失败
        OVERFLOW: 2, //溢出
        TIMEOUT: 3, //过期
    },
    getKey(key) {
        return this.preId + key;
    },
    /**
     * @param  {数据字段标识} key
     * @param  {数据值} value
     * @param  {回调函数} callback
     * @param  {添加时间} time
     */
    set(key, value, callback, time) {
        let status = this.status.SUCCESS;
        key = this.getKey(key);
        try {
            time = new Date(time).getTime() || time.getTime();
        } catch (error) {
            time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
        }

        try {
            this.stroage.setItem(key, time + this.timeSign + value);
        } catch (e) {
            status = this.status.OVERFLOW;
        }
        callback && callback.call(this, status, key, value);
    },
    /**
     * @param  {数据字段标识} key
     * @param  {回调函数} callback
     */
    get(key, callback) {
        let status = this.status.SUCCESS,
            value = null,
            timeSignLen = this.timeSign.length,
            that = this,
            index,
            time,
            result;
        key = this.getKey(key);
        try {
            value = that.stroage.getItem(key);
        } catch (e) {
            result = {
                status: that.status.FALLURE,
                value: null,
            }
            callback && callback.call(this, result.status, result.value);
            return result;
        }

        if (value) {
            index = value.indexOf(that.timeSign);
            time = +value.slice(0, index);
            if (new Date(time).getTime() > new Date().getTime() || time == 0) {
                value = value.slice(index + timeSignLen);
            } else {
                value = null;
                status = that.status.FALLURE;
                that.remove(key);
            }
        } else {
            status = that.status.FALLURE;
        }
        result = {
            status,
            value
        }
        callback && callback.call(this, result.status, result.value);
        return result;
    },
    remove(key, callback) {
        let status = this.status.FALLURE,
            value = null;
        key = this.getKey(key);
        try {
            value = this.stroage.getItem(key);
        } catch (e) {

        }

        if (value) {
            try {
                this.stroage.removeItem(key);
                status = this.status.SUCCESS;
            } catch (error) {}
        }

        callback && callback.call(this, status, status > 0 ? null : value.slice(value.indexOf(this.timeSign) + this.timeSign.length))
    }
}


let M2 = new BaseLocalStroage("M-");
M2.set('a', '小明', function () {
    console.warn(Array.from(arguments))
})

M2.set('b', '小红', function () {
    console.warn(Array.from(arguments))
})

M2.get('a', function () {
    console.warn(Array.from(arguments))
})

M2.remove('a', function () {
    console.warn(Array.from(arguments))
})

M2.get('a', function () {
    console.warn(Array.from(arguments))
})

M2.get('b', function () {
    console.warn(Array.from(arguments))
})



let a = [1,2,3];
b =a.slice();

console.warn(a===b);