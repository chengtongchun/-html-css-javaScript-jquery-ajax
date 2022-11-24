## generator生成器

   就是根据前面的元素推断后面的元素，一边循环一边计算的机制叫generator
   生成器跟函数很像但可以返回多次

```js
function* fn(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
let f=fn(2);
log(f.next());
log(f.next());
```

 普通函数f n(2) 马上执行 生成器函数不会
      yield表达式是暂停执行next()恢复执行，yield只能用生成器中用
 生成器中调用生成器     

```javascript
function* foo() {
    yield 'aaa';
    yield 'bbb';
}
function* bar() {
    yield* foo();      // 在bar函数中执行foo函数
    yield 'ccc';
    yield 'ddd';
}
let it= bar();
for(let value of it){
    console.log(value)
}
```

面试题

```javascript
function* gen(x) {
    let y = 2 * (yield (x + 1)) 
    let z = yield (y / 3)
    return x + y + z
}
let it = gen(5)
console.log(it.next());  
console.log(it.next());   
console.log(it.next());
```

应用

1. 抽奖

   ```javascript
   function draw(count) {
       console.log(`剩余${count}次`)
   }
   function* remain(count) {
       while (count > 0) {
           count--
           yield draw(count)
       }
   }
   let startDrawing = remain(6)
   btn.onclick=function () {
       startDrawing.next()
   }
   ```

   作业：
   
      1.下列代码输出什么
   
         ```javasc
   function* gen(x) {
       let y = 2 * (yield (x + 1)) 
       let z = yield (y / 3)
       return x + y + z
   }
   let it = gen(6)
   console.log(it.next());  
   console.log(it.next(2));   
   console.log(it.next());
         ```
   
   2.写抽奖代码
   
   ​    显示在div中