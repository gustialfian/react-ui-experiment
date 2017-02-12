import React from 'react'
import { Link } from 'react-router'

class NavLinks extends React.Component {
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
}

export default NavLinks
