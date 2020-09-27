/**
 * State Hook
 */
// import React, { useState } from 'react';

// function App() {
//   // useState()
//   // 1. 方法里面唯一的参数就是初始state
//   // 2. 返回值为 当前state 和 更新 state 的函数
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={() => {
//         // 3. 更新 state 的函数接受一个新值来更新 state
//         setCount(count + 1)
//       }}>click me</button>
//     </div>
//   );
// }

// export default App;


/**
 * Effect Hook
 */
import React, {useState, useEffect} from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  
  // 类似 componentDidMount 和 componentDidUpdate
  // 告诉 React 组件需要在渲染后（包括第一次渲染和每次更新）执行某些操作
  // 在组件内部调用 useEffect 可以直接调用组件的 state 和 props 变量
  // 每个 effect 都可以返回一个清除函数
  useEffect(() => {
    document.title = `you click ${count} times`
  })
  
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>click me</button>
    </div>
  )
}

