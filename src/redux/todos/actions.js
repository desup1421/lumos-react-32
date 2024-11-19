export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO ='TOGGLE_TODO';
export const UPDATE_TODO ='UPDATE_TODO';
export const GET_TODO = 'GET_TODO';


// action creator
export const addTodo = (todo) => ({type: ADD_TODO, payload: todo}); //Sent object to post on list
export const deleteTodo = (id) => ({type: DELETE_TODO, payload: id}); // sent only id to make sure delete the right list (used in filter() in the reducer)
export const toggleTodo = (id) => ({type: TOGGLE_TODO, payload: id}); // sent only id to make sure toggle the right list (use in map() in ther reducer)
export const updateTodo = (data) => ({type: UPDATE_TODO, payload: data}); //sent data (updated data)
export const getTodo = (data) => ({type: GET_TODO, payload: data}); //send data (only id is used). Used for get data which is will be updated in updateTodo()