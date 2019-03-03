import React from "react"

export function Param({match}){
    return (
        <div>
            <h1>获取url 路径参数</h1>
            <h1>路径参数是：{match.params.id}</h1>
        </div>
    )
}

export function Notpage(){
    return (
        <div>
            <h1 onClick={()=>window.history.go(-1)}>not found this page:{window.location.pathname}</h1>
        </div>
    )
}