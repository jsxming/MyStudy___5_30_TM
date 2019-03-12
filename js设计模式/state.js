//状态模式
//当语句中的if，else较多的情况
function fn(param){
    if(param == 1){

    }else if(param == 2){

    }else if(param == 3){

    }else if(param == 4){

    }else if(param == 5){

    }
    //......更多if else
}

//2.状态对象的实现优化
var fn2 =function(){
    var State = {
        state0(){
            console.log('这是第一种情况')
        },
        state1(){
            console.log('这是第2种情况')
        },
        state2(){
            console.log('这是第3种情况')
        },
        state3(){
            console.log('这是第4种情况')
        },
        state4(){
            console.log('这是第5种情况')
        }
    }
    function show(index){
        State['state' + index] && State['state' +index]();
    }
    return {
        show:show
    }
}()

//调用
// fn2.show(3)



let MState = function(){
    let _currentState = {};

    let states = {
        jump(){
            console.log('jump');
        },
        move(){
            console.log('move');
        },
        shoot(){
            console.log('shoot');
        }
    }

    let Action  = {
        changeState(){
            let arg = arguments;
            // 每次添加动作时清楚上一次保存的动作
            _currentState = {};
            if(arg.length){
                for (let index = 0; index < arg.length; index++) {
                    _currentState[arg[index]] = true;
                    console.warn(arg[index]);
                }
            }
            return this;   
        },
        goes(){
            console.log("触发动作");
            for(let i in _currentState){
                states[i] && states[i]();
            }
            return this;
        }
    }

    return {
        change:Action.changeState,
        goes:Action.goes
    }
}


MState().change('jump','shoot').goes().change('shoot').goes();
