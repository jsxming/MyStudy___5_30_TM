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
fn2.show(3)
