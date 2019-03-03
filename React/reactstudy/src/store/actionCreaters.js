import TYPES from "./actionTypes";

export let addNum = function(value){
    return {
        type:TYPES.ADD_NUM,
        value
    }
}