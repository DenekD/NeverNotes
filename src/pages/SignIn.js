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
import { signIn } from "../store/actions/authActions";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

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

    dispatch(signIn({ email, password }));
  };
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4" color="green" align="center" gutterBottom>
        Zaloguj sie
      </Typography>

      <FormControl
        autoComplete="off"
        size="medium"
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
          color="info"
          variant="outlined"
          type="password"
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="success"
          onClick={handleSubmit}
          sx={{ mx: "auto", mt: 2 }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          zaloguj sie
        </Button>
        {/* !!!!!!!!! do zrobienia text error */}
        <div className="">{authError ? <p>{authError}</p> : null}</div>
      </FormControl>
    </Container>
  );
};

export default SignIn;
