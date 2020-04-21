export const todoInputHandler = (text) => {
    return{
        type: "ON_CHANGE_TODO_INPUT",
        payload: text
    }
}

export const todoClickHandler = (todoItem) => {
    return{
        type: "ON_CHANGE_TODO_CLICK",
        payload: todoItem
    }
}