import { Grid2, Typography } from "@mui/material";

const TodoList = () => {
  return (
    <Grid2
      container
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Grid2
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
      </Grid2>
      <Grid2
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
      </Grid2>
    </Grid2>
  );
};

export default TodoList;
