//中介者模式
//通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合
//ES5实现
// let mediator = function () {
//     let _msg = {};
//     return {
//         register(type, action) {
//             if (_msg[type]) {
//                 _msg[type].push(action);
//             } else {
//                 _msg[type] = [];
//                 _msg[type].push(action);
//             }
//         },
//         send(type) {
//             if (_msg[type]) {
//                 for (let i = 0; i < _msg[type].length; i++) {
//                     _msg[type][i] && _msg[type][i]();
//                 }
//             }
//         }
//     }
// }();
// mediator.register('demo', function () {
//     console.log('hello')
// })
// mediator.register('hello', function () {
//     console.log('1111')
// })
// mediator.send('demo')
// mediator.send('hello')



//**Es6实现 */
class mediator2 {
    constructor() {
        this.msg = new Map();
        this.register = function (type, fn) {
            if (this.msg.has(type)) {
                arr.push(fn);
            } else {
                this.msg.set(type, []);
                this.msg.get(type).push(fn);
            }
        };
        this.send = function (type) {
            if (this.msg.has(type)) {
                let arr = this.msg.get(type);
                for (let i = 0; i < arr.length; i++) {
                    arr[i]();
                }
            } else {
                console.warn(`没有注册{${type}}类型`);
            }
        }
        this.delete = function (type) {
            if (this.msg.has(type)) {
                this.msg.delete(type);
                console.warn(`已删除{${type}}类型的所有注册事件`)
            }
        }
        this.clear = function(){
            let b = confirm("你真的要删除所有注册事件吗?");
            if(b){
                this.msg.clear();
                console.warn("删除成功！")
            }
        }
    }
}
export default mediator2;