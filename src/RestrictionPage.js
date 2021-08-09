import React, { useEffect } from "react";

const RestrictionPage = () => {
  useEffect(() => {
    const showalert = () => {
      if(window.confirm("Restricted Page")){
        window.location.href = "http://localhost:3000/";
      }
    };
    showalert();
  }, []);

  return (
    <div>
      {/* {showalert()} */}
      <h2 style={{ textAlign: "center", marginTop: "30vh" }}>
        Restricted page. Only accesible to admin
      </h2>
      p
    </div>
  );
};

export default RestrictionPage;
