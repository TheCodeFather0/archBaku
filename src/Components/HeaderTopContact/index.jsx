import React from "react";

const HeaderTopContact = ({ title, icon }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="me-2">{icon}</div>
      {title}
    </div>
  );
};

export default HeaderTopContact;
