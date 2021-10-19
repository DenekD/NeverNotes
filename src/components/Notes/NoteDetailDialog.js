import { useCallback, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { updateNote } from "../../store/actions/notesActions";

export default function AlertDialog({ open, handleClose, details }) {
  const [contentText, setContentText] = useState(details.content);
  const dispatch = useDispatch();

  useEffect(() => {
    setContentText(details.content);
  }, [details.content]);

  //debounce, update kiedy przestaniemy pisac przez 900ms, ale takze za pierwszym razem
  useEffect(() => {
    const timerID = setTimeout(() => {
      dispatch(updateNote(details.id, contentText, details.sharedWith));
    }, 900);

    return () => clearTimeout(timerID);
  }, [contentText, dispatch, details.id]);

  const contentTextHandler = (e) => {
    setContentText(e.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ display: "flex" }}>
          <Typography variant="p" sx={{ flexGrow: 1 }}>
            {details.title}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            value={contentText}
            variant="standard"
            fullWidth
            onChange={contentTextHandler}
          />
          {/* <DialogContentText id="alert-dialog-description">
            {details.content}
          </DialogContentText> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
