import React from 'react'
import PropTypes from "prop-types";
import LogoutButton from "../components/LogoutButton";
const TeacherLayout = ({children}) => {
  return (
    <>
      <div>TeacherLayout</div>
      <LogoutButton />
      {children}
    </>
  )
}

TeacherLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TeacherLayout