import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SnackBarComponent = () => {
  const { isNotificationOpen, notificationMessage, severity } = useSelector(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    dispatch({ type: "CLOSE_NOTIFICATION", reason });
  };

  return (
    <>
      <Snackbar
        open={isNotificationOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {notificationMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBarComponent;
