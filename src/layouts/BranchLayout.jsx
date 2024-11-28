import React from "react";
import PropTypes from "prop-types";
import LogoutButton from "../components/LogoutButton";

const BranchLayout = ({ children }) => {
  return (
    <>
      <div>BranchLayout</div>
      <LogoutButton />
      {children}
    </>
  );
};

BranchLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default BranchLayout;
