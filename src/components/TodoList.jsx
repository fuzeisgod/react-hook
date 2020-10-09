// 按条件展示待办项列表及添加待办

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_COMPLETE } from '../store/action/type'

export default function TodoList() {

    let state = useSelector((state) => state)
    // 取得派发方法 dispatch()

    // 使用 redux 时 更新仓库的唯一方法就是使用派发方法 dispatch 来派发一个动作。
    // useDispatch 返回一个 redux 库的 dispatch 方法引用。
    let dispatch = useDispatch()

    function renderList(todos) {
        return todos.map((item, index) => {
            if (item.isComplete) {
                return <li key={index}>
                    <input type="checkbox" data-id={item.id} checked={true} onChange={itemChange} />
                    <del>{item.title}</del>
                </li>
            } else {
                return <li key={index}>
                    <input type="checkbox" data-id={item.id} checked={false} onChange={itemChange}/>
                    <span>{item.title}</span>
                </li>
            }
        })
    }

    function itemChange(e) {
        const { target } = e;
        // 派发 TOGGLE_COMPLETE 动作更新仓库
        dispatch({
            type: TOGGLE_COMPLETE,
            payload: {
                id: target.dataset.id,
                isComplete: target.checked
            }
        })
    }

    return (
        <div>
            {renderList(state.todos)}
        </div>
    )
}
