importScripts("js20220805Web Workers(裴波那契).js");//插入js
onmessage=function(ev){//接受worker发送的消息
    let ret=fib(ev.data);//调用js20200805Web Workers(裴波那契)的fib函数计算裴波那契
    this.postMessage(ret);//把计算结果发回去
    this.close();//this.close();//关闭自己
}