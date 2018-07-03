//中介者模式
//通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合

let mediator = function(){
    let _msg = {};
    return {
        register(type,action){
            if(_msg[type]){
                _msg[type].push(action);
            }else{
                _msg[type] = [];
                _msg[type].push(action);
            }
        },
        send(type){
            if(_msg[type]){
                for(let i = 0;i<_msg[type].length;i++){
                    _msg[type][i] && _msg[type][i]();
                }
            }
        }
    }
}();

mediator.register('demo',function(){
    console.log('hello')
})


mediator.register('hello',function(){
    console.log('1111')
})

mediator.send('demo')
mediator.send('hello')