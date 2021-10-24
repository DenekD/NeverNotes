import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import Notes from "../components/Notes/Notes";
import CreateNote from "../components/CreateNote/CreateNote";
import CreateNoteTextField from "../components/CreateNote/CreateNoteTextField";
import { Box } from "@mui/system";
import { createNote } from "../store/actions/notesActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authorId = useSelector((state) => state.firebase.auth.uid);
  const authorEmail = useSelector((state) => state.firebase.auth.email);

  useFirestoreConnect([
    {
      collection: "notes",
      doc: authorId,
      subcollections: [{ collection: "notes" }],
      storeAs: "UserNotes",
      orderBy: ["createdAt", "desc"],
    },
  ]);

  useFirestoreConnect([
    {
      collection: "sharedNotes",
      doc: authorEmail,
      subcollections: [{ collection: "sharedNotes" }],
      storeAs: "NotesSharedByOtherUsers",
      // orderBy: ["createdAt", "desc"],
    },
  ]);

  const notesFromFrirebase = useSelector(
    (state) => state.firestore.ordered.UserNotes
  );
  const sharedNotes = useSelector(
    (state) => state.firestore.ordered.NotesSharedByOtherUsers
  );

  const [isClicked, setIsClicked] = React.useState(false);

  const openHandler = () => {
    setIsClicked(true);
  };

  const closeHandler = (title, content, category) => {
    setIsClicked(false);

    //if title is empty do nothing
    if (title !== "") {
      dispatch(createNote({ title, content, category }));
    }
  };

  console.log(isClicked);
  return (
    <Box sx={{ textAlign: "center" }}>
      {isClicked ? (
        <CreateNote closeHandler={closeHandler} />
      ) : (
        <CreateNoteTextField clickHandler={openHandler} />
      )}
      <Notes notes={notesFromFrirebase} sharedNotes={sharedNotes} />
    </Box>
  );
};

export default Dashboard;
