//1策略模式
//概念：将一组算法封装起来，使其相互期间可以互相替换，封装的算法具有一定独立性
//不会随客户端变化而变化
//它与状态模式看上去很像，不同点是
//它不需要管理状态，状态间没有依赖，策略之间可以相互替换，在策略对象内部保存的是相互独立的一些算法
//示例1

let PriceStrategy = function () {
    let stragety = {
        return30(price) {
            //+price的作用把price转为数字型
            return +price + parseInt(price / 100) * 30;
        },
        return50(price) {
            return +price + parseInt(price / 100) * 50;
        },
        percent90(price) {
            //处理小数乘除法有bug，所有转为整数运算  
            return price * 100 * 90 / 10000
        },
        percent80(price) {
            return price * 100 * 80 / 10000
        },
        percent90(price) {
            return price * 100 * 50 / 10000
        },
    }
    //策略算法调用接口
    return function (algorithm, price) {
        return stragety[algorithm] && stragety[algorithm](price)
    }
}();


//示例2：用于表单验证模块
let inputStrategy = function () {
    let stragety = {
        notNull(value) {
            return /\s+/.test(value) ? '请输入内容' : ' ';
        },
        number(value) {
            return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字'

        },
        phone(value) {
            //座机
            return /^d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式'
        },
    }
    return {
        a: stragety,
        check(type, value) {
            //去除首位空白符
            value = value.replace(/^\s+|\s+$/g, '');
            return stragety[type] ? stragety[type](value) : '没有该类型的检测方法'
        },
        //添加策略(添加更多验证方法)
        addStragety(type, fn) {
            stragety[type] = fn;
        }
    }
}()


inputStrategy.addStragety('aaa', function () {
    console.log(1);
})

console.dir(inputStrategy);

//策略模式实现三
var S = function (salary) {
    return salary * 4;
};
var A = function (salary) {
    return salary * 3;
};
var B = function (salary) {
    return salary * 2;
};
var calculateBonus = function (func, salary) {
    return func(salary);
};
calculateBonus(S, 10000); // 输出：40000