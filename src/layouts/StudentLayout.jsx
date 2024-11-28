import React from "react";
import PropTypes from "prop-types";
import LogoutButton from "../components/LogoutButton";

const StudentLayout = ({ children }) => {
  return (
    <>
      <div>StudentLayout</div>
      <LogoutButton />
      {children}
    </>
  );
};

StudentLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default StudentLayout;
