### 什么是JSX
JSX 是一种JavaScript的语法扩展，看起来比较像模板语言，像是在js中编写HTML，但是事实上它是完全在JavaScript内部实现的。
```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
我们书写 JSX 的时候一般都会带上换行和缩进，这样可以增强代码的可读性。与此同时，我们同样推荐在 JSX 代码的外面扩上一个小括号，这样可以防止 分号自动插入 的bug.

### JSX 本身其实也是一种表达式

经过babel的编译之后，jsx会被转化成普通的JavaScript对象，这也就是说可以在JavaScript进行赋值传参返回值的操作
```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
### JSX 代表 Objects
Babel 转译器会把 JSX 转换成一个名为 React.createElement() 的方法调用。
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
至于jsx的语法，基本上和HTML的类似，可以内部编写事件和样式。
但是jsx的元素不局限于HTML中的元素，而是可以使任何一个react的组件，可以使用原生的HTML元素组合出我们所需要的react组件。
判断是HTML元素还是react组件的原则是看第一个字母是否大写。
### JSX进步还是退步
从传统的角度来说HTML编写页面的结构，CSS控制样式，JavaScript负责行为，一个页面应该是由这三种语言分开去完成的，而JSX可以将这三者放在一个文件里进行编写，变成一个高耦合的开发形式。
