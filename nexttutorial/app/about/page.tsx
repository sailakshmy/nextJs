import React from 'react';
import Link from 'next/link';

const About = () => {
    //Throwing an error on purpose so that the error boundary can be triggered
    // throw new Error('Not today!');
  return (
   <>
    <h1>
      About Page
    </h1>
    <Link href="/">Link to Home Page</Link>
   </>
  )
}

export default About
