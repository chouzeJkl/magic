### redux

#### 三大原则
1 单一数据源
2 state只读
3 reducer纯函数执行修改

redux是基于flux架构的一种实现，它在流程基本上与flux一致，都是单向数据流向，通过view的事件或者router去dispatch派发定义好的action到reducer中去改变state，这里的state存在于唯一的数据源store中，在reducer中修改state数据，返回的是新的对象，而不是修改原对象。

#### redux的概念
1 state: state是只读的， reducer中返回的是一个新的对象。
2 action: 是一个对象，必须要有type属性标记要做的事情。
3 reducer: 是一个纯函数，接收一个当前的state和action作为参数，然后返回一个新的state。
4 dispatch: 推送action到reducer。
5 action creater: action生成器，返回一个action对象。
6 createStore: 函数，接收一个reducer返回store，还可以接收第二个参数，表示state的最初状态。
7 store: 

```
const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState= () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    dispatch({});
    return { getState, dispatch, subscribe };
}
```