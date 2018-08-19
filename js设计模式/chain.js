//职责链模式
//概念：解决请求的发送者与请求的接收者之间的耦合，通过职责链上的多个对象分解流程，
//实现请求在多个对象之间传递，直到最后一个对象完成请求的处理
//示例1 AJAX请求分解
let sendData = function(data,dealType,dom){
    let xhr = new XMLHttpRequest(),
    url = 'localhost:8080/';
    xhr.open(url);
    xhr.onload = function(event){
        if(xhr.status >=200 && xhr.status < 300 || xhr.status === 304 ){
            dealData(xhr.responseText,dealType,dom);
        }else{
            console.log('请求失败')
        }
    }
    // xhr.onprogress = (event)=>{
    //     console.log(event.loaded,event.total);
    // }
    xhr.send(null)
}