import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";
import React from "react";
interface ITodoList {
  todos: TodoType[];
  deleteTodo:DeleteFn
  toggleTodo:ToggleFn
}
const TodoList:React.FC<ITodoList> = ({todos, toggleTodo, deleteTodo}) => {
  const progressTodos = todos.filter(item => !item.isDone)
  const completedTodos = todos.filter(item => !item.isDone)
  return (
    <Grid
      container 
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography color="secondary" align="center" variant="h4">
          InProgress Todos
        </Typography>
        {progressTodos.length ? ( progressTodos.map(todo => <TodoListItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)): (
          <Typography color="error" mt={3}>
            No progress todos!{""}
          </Typography>
        )}
      
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography color="success" align="center" variant="h4">
          Completed Todos
        </Typography>
        {completedTodos.length ? ( completedTodos.map(todo => <TodoListItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)): (
          <Typography color="error" mt={3}>
            No completed todos!{""}
          </Typography>
        )}
     
      </Grid>
    </Grid>
  );
};

export default TodoList;
