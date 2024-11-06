import { Box, Button, Container, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

const AddTodoComp = () => {
  // const [text,setText] = useState<string>("")
  const [text,setText] = useState("")

  const handleClick= () => {
    console.log(text)
    setText("")
  }
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
        <TextField
          id="outlined-basic"
          label="New Todo"
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          variant="outlined"
          value={text}
          onChange={e=>setText(e.target.value)}
          inputProps={{ maxLength: 40  }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          disabled={!text.trim()}
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          endIcon={<SaveIcon />}
        >
          Save Todo
        </Button>
      </Box>
    </Container>
  );
};

export default AddTodoComp;
