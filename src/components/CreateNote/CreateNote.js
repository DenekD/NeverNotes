import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  Chip,
  ClickAwayListener,
  Stack,
  TextField,
} from "@mui/material";

import { Box } from "@mui/system";

// import { blueGrey, cyan, green, purple } from "@mui/material/colors";
// import { ThemeProvider } from "@mui/private-theming";

export const CreateNote = ({ closeHandler }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("todos");

  return (
    <ClickAwayListener
      onClickAway={() => closeHandler(title, content, category)}
    >
      <Box
        sx={{
          display: "inline-block",
          minHeight: 150,
          width: {
            sm: "90%",
            md: "60%",
          },
          mx: "auto",
          mb: 2,
        }}
      >
        <Card elevation={2}>
          <Box sx={{ p: 1 }}>
            <TextField
              fullWidth
              id="fullWidth"
              placeholder="Tytuł"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              variant="outlined"
              sx={{ mb: 1 }}
            />

            <TextField
              fullWidth
              // label="fullWidth"
              id="fullWidth"
              placeholder="Utwórz notatkę..."
              value={content}
              variant="outlined"
              onChange={(e) => setContent(e.target.value)}
              multiline
              rows={3}
            />
          </Box>

          <CardActions>
            <Stack direction="row" spacing={1} sx={{ mr: "auto" }}>
              <Chip
                label="todos"
                variant={category === "todos" ? "filled" : "outlined"}
                onClick={() => setCategory("todos")}
              />
              <Chip
                label="work"
                variant={category === "work" ? "filled" : "outlined"}
                onClick={() => setCategory("work")}
              />
              <Chip
                label="money"
                variant={category === "money" ? "filled" : "outlined"}
                onClick={() => setCategory("money")}
              />
            </Stack>

            <Button
              onClick={() => closeHandler(title, content, category)}
              variant="text"
            >
              Zamknij
            </Button>
          </CardActions>
        </Card>
      </Box>
    </ClickAwayListener>
  );
};

export default CreateNote;
