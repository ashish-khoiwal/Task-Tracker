import { Dialog } from "@material-ui/core";
import React from "react";

const EditUserPopup = ({ children, popupForUserDetails }) => {
  return <Dialog open={popupForUserDetails}>{children}</Dialog>;
};

export default EditUserPopup;
