import { DeleteOutlined } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { blue, green, pink, yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box, styled } from "@mui/system";

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

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {},
});

export default function NoteCard({
  note,
  onDelete,
  handleClickOpen,
  handleClickOpenCoopDialog,
}) {
  const classes = useStyles(note);
  return (
    <Card elevation={2}>
      <Box
        onClick={() =>
          handleClickOpen({
            title: note.title,
            content: note.content,
            id: note.id,
            sharedWith: note.sharedWith,
          })
        }
        sx={{ cursor: "pointer" }}
      >
        <CardHeader
          title={note.title}
          // titleTypographyProps={{ variant: "h5" }}
          subheader={note.sharedWith && `współpraca z ${note.sharedWith}`}
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" color={"text.secondary"}>
            {note.content}
          </Typography>
        </CardContent>
      </Box>
      <Divider />
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
    </Card>
  );
}
