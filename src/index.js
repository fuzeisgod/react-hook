import React from 'react'
import { render } from 'react-dom'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import { Provider } from 'react-redux'
import store from './store'

function Index(props) {
    return (
        <>
            <Provider store={store}>
                <TodoHeader />
                <TodoList />
            </Provider>
        </>
    )
}

render(<Index />, document.querySelector('#root'))