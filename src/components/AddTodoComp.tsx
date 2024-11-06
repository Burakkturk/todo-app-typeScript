import { Box, Container, TextField } from "@mui/material";

const AddTodoComp = () => {
  return (
    <Container>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "flex",
            justifyContent: "center",
            m: { xs: 4, sm: "auto" },
            height: { xs: "120px", sm: "80px" },
          },
        }}
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </Container>
  );
};

export default AddTodoComp;
