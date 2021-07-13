import React from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <h1>I am a header</h1>
      {children}
      <h1>I am a footer</h1>
    </div>
  )
}

export default Layout
