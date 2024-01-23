import React from 'react'

const AboutLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) =>{
    return (
    <>
    <nav>About Navbar</nav>
    <main>{children}</main>
    </>
  )
}

export default AboutLayout
