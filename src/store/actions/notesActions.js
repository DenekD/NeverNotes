import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "@firebase/firestore";

export const createNote = (note) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();

    const authorId = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;

    const noteDataWithAuthData = {
      ...note,
      authorFirtsName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date(),
    };

    const addData = async () => {
      const collectionRef = collection(db, `notes/${authorId}/notes`);
      // const collectionRef = collection(db, "notes");
      await addDoc(collectionRef, noteDataWithAuthData);

      // await setDoc(doc(db, "notes", authorId), noteDataWithAuthData);
    };

    try {
      await addData();
      dispatch({ type: "CREATE_PROJECT", note });
      dispatch({ type: "OPEN_NOTIFICATION", message: "note was created" });
    } catch (err) {
      dispatch({ type: "CREATE_PROJECT_ERROR", err });
    }
  };
};

export const deleteNote = (id) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    const authorId = getState().firebase.auth.uid;

    const deleteNotes = async () => {
      await deleteDoc(doc(db, `notes/${authorId}/notes`, id));
    };

    try {
      await deleteNotes();
      dispatch({ type: "DELETE_PROJECT", id });
      dispatch({ type: "OPEN_NOTIFICATION", message: "note was deleted" });
    } catch (err) {
      dispatch({ type: "DELETE_PROJECT_ERROR", err });
    }
  };
};
