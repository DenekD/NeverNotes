import {
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { Redirect } from "react-router";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { signUp } from "../store/actions/authActions";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();

  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.authError);
  const auth = useSelector((state) => state.firebase.auth);

  if (isLoaded(auth) && !isEmpty(auth)) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(false);
    setEmailError(false);

    if (email === "") {
      setEmailError(true);
      return;
    }
    if (password === "") {
      setPasswordError(true);
      return;
    }
    if (firstName === "") {
      setFirstNameError(true);
      return;
    }
    if (lastName === "") {
      setLastNameError(true);
      return;
    }

    dispatch(signUp({ email, password, firstName, lastName }));
  };
  return (
    <Container>
      <Typography variant="h4" color="green" align="center" gutterBottom>
        Zarerejestruj się
      </Typography>

      <FormControl
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          width: {
            xs: "100%",
            md: "60%",
          },
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          variant="outlined"
          label="email"
          color="secondary"
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          type="password"
          color="info"
          variant="outlined"
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        <TextField
          // sx={{ mb: 2 }}
          margin="normal"
          required
          fullWidth
          color="info"
          variant="outlined"
          label="first name"
          onChange={(e) => setFirstName(e.target.value)}
          error={firstNameError}
        />
        <TextField
          // sx={{ mb: 2 }}
          margin="normal"
          required
          fullWidth
          color="info"
          variant="outlined"
          label="last name"
          onChange={(e) => setLastName(e.target.value)}
          error={lastNameError}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="success"
          sx={{ mx: "auto", mt: 2 }}
          endIcon={<KeyboardArrowRightIcon />}
          onClick={handleSubmit}
        >
          zarejestruj się
        </Button>
        {/* !!!!!!!!! do zrobienia text error */}
        <div className="">{authError ? <p>{authError}</p> : null}</div>
      </FormControl>
    </Container>
  );
};

export default SignUp;
