### state和prop比较

#### 1 state

state代表组件的内部状态，由于props不能修改，所以需要修改数据，就要使用state。

state是一个JavaScript对象，在state对象里面定义我们需要变化数据的字段，无需向props定义数据的类型。

##### 读取和更新state
更新state值需要使用setState方法
```
handleClick = (e) => {
    this.setState({ count: e.target.value });
}
```
#### 2 prop

prop是外部传递给组件的值，在组件中需要指定prop的数据类型和是否需要传值，不必传值需要指定默认值

```
static propTypes = {
    query: PropTypes.object,
    form: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
    onFilterChange: PropTypes.func.isRequired,
}
static defalutProps = {
    query: null,
}
```

#### 区别

1 state记录组件内部的变化，prop传递外部数据
2 state可修改，prop只读
3 state定义在组件内部， prop定义在外部

