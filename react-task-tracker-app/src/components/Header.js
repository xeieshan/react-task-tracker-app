import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => {
  return (
    <header>{props.title}</header>
  )
}
Header.defaultProps = {
    title: "Task Tracker App"
}

Header.prototype = {
title: PropTypes.string.isRequired
}
export default Header