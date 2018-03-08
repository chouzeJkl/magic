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
### 3.transform rotate 

```
.triangle {
    width: 30%;
    padding-bottom: 21.27%;
    position: relative;
    overflow:hidden;
}

.triangle: before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0079C6;
    transform-origin: 0 100%;        
    transform: rotate(45deg);
}
```

### 4.clip-path

```
.triangle {
    width:200px;
    height:200px;
    background:#fd5353;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
}
```