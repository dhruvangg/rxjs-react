import { Subject } from "rxjs";

const subject = new Subject();
const initialState = []
let state = initialState;

const noteStore = {
    init: () => {
        state = [...state]
        subject.next(state)
    },
    subscribe: setState => subject.subscribe(setState),
    addTodo: (data) => {
        state = [
            ...state,
            { id: Date.now(), text: data, completed: false }
        ]
        subject.next(state);
    },
    removeTodo: (id) => {
        state = state.filter(todo => todo.id !== id)
        subject.next(state)
    },
    initialState
}

export default noteStore;
 