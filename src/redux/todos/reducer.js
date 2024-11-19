import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, GET_TODO } from "./actions"

//state
const initialState = {
  // todos is list of todos
  todos: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do List", completed: false },
    { id: 3, text: "Celebrate", completed: false },
  ],
  //todo is an object that selected from getTodo action
  todo : {}
};


//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload), //Filter, so only todo with id that not sane as todo's id which is deleted will be added
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo //map, so todo will be coppied if todo.id not same as id from payload (selected todo), and change completed: to oposite of the original whne todo.id is the choosen id (from payload)
        )
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => 
          todo.id === action.payload.id ? action.payload : todo //same as toggle, the different is data from payload is already updated, so just copy the other todos, and change the selected todos with new value from payload.
        ),
        todo: {} //make todo to an empty object, because if it is not empty will trigger edit in form TodoInput.
      }
    case GET_TODO:
      return {
        ...state,
        todo: action.payload //Insert data from payload into todo (different from todos)
      }
    default:
      return state;
  }
};

export default todoReducer;