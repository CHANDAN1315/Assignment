import { useState } from "react";


function Todo() {
   const [todos, setTodos] = useState([]);
   const [todo, setTodo] = useState("");
   const [doneTodo, setDoneTodo] = useState([]);

   const addTodo = () => {
      if (todo !== "") {
         setTodos([...todos, todo]);
         setTodo("");
      }
   };

   const deleteTodo = (text) => {
      setDoneTodo([...doneTodo, text]);
      // used filter method to find the data that we dont want and remove it and update the new data.
      const newTodos = todos.filter((todo) => {
         return todo !== text;
      });
      setTodos(newTodos);
   };

   return (
      <div className="App">
         <h1>React Todo App</h1>
         <div className="input-wrapper">
            <input
               type="text"
               name="todo"
               value={todo}
               placeholder="Create a new todo"
               onChange={(e) => {
                  setTodo(e.target.value);
               }}
            />
            <button className="add-button" onClick={addTodo}>
               Add
            </button>
         </div>

         <ul className="todo-list">
            {todos.map((todo) => (

               <li className="listItme" key={todo}>
                  <div className="">{todo}</div>
                  <button className="delete-button" onClick={() => deleteTodo(todo)}>
                     Delete
                  </button>
               </li>
            ))}
         </ul>
         
         <ul className="todo-list">
            {doneTodo.map((todo) => (
               <li className="doneTodo" key={todo}>
                  <del className="">{todo}</del>
               </li>
            ))}
         </ul>
      </div>


   );
}

export default Todo;