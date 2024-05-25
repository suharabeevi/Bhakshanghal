import HomePage from "../../components/home/Body/Body";
import HeaderNav from "../../components/header/headerNav";
import Card from "../../components/home/Body/Card";
import React from 'react'

function Home() {
  return (
    <div>
        <HeaderNav/>
      <HomePage/>
     <Card/>
    </div>
  )
}

export default Home
