//模板方法模式
// 模板方法模式是一种只需使用继承就可以实现的非常简单的模式。（servlet的service方法）
// 模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常
// 在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺
// 序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。
// 假如我们有一些平行的子类，各个子类之间有一些相同的行为，也有一些不同的行为。如果
// 相同和不同的行为都混合在各个子类的实现中，说明这些相同的行为会在各个子类中重复出现。
// 但实际上，相同的行为可以被搬移到另外一个单一的地方，模板方法模式就是为解决这个问题而
// 生的。在模板方法模式中，子类实现中的相同部分被上移到父类中，而将不同的部分留待子类来
// 实现。

//1.使用继承实现（面向对象）
var Beverage = function () {};
Beverage.prototype.boilWater = function () {
    console.log('把水煮沸');
};
Beverage.prototype.brew = function () {
    throw new Error('子类必须重写 brew 方法');
};
Beverage.prototype.pourInCup = function () {
    throw new Error('子类必须重写 pourInCup 方法');
};
Beverage.prototype.addCondiments = function () {
    throw new Error('子类必须重写 addCondiments 方法');
};
Beverage.prototype.customerWantsCondiments = function () {
    return true; // 默认需要调料
};
Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) { // 如果挂钩返回 true，则需要调料
        this.addCondiments();
    }
};
var CoffeeWithHook = function () {};
CoffeeWithHook.prototype = new Beverage();
CoffeeWithHook.prototype.brew = function () {
    console.log('用沸水冲泡咖啡');
};
CoffeeWithHook.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子');
};
CoffeeWithHook.prototype.addCondiments = function () {
    console.log('加糖和牛奶');
};
CoffeeWithHook.prototype.customerWantsCondiments = function () {
    return window.confirm('请问需要调料吗？');
};
var coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init();





// 2.javaScript使用高级函数实现

var Beverage = function (param) {
    var boilWater = function () {
        console.log('把水煮沸');
    };
    var brew = param.brew || function () {
        throw new Error('必须传递 brew 方法');
    };
    var pourInCup = param.pourInCup || function () {
        throw new Error('必须传递 pourInCup 方法');
    };
    var addCondiments = param.addCondiments || function () {
        throw new Error('必须传递 addCondiments 方法');
    };
    var F = function () {};
    F.prototype.init = function () {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    };
    return F;
};

var Coffee = Beverage({
    brew: function () {
        console.log('用沸水冲泡咖啡');
    },
    pourInCup: function () {
        console.log('把咖啡倒进杯子');
    },
    addCondiments: function () {
        console.log('加糖和牛奶');
    }
});

var Tea = Beverage({
    brew: function () {
        console.log('用沸水浸泡茶叶');
    },
    pourInCup: function () {
        console.log('把茶倒进杯子');
    },
    addCondiments: function () {
        console.log('加柠檬');
    }
});

var coffee = new Coffee();
coffee.init();
var tea = new Tea();
tea.init();