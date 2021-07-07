import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { auth } from "../../firebase";

function Dropdown() {
  // handles click events for Vertical Item Icon
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(auth.signOut());
  };

  return (
    <IconButton>
      <MoreVertIcon
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        // onClick={handleClose}
      >
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>

        <MenuItem onClick={handleClose}>Close</MenuItem>
      </Menu>
    </IconButton>
  );
}

export default Dropdown;
