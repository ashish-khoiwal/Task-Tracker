import { Dialog } from "@material-ui/core";
import React from "react";

const Popup = ({ children, openPopup, setOpenPopup }) => {
  return <Dialog open={openPopup}>{children}</Dialog>;
};

export default Popup;
