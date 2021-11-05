import React, { useState } from "react";

import { DeleteOutlined } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { blue, green, pink, yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles({
  avatar: {
    color: (note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      if (note.category === "money") {
        return green[500];
      }
      if (note.category === "todos") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

export default function NoteCard({
  note,
  onDelete,
  handleClickOpen,
  handleClickOpenCoopDialog,
}) {
  const classes = useStyles(note);
  const [cardElevation, setCardElevation] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const theme = useTheme();
  const isOpen = useMediaQuery(theme.breakpoints.up("sm"));

  const showIcons = !isOpen || isHover;

  return (
    <Card
      elevation={cardElevation}
      onMouseEnter={() => {
        setCardElevation(1);
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setCardElevation(0);
        setIsHover(false);
      }}
      sx={{
        minHeight: 200,
        border: "1px #E0E0E0 solid",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <Box
        onClick={() =>
          handleClickOpen({
            title: note.title,
            content: note.content,
            id: note.id,
            sharedWith: note.sharedWith,
          })
        }
        sx={{ cursor: "pointer", flexGrow: 1 }}
      >
        <CardHeader
          title={note.title}
          // titleTypographyProps={{ variant: "h5" }}
          subheader={note.sharedWith && `współpraca z ${note.sharedWith}`}
          subheaderTypographyProps={{ variant: "subtitle2" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body2" color={"text.secondary"}>
            {note.content}
          </Typography>
        </CardContent>
      </Box>

      {showIcons && (
        <CardActions>
          <Chip
            label={note.category}
            variant="outlined"
            className={classes.avatar}
            sx={{ mr: "auto" }}
          />
          {!note.sharedWith && (
            <Tooltip title="dodaj współpracownika">
              <IconButton onClick={() => handleClickOpenCoopDialog(note)}>
                <PersonAddIcon />
              </IconButton>
            </Tooltip>
          )}

          <Tooltip title="usuń">
            <IconButton onClick={() => onDelete(note.id, note.sharedWith)}>
              <DeleteOutlined />
            </IconButton>
          </Tooltip>
        </CardActions>
      )}
    </Card>
  );
}
