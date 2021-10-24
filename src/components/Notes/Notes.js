import React, { Fragment } from "react";
import { Container, Fab } from "@mui/material";
import Masonry from "react-masonry-css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NoteCard from "./NoteCard";
import ScrollTop from "./ScrollTop";
import { useDispatch } from "react-redux";
import { deleteNote, shareNote } from "../../store/actions/notesActions";
import NoteDetailDialog from "./NoteDetailDialog";
import EmailCoopDialog from "./EmailCoopDialog";

export default function Notes({ notes, sharedNotes }) {
  const dispatch = useDispatch();

  // Detail Dailog
  const [openDetailDialog, setOpenDetailDialog] = React.useState(false);
  const [dialogDetails, setDialogDetails] = React.useState({});

  const handleClickOpenDetailDialog = (details) => {
    setOpenDetailDialog(true);
    setDialogDetails(details);
  };

  const handleCloseDetailDialog = () => {
    setOpenDetailDialog(false);
    setDialogDetails({});
  };

  //Cooperation dialog

  const [openCoopDialog, setOpenCoopDialog] = React.useState(false);
  const [sharingNote, setSharingNote] = React.useState(0);

  const handleClickOpenCoopDialog = (note) => {
    setOpenCoopDialog(true);
    setSharingNote(note);
  };

  const handleCloseCoopDialog = (email) => {
    setOpenCoopDialog(false);
  };

  const handleEnterEmail = (email) => {
    dispatch(shareNote(sharingNote, email));
    setOpenCoopDialog(false);
  };

  // delete & edit note

  const handleDeleteNote = async (id, isShared) => {
    dispatch(deleteNote(id, isShared));
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
                  onDelete={handleDeleteNote}
                  handleClickOpen={handleClickOpenDetailDialog}
                  handleClickOpenCoopDialog={handleClickOpenCoopDialog}
                />
              </div>
            ))}

          {sharedNotes &&
            sharedNotes.map((note) => (
              <div key={note.id}>
                <NoteCard
                  note={note}
                  onDelete={handleDeleteNote}
                  handleClickOpen={handleClickOpenDetailDialog}
                  handleClickOpenCoopDialog={handleClickOpenCoopDialog}
                />
              </div>
            ))}
        </Masonry>
        <NoteDetailDialog
          handleClose={handleCloseDetailDialog}
          open={openDetailDialog}
          details={dialogDetails}
        />
        <EmailCoopDialog
          open={openCoopDialog}
          handleClose={handleCloseCoopDialog}
          handleEnter={handleEnterEmail}
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
