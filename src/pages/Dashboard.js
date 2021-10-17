import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import Notes from "../components/Notes/Notes";
// import SnackBarComponent from "../helpers/SnackBarComponent";

const Dashboard = () => {
  const authorId = useSelector((state) => state.firebase.auth.uid);
  const authorEmail = useSelector((state) => state.firebase.auth.email);
  // console.log(authorId);

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

  // sharedNotes && notesFromFrirebase && notesFromFrirebase.concat(sharedNotes);
  // notesFromFrirebase && notesFromFrirebase.push(sharedNotes);

  return (
    <>
      {/* <SnackBarComponent /> */}
      <Notes notes={notesFromFrirebase} sharedNotes={sharedNotes} />
    </>
  );
};

export default Dashboard;
