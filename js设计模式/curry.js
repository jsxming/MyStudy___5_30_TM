function log(...arg){
console.warn(...arg);
}
let curry = function(fn){
    let Slice =[].slice;
    let args = Slice.call(arguments,1);
    log("args:",args);
    return function(){
        let addArgs = Slice.call(arguments);
        log("addArds:",addArgs);
        let AllArgs =args.concat(addArgs);
        log(fn.apply(null,AllArgs),"0----");
        return fn.apply(null,AllArgs);
    }
}


function add(a,b){
    return a+b;
}

function add2(num){
    return add(5,num);
}


let test = curry(add,1,2,3,4,5,6,7,8,9,10);


log(test(10));