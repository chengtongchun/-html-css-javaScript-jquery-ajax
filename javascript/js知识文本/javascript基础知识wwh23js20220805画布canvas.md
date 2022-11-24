## 用canvas绘图

  <canvas>标签：在网页上绘制图形  默认大小300*150不能css中设置宽度和高度
  <canvas id="myCanvas" width="200" height="200"> 
      <p>你的浏览器不支持Canvas</p>
 < /canvas>



```javascript
  var ctx = cvs.getContext("2d");获取画布context（上下文）
   if (canvas.getContext)  //测试支持canvas吗
```

绘画流程：

-  告诉大家我要开始绘画了beginPath();
  - 确定要绘制的起点moveTo(200,50);
  - 画图lineTo(250,150);    lineTo(150,150);
  - 确定要绘制的终点closePath();
  -  确定画笔的样式lineWidth=30线宽  strokeStyle描边 fillStyle='color'填充
  -  开始描边stroke或者填色fill

颜色
       

```javascript
  ctx.fillStyle/strokeStyle = 'orange';
//'#FFA500';   'rgb(255, 165, 0)';   'rgba(255, 165, 0, 1)';
```

路径
      

```js
beginPath()//重置当前路径。它把当前的点设置为 (0,0)，风格重置
closePath();闭合线段
```

 画矩形

```js
fillRect(x, y, width, height)
strokeRect(x, y, width, height)
clearRect(x, y, width, height)
```

  画房子

```js
ctx.lineWidth = 10;
// 画墙
ctx.strokeRect(75, 140, 150, 110);
// 画门
ctx.fillRect(130, 190, 40, 60);
// 画屋顶
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
```

 文字

```js
ctx.font = '48px serif';
ctx.fillText('Hello world', 10, 50);
ctx.strokeText('Hello world', 10, 50);
let text = ctx.measureText('cjy');
console.log(text.width); 
```

线条

```js
线宽ctx.lineWidth = 15; 点划线ctx.setLineDash([5, 5]);
ctx.moveTo(20, 20);   ctx.lineTo(130, 130);
ctx.lineCap线段末端：butt(默认)平直边缘    "square"加正方形线帽   "round"加圆形线帽
ctx.lineJoin线段连接处：evel斜角  round圆角    miter(默认)尖角。
```

 画圆

```js
ctx.arc(x,y,r半径,起始角度,结束角度,true/false)true是逆时针画圆   
      1度=2 * Math.PI/360=Math.PI/180弧度
arcTo(cp1x, cp1y, cp2x, cp2y, radius)
```

   二次贝塞尔曲线

```js
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();
```

  渐变

```js
let gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'green');
gradient.addColorStop(.7, 'white');
gradient.addColorStop(1, 'pink');
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

 阴影

```js
ctx.shadowColor = 'red'; ctx.shadowOffsetX = 25; ctx.shadowBlur = 10;
ctx.fillStyle = 'blue';    ctx.fillRect(20, 20, 150, 100);
```

画布处理：

```js
scale(w,h) 缩放   rotate(angle)旋转  translate(x,y) 移动
ctx.beginPath();
ctx.translate(125,125);
ctx.rotate(45 * Math.PI /180);
ctx.translate(-50,-50);
ctx.fillStyle = "pink";
ctx.fillRect(0,0,100,100);
保存恢复画布状态 save()、restore()
```

