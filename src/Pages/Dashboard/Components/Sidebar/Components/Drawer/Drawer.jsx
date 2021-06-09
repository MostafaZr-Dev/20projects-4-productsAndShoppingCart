import { DrawerWrapper } from "./DrawerStyles";

function SidebarDrawer({ open, onClose, children }) {
  return (
    <DrawerWrapper anchor="left" open={open} onClose={onClose}>
      {children}
    </DrawerWrapper>
  );
}

export default SidebarDrawer;
