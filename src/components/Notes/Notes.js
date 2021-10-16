import { Container, Fab } from "@mui/material";

import React, { Fragment } from "react";
import Masonry from "react-masonry-css";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NoteCard from "./NoteCard";
import ScrollTop from "./ScrollTop";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../store/actions/notesActions";
import NoteDetailDialog from "./NoteDetailDialog";

export default function Notes({ notes }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [dialogDetails, setDialogDetails] = React.useState({});

  const handleClickOpen = (details) => {
    setOpen(true);
    setDialogDetails(details);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogDetails({});
  };

  const handleDelete = async (id) => {
    dispatch(deleteNote(id));
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Fragment>
      <Container>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {notes &&
            notes.map((note) => (
              <div key={note.id}>
                <NoteCard
                  note={note}
                  onDelete={handleDelete}
                  handleClickOpen={handleClickOpen}
                />
              </div>
            ))}
        </Masonry>
        <NoteDetailDialog
          handleClose={handleClose}
          open={open}
          details={dialogDetails}
        />
      </Container>
      <ScrollTop>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Fragment>
  );
}
