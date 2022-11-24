//引入express包
const express=require('express');
//实例化
const app=express();

//servlet doget dopost
app.get("/get",function(request,response){
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send("..get....ok");
})
app.post("/post",function(request,response){
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send("..post...ok");
})

app.listen((5500),()=>{
    console.log("服务器启动在5500端口")
})