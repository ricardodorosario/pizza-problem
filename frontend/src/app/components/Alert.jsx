import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

/**
 * React component to show an alert message
 * @param {*} props
 */
export default function Alert(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.open !== open) {
      setOpen(props.open);
    }
  });

  function handleClose() {
    props.handleClose();
    () => setOpen(false);
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={props.message}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={handleClose}>
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );
}

Alert.proptypes = {
  message: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
Alert.defaultProps = {
  message: "",
  open: false,
  handleClose: () => {},
};
