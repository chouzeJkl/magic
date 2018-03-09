## react组件

### 组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件
组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。

### 函数定义/类定义组件
使用函数定义
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

``` 
类定义
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 组件渲染

上面我们定义了一个组件,下面使用react将组件渲染到视图中

```
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
这里使用ReactDOM.render方法将我们自己定义的组件渲染成HTML标签代码，然后挂载到HTML的root节点，让浏览器进行渲染。
注意：组件名称必须以大写字母开头。

### 组件组合
我们可以自定义自己的组件，那么多个自己定义的组件向HTML的标签一样也是可以嵌套的，只是需要用一个根元素去包裹这些组件。

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
组件化的做法使我们在一些需要重复使用的地方不需要再编写同样的内容，简单直接的引入即可，大大提高了复用性。
