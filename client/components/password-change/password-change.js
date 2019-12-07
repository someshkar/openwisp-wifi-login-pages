import "./index.css";
import React, {useState} from "react";

const PasswordChange = () => {
  const [oldPassword, changeOldPassword] = useState();
  return (
    <div className="owisp-passchange-container">
      <div className="title">Change your password</div>
      <input
        style={{marginTop: "1rem"}}
        type="password"
        name="oldPassword"
        placeholder="Old Password"
      />
      <input type="password" name="newPassword" placeholder="New Password" />
      <div className="owisp-passchange-submit">Submit</div>
    </div>
  );
};

export default PasswordChange;
