import { Card, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CreateNoteTextField = ({ clickHandler }) => {
  return (
    <Box
      sx={{
        width: {
          sm: "90%",
          md: "60%",
        },
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 2,
      }}
    >
      <Card elevation={2}>
        <TextField
          fullWidth
          id="fullWidth"
          placeholder="Utwórz notatkę..."
          onClick={clickHandler}
          variant="outlined"
        />
      </Card>
    </Box>
  );
};

export default CreateNoteTextField;
