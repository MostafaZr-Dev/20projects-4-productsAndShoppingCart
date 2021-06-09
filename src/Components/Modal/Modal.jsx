import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

function Modal({ open, onClose, title, children, actions, maxWidth }) {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      maxWidth={maxWidth}
      fullWidth={true}
    >
      <DialogTitle id="modal-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}

export default Modal;
