import { TOGGLE_COMPLETE } from '../action/type'

let initState = {
    todos: [
        {
            id: 1,
            title: '学习 react',
            isComplete: true
        },
        {
            id: 2,
            title: '学习 node',
            isComplete: false
        },
        {
            id: 3,
            title: '学习 hooks',
            isComplete: false
        }
    ]
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case TOGGLE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id == action.payload.id) {
                        return {
                            ...item,
                            isComplete: action.payload.isComplete
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}