### CSS三角形绘制的几种方法
### 1.border
使用border可以绘制三角形只要设置content的width和height为0，然后设置border的宽度。
```
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
```
### 2.使用伪类
```
.triangle:after {
    display:block;
    content:"\25B2";
    color:"#fd5353";
    font-size:20px;
}
```