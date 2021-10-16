import Layout from "./components/Layout/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateNote from "./pages/CreateNote";
import Dashboard from "./pages/Dashboard";
import NoteDatail from "./pages/NoteDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { PrivateRoute } from "./helpers/PrivateRoute";

function App() {
  useSelector((state) => console.log(state));
  return (
    <div>
      <BrowserRouter basename="/NeverNotes">
        <Layout>
          <Switch>
            <PrivateRoute exact path="/">
              <Dashboard />
            </PrivateRoute>
            <Route path="/notes/:id">
              <NoteDatail />
            </Route>
            <PrivateRoute path="/create">
              <CreateNote />
            </PrivateRoute>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
