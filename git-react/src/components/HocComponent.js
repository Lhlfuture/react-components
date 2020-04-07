import React from 'react'

/*
高阶组件: 
 为了提高组件复用率，可测试性，就要保证组件功能单一性但是如要满足复杂需求
 就要扩展功能单一的组件，在React里就有了HOC（Height-order Component）的
 概念，高阶组件就是一个工厂函数，它接受一个组件并返回另外一个组件。

*/

// 例如：为组件添加获取数据的能力


//Leason 保证功能单一 它不关心数据来源 只是负责展示

function Lesson(props) {
    return (
    <div>{props.stage} {props.title}</div>
    )
}

// 模拟数据

const lessons = [
{stage: 'React', title: '组件一'},
{stage: 'React', title: '组件二'},
{stage: 'React', title: '组件三'},
]

// 定义高阶组件 withContent
//包裹后的组件传入参数，根据改参数获取显示数据
const withContent = Comp => props => {
    const content = lessons[props.idx];
    return <Comp {...content} />;
}

/*
    function withContent(Comp) {
        return function(props) {
           const content = lessons[props.idx];
           return <Comp {...content} />;
        }
    }

*/

// withLog高阶组件 能够在组件挂载时输出日志

const withLog =Comp => {
    return class extends React.Component {
        componentDidMount() {
            console.log('我是挂载时候输入的日志', this.props)
        }
        render () {
            return <Comp {...this.props}></Comp>
        }
    }
}

//包裹      //高阶组件可以链式调用
const LessonWithContent = withLog(withContent(Lesson));

export default function HocComponent() {
    return (
        <div>
            {[0,0,0].map((item,idx)=>(
                <LessonWithContent key={idx} idx={idx} />
            ))}
        </div>
    )
}
