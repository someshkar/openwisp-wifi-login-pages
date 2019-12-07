import React from "react";

import PasswordChange from "./password-change";

const PasswordChangePage = () => {
  return (
    <div
      style={{
        maxWidth: "100vw",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PasswordChange />
    </div>
  );
};

export default PasswordChangePage;
