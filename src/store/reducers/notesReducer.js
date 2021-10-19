const initState = {};

const notesReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("created note", action.project);
      return state;
    case "CREATE_NOTE_ERROR":
      console.log("bład w note action w async operation", action.err);
      return state;
    case "SHARED_PROJECT":
      console.log("note is shared");
      return state;
    case "UPDATE_NOTE":
      console.log("note is updated");
      return state;
    case "DELETE_PROJECT":
      console.log("note deleted", action.id);
      return state;
    case "DELETE_PROJECT_ERROR":
      console.log("deleting note faild", action.err);
      return state;
    default:
      return state;
  }
};
export default notesReducer;
