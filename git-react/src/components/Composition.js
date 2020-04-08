import React from 'react'


//Dialog 定义组件外观和行为

//（默认插槽）
// function Dialog(props) {
//     //这里props.children就代表啦标签内部的内容
//     //children 是什么 合法的js表达式
//     return (
//     <div>{props.children}</div>
//     )
// }



// 具名插槽
// function Dialog (props){
// return (
//     <div>
//         {props.children.def}
//         <p>.....</p>
//         {props.children.footer}
//     </div>
// )
// }

//作用域插槽

// function Dialog (props){
//     const messages = {
//         foo: {title:'foo',content: 'foo!!!!!!!!'},
//         bar: {title:'bar',content: 'bar!!!!!!!!'}
//     }
//     console.log(messages[props.msg])

//     const { def, footer } = props.children(messages[props.msg])


// return (
//     <div>
//         {def}
//         {footer}
//     </div>
// )
// }


// 如果 props.children 是jsx 它是只读的。

// 实现 RedioGroup 和 Radio组件 通过RadioGroup 设置 Radio的name

function RadioGroup(props) {
    return (
        <div>
            {React.Children.map(props.children,radio=>{
                //要修改虚拟dom 只能克隆它
                // 参数1 是克隆对象
                // 参数2 设置的是属性
                return React.cloneElement(radio, {name: props.name})
            })}
        </div>
    )
}

function Radio ({children, ...rest}) {
    return (
        <label>
            <input type="radio"  {...rest}/>
            {children}
        </label>
    )
}




export default function Composition() {
    // return (
    //     <div>
    //         <Dialog>
    //             <h1>组件复合</h1>     
    //             <p>我是footer</p>
    //         </Dialog>
    //     </div>
    // )

    // return (
    //     <div>
    //         <Dialog>
    //             {{
    //                 def:(
    //                 <>
    //                     <h1>组件复合</h1>
    //                     <p>复合组件给与你足够的敏捷去定义自定义组件的外观和行为</p>
    //                 </>
    //                 ),
    //                 footer:<button onClick={()=>{alert('学习react')}}>确定</button>
    //             }}
    //         </Dialog>
    //     </div>
    // )



    return (
        <div>
            {/* <Dialog msg="foo">
                {({title,content})=>({
                    def:(
                    <>
                        <h1>{title}</h1>
                         <p>{content}</p>
                    </>
                    ),
                    footer:<button onClick={()=>{alert('学习react')}}>确定</button>
                })}
            </Dialog> */}

            <RadioGroup name="mvvm">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="node">node</Radio>
            </RadioGroup>

            {/* <div><input type="radio" name="mvvm">vue< /input></div> */}
        </div>
    )
}

