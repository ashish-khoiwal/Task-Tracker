import React from "react";
import BasicTable from "./table";

const Dashboard = ({
  Myprofile,
  Data,
  setpopupForUserDetails,
  setidForPopup,
  children,
  DeleteUser
}) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Hey {Myprofile.name}!, Here is the list of all registrants.
      </h2>
      <BasicTable
        Data={Data}
        setidForPopup={setidForPopup}
        DeleteUser={DeleteUser}
        setpopupForUserDetails={setpopupForUserDetails}
      />
      {children}
    </div>
  );
};

export default Dashboard;

