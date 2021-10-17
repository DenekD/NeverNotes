const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// .collection("notifications") nie mamy tej kolekcji ale firstore stworzy ją dla nas
// .then((doc) => console.log("notification added", doc)) nie w vscode a w functions w firebase na serwerze
// const createNotification = (notification) => {
//   return admin
//     .firestore()
//     .collection("notifications")
//     .add(notification)
//     .then((doc) => console.log("notification added", doc));
// };

const createSharedNote = (data) => {
  return admin.firestore().collection("sharedNotes").add(data);
};

// za kazdym razem gdy w firestore w kolekcji 'projects' jest tworzony nowy dokument
// .document("projects/{projectId}") dajemy zmienną na project id wiec dotyczy kazdego projektu w kolekcji "projects"
// .onCreate((doc) => { bierze doc czyli data które są utworzone
// const project = doc.data(); zwraca dane z projektu inaczej sa nie dostepne
// nastepnie tworzymy obiekt notification z danymi z tego nowo utworzonego projektu
//time: admin.firestore.FieldValue.serverTimestamp(), tworzy timestamp kiedy notification jest tworzony
// dodajemy ten notification object jako dokument do notification collection w firestore db

// exports.projectCreated = functions.firestore
//   .document("projects/{projectId}")
//   .onCreate((doc) => {
//     const project = doc.data();
//     const notification = {
//       content: "Added a new project",
//       user: `${project.authorFirtsName} ${project.authorLastName}`,
//       time: admin.firestore.FieldValue.serverTimestamp(),
//     };

//     return createNotification(notification);
//   });

//chcemy stworzyc trigger który sie uruchamia kiedy user jest tworzony w auth service
// chcemy stworzyc notification object kiedy user jest utworzony
//w tej app jak dotychczas kiedy tworzymy usera w auth service to pozniej w kolekcji 'users' w firestore towrzymy nowy dokument tego usera gdzie jest imie i nazwisko a w auth tego nie ma tam jest tylko email i password
// do notification object potrzebujemy tego i tego
//.onCreate((user) => dostaje dane nowo utworzonego usra w auth i kozrzystamy pozniej z tych danych .doc(user.uid)
//.firestore().collection("users").doc(user.uid) to daje nam referencje do tego dokumentu nowo utworzonego usera
// i teraz na tej referencji wywołujemya async .get().then(doc => ) callback który dostaje dane tego usera w user collection
// i tworzymy notification objcet tak jak wyzej
// exports.userJoined = functions.auth.user().onCreate((user) => {
//   return admin
//     .firestore()
//     .collection("users")
//     .doc(user.uid)
//     .get()
//     .then((doc) => {
//       const newUser = doc.data();
//       const notification = {
//         content: "Joined the party",
//         user: `${newUser.firstName} ${newUser.lastName}`,
//         time: admin.firestore.FieldValue.serverTimestamp(),
//       };

//       return createNotification(notification);
//     });
// });

exports.sharedNoteCreated = functions.firestore
  .document("sharedNote/{projectId}")
  .onCreate((doc) => {
    const data = doc.data();

    return createSharedNote(data);
  });

// return admin
//   .database()
//   .ref("/messages")
//   .push({
//     text: sanitizedMessage,
//     author: { uid, name, picture, email },
//   })
//   .then(() => {
//     console.log("New Message written");
//     // Returning the sanitized message to the client.
//     return { text: sanitizedMessage };
//   });
