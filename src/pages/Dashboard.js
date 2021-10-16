import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import Notes from "../components/Notes/Notes";
// import SnackBarComponent from "../helpers/SnackBarComponent";

const Dashboard = () => {
  const authorId = useSelector((state) => state.firebase.auth.uid);
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
      collection: "notes",
      doc: authorId,
      subcollections: [{ collection: "sharedNotes" }],
      storeAs: "sharedNotesFromOtherUser",
      orderBy: ["createdAt", "desc"],
    },
  ]);

  const notesFromFrirebase = useSelector(
    (state) => state.firestore.ordered.UserNotes
  );
  const sharedCredentials = useSelector(
    (state) => state.firestore.ordered.sharedNotesFromOtherUser
  );

  sharedCredentials && console.log(sharedCredentials);

  // notesFromFrirebase && console.log(notesFromFrirebase);

  return (
    <>
      {/* <SnackBarComponent /> */}
      <Notes notes={notesFromFrirebase} />
    </>
  );
};

export default Dashboard;
