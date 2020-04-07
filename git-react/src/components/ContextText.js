import React, { Component } from 'react'

/*
**
 在Context模式下会有两个角色

 Provider: 外层提供数据的组件
 Consumer: 内层获取数据的组件

*/

/*
    使用 Context => 获取 Provider 和 Consumer => Provider提供值 => Consumer 消费值
    模拟redux存放全局状态 在组件间共享

*/

//1.创建上下文
const Context = React.createContext();

//2. 获取Provider和Consumer 

const Provider = Context.Provider;
const Consumer = Context.Consumer;

//withConsumer高阶组件 ，它根据配置返回一个高阶组件

// function withConsumer(Consumer) {
//     return Comp => props => {
//         return <Consumer >{value=><Comp {...value} />}</Consumer>
//     }
// }

//经过withConsumer(Consumer)返回的高阶组件包装，Child获得了上下文的值
// const Child = withConsumer(Consumer)(function Child(props) {
//     return (<div onClick={()=>props.add()}>{props.counter}</div>)
//     })

function Child(props) {
return (<div onClick={()=>props.add()}>{props.counter}</div>)
}

 
export default class ContextText extends React.Component {
    state ={
        counter: 0,
    }
    add =() => {
        this.setState({
            counter: this.state.counter+1
        })
    }
 render () {
    return (
        <Provider value={{ counter: this.state.counter, add: this.add }}>
            {/* <Child /> */}
            <Consumer >
                {value=><Child {...value} />}
            </Consumer>
            <Consumer >
                {value=><Child {...value} />}
            </Consumer>
            <Consumer >
                {value=><Child {...value} />}
            </Consumer>
        </Provider>
     )
 }
}
