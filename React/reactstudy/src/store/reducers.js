export let num = function(state=0,action){
    switch (action.type){
        case "ADDNUM":
            return state+action.value;
        default:
            return state;    
    }
}