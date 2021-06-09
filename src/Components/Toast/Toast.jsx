import { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function Toast({ open, type, message }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    }
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
