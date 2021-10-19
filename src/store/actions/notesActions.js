import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
} from "@firebase/firestore";

import { getAuth } from "firebase/auth";

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

export const deleteNote = (id, sharedWith) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const authorEmail = getState().firebase.auth.email;

    // ustalam (na podstawie property sharedWith) z której kolekcji usunąc
    const isSharing = sharedWith ? true : false;

    const deleteNotes = async () => {
      if (isSharing) {
        await deleteDoc(doc(db, `sharedNotes/${authorEmail}/sharedNotes`, id));
        await deleteDoc(doc(db, `sharedNotes/${sharedWith}/sharedNotes`, id));
      } else {
        await deleteDoc(doc(db, `notes/${authorId}/notes`, id));
      }
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

export const shareNote = (note, email) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const authorEmail = getState().firebase.auth.email;

    const shareData = async () => {
      // ustawiam w kolekcji autora
      const noteWithExtraData = {
        ...note,
        sharedWith: email,
      };

      await setDoc(
        doc(db, `sharedNotes/${authorEmail}/sharedNotes`, note.id),
        noteWithExtraData
      );

      // ustawiam w kolekcji collab
      const noteWithExtraData2 = {
        ...note,
        sharedWith: authorEmail,
      };

      await setDoc(
        doc(db, `sharedNotes/${email}/sharedNotes`, note.id),
        noteWithExtraData2
      );

      // usuwam z kolekcji w notes
      await deleteDoc(doc(db, `notes/${authorId}/notes`, note.id));
    };

    try {
      await shareData();
      dispatch({ type: "SHARED_PROJECT", id: note.id });
      dispatch({
        type: "OPEN_NOTIFICATION",
        message: `note is shareing with ${email}`,
      });
    } catch (err) {
      dispatch({ type: "SHARED_PROJECT_ERROR", err });
    }
  };
};

export const updateNote = (id, newContent, sharedWith) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const authorEmail = getState().firebase.auth.email;

    if (!id) {
      return;
    }

    // console.log(id, newContent);

    const updateData = async () => {
      if (sharedWith) {
        const collectionRef = doc(
          db,
          `sharedNotes/${authorEmail}/sharedNotes`,
          id
        );
        const collectionRefColab = doc(
          db,
          `sharedNotes/${sharedWith}/sharedNotes`,
          id
        );

        await updateDoc(collectionRef, {
          content: newContent,
        });
        await updateDoc(collectionRefColab, {
          content: newContent,
        });
      } else {
        const collectionRef = doc(db, `notes/${authorId}/notes`, id);
        await updateDoc(collectionRef, {
          content: newContent,
        });
      }
    };

    try {
      await updateData();
      dispatch({ type: "UPDATE_NOTE", id });
      dispatch({ type: "OPEN_NOTIFICATION", message: "note was updated" });
    } catch (err) {
      dispatch({ type: "UPDATE_NOTE_ERROR", err });
    }
  };
};
