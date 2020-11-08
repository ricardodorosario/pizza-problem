import React, { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function Alert(props) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    console.log(props.open, open);
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
