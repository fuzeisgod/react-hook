// 用于展示未办数量

import React from 'react'

// useSelector 是 react-redux 包提供的 hooks
import { useSelector } from 'react-redux'

function getUncompleteCount(todos) {
    return todos.filter(item => !item.isComplete).length
}

export default function TodoHeader() {

    // useSelector接受两个参数：
    // 第一个函数是将返回值作为 useSelector 的返回值，并自动处理好订阅，当派发动作时会自动触发组件的渲染
    let state = useSelector((state) => ({ todos: state.todos }))

    // useSelector 可以返回任意类型的值，当动作派发时，useSelector 会将当前值与上一次进行比较，如果相比不同，则触发渲染
    // useSelector 可以多次调用，react-redux 会将多次 useSelctor 批量更新，只会渲染一次

    return (
        <div>
            你有{getUncompleteCount(state.todos)}条未完成
        </div>
    )
}
