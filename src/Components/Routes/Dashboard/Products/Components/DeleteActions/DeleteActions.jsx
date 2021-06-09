import { Button } from "@material-ui/core";

import { StyledButton } from "./DeleteActionsStyles";

function DeleteActions({ onAccept, onCancel }) {
  return (
    <>
      <StyledButton className="delete" onClick={onAccept}>
        حذف محصول
      </StyledButton>
      <StyledButton className="cancel" onClick={onCancel}>
        انصراف
      </StyledButton>
    </>
  );
}

export default DeleteActions;
