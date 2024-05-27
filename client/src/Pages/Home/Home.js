import HomePage from "../../components/home/Body/Body";
import HeaderNav from "../../components/header/headerNav";
import Footer from "../../components/Footer/Footer";
import React from 'react'

function Home() {
  return (
    <div>
        <HeaderNav/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default Home
