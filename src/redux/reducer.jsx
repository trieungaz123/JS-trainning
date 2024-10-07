const initState = {
    filters: {
        search: null,
        status: 'All',
        priority: [],
    },
    todoList: [
        { id: 1, name: 'Learn React', priority: 'High', completed: false },
        { id: 2, name: 'Learn Redux', priority: 'Medium', completed: false },
        { id: 3, name: 'Learn JavaScript', priority: 'Low', completed: false }
    ]

};

const rootReducer = (state = initState, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'todoList/AddTask':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload,
                ]
            };
        case 'todoList/FilterTask':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload,
                }
            };
        case 'todoList/CheckedTask':
            console.log("Current todoList:", state.todoList);
            return {
                ...state,
                todoList: state.todoList.map(task =>
                    task.id === action.payload.id
                        ? { ...task, completed: action.payload.checked }
                        : task
                ),
            };
        default: return state;
    }
};

export default rootReducer;
