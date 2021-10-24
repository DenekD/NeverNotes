import { Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material/";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createNote } from "../store/actions/notesActions";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState();
  const [contentError, setContentError] = useState();
  const [category, setCategory] = useState("todos");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setContentError(false);
    setTitleError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (content === "") {
      setContentError(true);
    }
    if (title && content) {
      dispatch(createNote({ title, content, category }));
      history.push("/");
    }
  };

  return (
    <Container>
      <Typography variant="h4" color="secondary" align="center" gutterBottom>
        Create Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          // sx={{ mb: 2 }}
          margin="normal"
          required
          fullWidth
          variant="outlined"
          label="Note Tilte"
          color="secondary"
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          // sx={{ mb: 2 }}
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
          color="info"
          variant="outlined"
          label="Note Tilte"
          onChange={(e) => setContent(e.target.value)}
          error={contentError}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="success"
          endIcon={<KeyboardArrowRightIcon />}
          // startIcon={<KeyboardArrowRightIcon />}
        >
          Dodaj notatkę
        </Button>
      </form>

      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Category</FormLabel>
        <RadioGroup
          defaultValue="todos"
          name="radio-buttons-group"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
          <FormControlLabel value="money" control={<Radio />} label="Money" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
