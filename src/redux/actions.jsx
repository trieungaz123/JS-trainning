export const addToDo = (payload) => {
    return {
        type: 'todoList/AddTask',
        payload: payload
    };
};
export const filterTasks = (payload) => {
    return {
        type: 'todoList/FilterTask',
        payload: payload
    };
};


export const setChecked = (payload) => {
    return {
        type: 'todoList/CheckedTask',
        payload: payload
    };
};
