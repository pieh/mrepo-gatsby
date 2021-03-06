import React from 'react'


import PropTypes from 'prop-types'




const Layout = ({ children }) => (
 
    
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
 
)
Layout.propTypes = {
  children: PropTypes.func,
}
export default Layout